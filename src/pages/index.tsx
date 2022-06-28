import { Bash, Dock, Header } from '~/components';

import { Container } from './styles';

const Home = () => {
  return (
    <Container>
      <Header />
      <Dock />
      <main>
        <Bash />
      </main>
    </Container>
  );
};

export default Home;
