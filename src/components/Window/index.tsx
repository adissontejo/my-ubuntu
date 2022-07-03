import { FC, ReactNode } from 'react';
import { Rnd } from 'react-rnd';
import { IoMdRemove, IoIosSquareOutline, IoMdClose } from 'react-icons/io';
import Image from 'next/image';

import { Container, Header } from './styles';
import { useRnd } from './hook';
import { Transitions } from './Transitions';

export type WindowProps = {
  title?: string;
  defaultWidthPercent?: number;
  defaultHeightPercent?: number;
  minWidth?: number;
  minHeight?: number;
  navigateEnabled?: boolean;
  backEnabled?: boolean;
  forwardEnabled?: boolean;
  minimized?: boolean;
  closed?: boolean;
  positionZ?: number;
  onBack?: () => void;
  onForward?: () => void;
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
  navigateEnabled,
  backEnabled,
  forwardEnabled,
  minimized,
  closed,
  children,
  positionZ = 0,
  onBack,
  onForward,
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
          <Header
            className="header"
            onDoubleClick={handleFullFill}
            navigateEnabled={navigateEnabled}
            backEnabled={backEnabled}
            forwardEnabled={forwardEnabled}
          >
            <button onClick={onBack} className="back">
              <Image
                src="/actions/back.svg"
                alt="Voltar"
                width={35}
                height={15}
                objectFit="contain"
              />
            </button>
            <button onClick={onForward} className="forward">
              <Image
                src="/actions/forward.svg"
                alt="Avançar"
                width={35}
                height={15}
                objectFit="contain"
              />
            </button>
            <h4>{title}</h4>
            <button onClick={onMinimize} className="action-button">
              <IoMdRemove className="icon" fill="white" />
            </button>
            <button onClick={handleFullFill} className="action-button">
              <IoIosSquareOutline className="icon" fill="white" />
            </button>
            <button onClick={onClose} className="action-button close">
              <IoMdClose className="icon" />
            </button>
          </Header>
          {children}
        </Container>
      </Transitions>
    </Rnd>
  );
};
