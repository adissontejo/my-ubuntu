import { FC, ReactNode, useState } from 'react';
import { Rnd } from 'react-rnd';
import { IoMdRemove, IoIosSquareOutline, IoMdClose } from 'react-icons/io';
import { CSSTransition } from 'react-transition-group';

import { Container, Header } from './styles';

export type WindowProps = {
  title?: string;
  defaultWidth?: number | string;
  defaultHeight?: number | string;
  defaultX?: number;
  defaultY?: number;
  minimized?: boolean;
  onClose?: () => void;
  onMinimize?: () => void;
  children?: ReactNode;
};

export const Window: FC<WindowProps> = ({
  title,
  defaultWidth,
  defaultHeight,
  defaultX,
  defaultY,
  minimized,
  children,
  onMinimize,
  onClose,
  ...rest
}) => {
  const [closed, setClosed] = useState(false);
  const [enabled, setEnabled] = useState(true);
  const [fullFilled, setFullFilled] = useState(false);
  const [position, setPosition] = useState({
    x: defaultX || 50,
    y: defaultY || 50,
  });
  const [size, setSize] = useState({
    width: defaultWidth || '60%',
    height: defaultHeight || '80%',
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
    >
      <CSSTransition
        in={!minimized && !closed}
        timeout={300}
        onExited={closed && onClose}
        classNames="open"
      >
        <CSSTransition
          in={fullFilled}
          timeout={300}
          onExited={() => setEnabled(true)}
          classNames="fullFill"
        >
          <Container
            className="fullFill open"
            position={position}
            size={size}
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
                <button onClick={() => setClosed(true)} className="close">
                  <IoMdClose className="icon" />
                </button>
              </div>
            </Header>
            {children}
          </Container>
        </CSSTransition>
      </CSSTransition>
    </Rnd>
  );
};
