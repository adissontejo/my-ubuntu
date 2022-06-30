import { FC, ReactNode } from 'react';

import { Container } from './styles';
import { DockItem } from '../DockItem';

export type DockProps = {
  children: ReactNode;
};

export const Dock: FC<DockProps> = ({ children }) => (
  <Container>
    {children}
    <DockItem
      src="/dock/github.svg"
      alt="GitHub"
      action="https://github.com/adissontejo"
    />
    <DockItem
      src="/dock/linkedin.svg"
      alt="LinkedIn"
      action="https://linkedin.com/in/adissontejo"
    />
  </Container>
);
