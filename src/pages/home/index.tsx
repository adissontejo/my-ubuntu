import terminal from 'public/terminal.png';
import nautilus from 'public/nautilus.png';

import { Bash, Dock, DockItem, Header, Nautilus } from '~/components';

import { Container } from './styles';
import { useWindows } from './hook';

const Home = () => {
  const { registerDockItem, registerWindow } = useWindows();

  return (
    <Container>
      <Header />
      <Dock>
        <DockItem src={terminal} alt="Terminal" {...registerDockItem('bash')} />
        <DockItem
          src={nautilus}
          alt="Arquivos"
          {...registerDockItem('nautilus')}
        />
      </Dock>
      <main>
        <Bash {...registerWindow('bash')} />
        <Nautilus {...registerWindow('nautilus')} />
      </main>
    </Container>
  );
};

export default Home;
