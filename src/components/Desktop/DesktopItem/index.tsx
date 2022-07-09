import { FC } from 'react';

import { Container } from './styles';

export type DesktopItemProps = {
  src: string;
  name: string;
  action?: string | (() => void);
};

export const DesktopItem: FC<DesktopItemProps> = ({ src, name, action }) => (
  <Container
    onClick={
      typeof action === 'string'
        ? () => window.open(action, '_blank').focus()
        : action
    }
  >
    <img src={src} alt={name} className="icon" />
    <p className="name">{name}</p>
  </Container>
);
