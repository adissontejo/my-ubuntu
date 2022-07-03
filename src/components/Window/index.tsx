import { FC, ReactNode } from 'react';
import { Rnd } from 'react-rnd';
import { IoMdRemove, IoIosSquareOutline, IoMdClose } from 'react-icons/io';

import { Container, Header } from './styles';
import { useRnd } from './hook';
import { Transitions } from './Transitions';

export type WindowProps = {
  title?: string;
  defaultWidthPercent?: number;
  defaultHeightPercent?: number;
  minWidth?: number;
  minHeight?: number;
  minimized?: boolean;
  closed?: boolean;
  positionZ?: number;
  onMinimize?: () => void;
  onClose?: () => void;
  onCloseEnd?: () => void;
  onFocus?: () => void;
  children?: ReactNode;
};

export const Window: FC<WindowProps> = ({
  title,
  defaultWidthPercent = 60,
  defaultHeightPercent = 80,
  minWidth = 300,
  minHeight = 150,
  minimized,
  closed,
  children,
  positionZ = 0,
  onMinimize,
  onClose,
  onCloseEnd,
  onFocus,
  ...rest
}) => {
  const {
    position,
    dragPosition,
    size,
    resizeSize,
    enabled,
    fullFilled,
    onMinimizeEntered,
    onMiminizeExit,
    handleFullFill,
    onFullFillExited,
    onDragStop,
    onResizeStop,
  } = useRnd({
    defaultWidthPercent,
    defaultHeightPercent,
    minimized,
  });

  return (
    <Rnd
      dragHandleClassName="header"
      minWidth={minWidth}
      minHeight={minHeight}
      maxWidth="100%"
      maxHeight="100%"
      bounds="parent"
      position={position}
      size={size}
      enableResizing={enabled}
      disableDragging={!enabled}
      onDragStop={onDragStop}
      onResizeStop={onResizeStop}
      style={{ zIndex: positionZ * 10 }}
    >
      <Transitions
        minimized={minimized}
        onMinimizeEntered={onMinimizeEntered}
        onMinimizeExit={onMiminizeExit}
        fullFilled={fullFilled}
        onFullFillExited={onFullFillExited}
        closed={closed}
        onCloseEntered={onCloseEnd}
      >
        <Container
          className="minimize fullFill close"
          position={dragPosition}
          size={resizeSize}
          closed={closed || minimized}
          fullFilled={fullFilled}
          onMouseDown={onFocus}
          {...rest}
        >
          <Header className="header" onDoubleClick={handleFullFill}>
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
