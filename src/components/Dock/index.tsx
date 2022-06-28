import terminal from 'public/terminal.png';

import { Container } from './styles';
import { DockItem } from './DockItem';

export const Dock = () => (
  <Container>
    <DockItem src={terminal} alt="Terminal" />
  </Container>
);
