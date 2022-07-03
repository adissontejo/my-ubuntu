import { FC, ReactNode } from 'react';
import { CSSTransition } from 'react-transition-group';

export type TransitionsType = {
  minimized?: boolean;
  onMinimizeEntered?: () => void;
  onMinimizeExit?: () => void;
  fullFilled?: boolean;
  onFullFillExited?: () => void;
  closed?: boolean;
  onCloseEntered?: () => void;
  children?: ReactNode;
};

export const Transitions: FC<TransitionsType> = ({
  minimized,
  onMinimizeEntered,
  onMinimizeExit,
  fullFilled,
  onFullFillExited,
  closed,
  onCloseEntered,
  children,
}) => (
  <CSSTransition
    in={minimized}
    timeout={300}
    classNames="minimize"
    onEntered={onMinimizeEntered}
    onExit={onMinimizeExit}
  >
    <CSSTransition
      in={fullFilled}
      timeout={300}
      classNames="fullFill"
      onExited={onFullFillExited}
    >
      <CSSTransition
        in={closed}
        timeout={300}
        classNames="close"
        onEntered={onCloseEntered}
      >
        {children}
      </CSSTransition>
    </CSSTransition>
  </CSSTransition>
);
