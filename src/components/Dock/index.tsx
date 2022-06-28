import terminal from 'public/terminal.png';
import github from 'public/github.png';
import linkedin from 'public/linkedin.png';

import { Container } from './styles';
import { DockItem } from './DockItem';

export const Dock = () => (
  <Container>
    <DockItem src={terminal} alt="Terminal" />
    <DockItem src={github} alt="GitHub" href="https://github.com/adissontejo" />
    <DockItem
      src={linkedin}
      alt="LinkedIn"
      href="https://linkedin.com/in/adissontejo"
    />
  </Container>
);
