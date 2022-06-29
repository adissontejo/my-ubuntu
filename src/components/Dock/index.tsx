import { FC, ReactNode } from 'react';

import github from 'public/github.png';
import linkedin from 'public/linkedin.png';

import { Container } from './styles';
import { DockItem } from '../DockItem';

export type DockProps = {
  children: ReactNode;
};

export const Dock: FC<DockProps> = ({ children }) => (
  <Container>
    {children}
    <DockItem
      src={github}
      alt="GitHub"
      action="https://github.com/adissontejo"
    />
    <DockItem
      src={linkedin}
      alt="LinkedIn"
      action="https://linkedin.com/in/adissontejo"
    />
  </Container>
);
