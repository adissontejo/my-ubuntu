import { Bash, Dock, DockItem, Header, Nautilus } from '~/components';

import { Container } from './styles';
import { useWindows } from './hook';

const Home = () => {
  const { registerDockItem, registerWindow } = useWindows();

  return (
    <Container>
      <Header />
      <Dock>
        <DockItem
          src="/dock/terminal.svg"
          alt="Terminal"
          {...registerDockItem('bash')}
        />
        <DockItem
          src="/dock/nautilus.svg"
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
