import terminal from 'public/terminal.png';

import { Bash, Dock, DockItem, Header } from '~/components';

import { Container } from './styles';
import { useWindows } from './hook';

const Home = () => {
  const { registerDockItem, registerWindow } = useWindows();

  return (
    <Container>
      <Header />
      <Dock>
        <DockItem src={terminal} alt="Terminal" {...registerDockItem('bash')} />
      </Dock>
      <main>
        <Bash {...registerWindow('bash')} />
      </main>
    </Container>
  );
};

export default Home;
