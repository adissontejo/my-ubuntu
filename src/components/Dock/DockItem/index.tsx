import { FC } from 'react';

import { Container } from './styles';

export type DockItemProps = {
  src: string;
  alt: string;
  open?: boolean;
  focus?: boolean;
  action?: string | (() => void);
};

export const DockItem: FC<DockItemProps> = ({
  src,
  alt,
  open,
  focus,
  action,
}) => (
  <Container
    open={open}
    focus={focus}
    onClick={
      typeof action === 'string'
        ? () => window.open(action, '_blank').focus()
        : action
    }
  >
    <div className="indicator" />
    <p className="alt">{alt}</p>
    <img src={src} alt={alt} draggable={false} className="icon" />
  </Container>
);
