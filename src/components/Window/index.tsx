import { FC, HTMLAttributes, useState } from 'react';
import { Rnd } from 'react-rnd';
import { IoMdRemove, IoIosSquareOutline, IoMdClose } from 'react-icons/io';
import { CSSTransition } from 'react-transition-group';

import { Container, Header } from './styles';

export type WindowProps = HTMLAttributes<HTMLElement> & {
  title?: string;
  defaultWidth?: number | string;
  defaultHeight?: number | string;
};

export const Window: FC<WindowProps> = ({ title, children, ...rest }) => {
  const [enabled, setEnabled] = useState(true);
  const [fullFilled, setFullFilled] = useState(false);
  const [position, setPosition] = useState({ x: 50, y: 50 });
  const [size, setSize] = useState({ width: '60%', height: '80%' });

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
        in={fullFilled}
        timeout={300}
        onExited={() => setEnabled(true)}
        classNames="container"
      >
        <Container
          className="container"
          position={position}
          size={size}
          {...rest}
        >
          <Header className="header">
            <h4>{title}</h4>
            <div className="buttons">
              <button>
                <IoMdRemove className="icon" />
              </button>
              <button onClick={handleFullFill}>
                <IoIosSquareOutline className="icon" />
              </button>
              <button className="close">
                <IoMdClose className="icon" />
              </button>
            </div>
          </Header>
          {children}
        </Container>
      </CSSTransition>
    </Rnd>
  );
};
