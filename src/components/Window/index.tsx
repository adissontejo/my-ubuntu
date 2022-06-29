import { FC, ReactNode, useState } from 'react';
import { Rnd } from 'react-rnd';
import { IoMdRemove, IoIosSquareOutline, IoMdClose } from 'react-icons/io';

import { Container, Header } from './styles';
import { Transitions } from './Transitions';

export type WindowProps = {
  title?: string;
  defaultWidth?: number | string;
  defaultHeight?: number | string;
  defaultX?: number;
  defaultY?: number;
  minimized?: boolean;
  closed?: boolean;
  positionZ?: number;
  onClose?: () => void;
  onMinimize?: () => void;
  bringWindowUp?: () => void;
  bringWindowDown?: () => void;
  children?: ReactNode;
};

export const Window: FC<WindowProps> = ({
  title,
  defaultWidth = '60%',
  defaultHeight = '80%',
  defaultX = 50,
  defaultY = 50,
  minimized,
  closed,
  children,
  positionZ = 0,
  onMinimize,
  onClose,
  bringWindowUp,
  bringWindowDown,
  ...rest
}) => {
  const [enabled, setEnabled] = useState(true);
  const [fullFilled, setFullFilled] = useState(false);
  const [position, setPosition] = useState({
    x: defaultX,
    y: defaultY,
  });
  const [size, setSize] = useState({
    width: defaultWidth,
    height: defaultHeight,
  });

  const handleFullFill = () => {
    if (fullFilled) {
      setFullFilled(false);

      return;
    }

    setFullFilled(true);
    setEnabled(false);
  };

  return (
    <Rnd
      dragHandleClassName="header"
      minWidth={300}
      minHeight={150}
      maxWidth={enabled ? '97%' : '100%'}
      maxHeight={enabled ? '97%' : '100%'}
      bounds="parent"
      position={!enabled ? { x: 0, y: 0 } : position}
      size={!enabled ? { width: '100%', height: '100%' } : size}
      enableResizing={enabled}
      disableDragging={!enabled}
      onDragStop={(event, data) => setPosition({ x: data.x, y: data.y })}
      onResizeStop={(event, dir, ref, delta, position) => {
        setPosition(position);
        setSize({ width: ref.style.width, height: ref.style.height });
      }}
      style={{ zIndex: positionZ }}
    >
      <Transitions
        minimized={minimized}
        onMinimizeEnd={bringWindowDown}
        fullFilled={fullFilled}
        onFullFillExit={() => setEnabled(true)}
        open={!closed}
        onCloseExit={bringWindowDown}
      >
        <Container
          className="minimize fullFill close"
          position={position}
          size={size}
          closed={closed || minimized}
          onMouseDown={bringWindowUp}
          {...rest}
        >
          <Header className="header">
            <h4>{title}</h4>
            <div className="buttons">
              <button onClick={onMinimize}>
                <IoMdRemove className="icon" />
              </button>
              <button onClick={handleFullFill}>
                <IoIosSquareOutline className="icon" />
              </button>
              <button onClick={onClose} className="close">
                <IoMdClose className="icon" />
              </button>
            </div>
          </Header>
          {children}
        </Container>
      </Transitions>
    </Rnd>
  );
};
