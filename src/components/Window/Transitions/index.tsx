import { FC, ReactNode } from 'react';
import { CSSTransition } from 'react-transition-group';

export type TransitionsType = {
  minimized?: boolean;
  onMinimizeEnd?: () => void;
  fullFilled?: boolean;
  onFullFillExit?: () => void;
  open?: boolean;
  onOpenExit?: () => void;
  children?: ReactNode;
};

export const Transitions: FC<TransitionsType> = ({
  minimized,
  onMinimizeEnd,
  fullFilled,
  onFullFillExit,
  open,
  onOpenExit,
  children,
}) => (
  <CSSTransition
    in={minimized}
    timeout={300}
    classNames="minimize"
    onEntered={onMinimizeEnd}
  >
    <CSSTransition
      in={fullFilled}
      timeout={300}
      classNames="fullFill"
      onExited={onFullFillExit}
    >
      <CSSTransition
        in={open}
        timeout={300}
        classNames="open"
        onExited={onOpenExit}
        mountOnEnter
        unmountOnExit
      >
        {children}
      </CSSTransition>
    </CSSTransition>
  </CSSTransition>
);
