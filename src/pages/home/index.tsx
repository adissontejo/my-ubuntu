import { Bash, Dock, DockProps, Header, Nautilus } from '~/components';
import { useWindows } from '~/hooks';
import { WindowKey, WindowValue } from '~/types';

import { Container } from './styles';

const Home = () => {
  const {
    windows,
    positions,
    openWindow,
    minimizeWindow,
    softCloseWindow,
    closeWindow,
    main,
  } = useWindows();

  const dockItems: DockProps['items'] = [
    {
      key: 'bash',
      name: 'Terminal',
    },
    {
      key: 'nautilus',
      name: 'Arquivos',
    },
  ];

  const ToComponent = (key: WindowKey) => {
    switch (key) {
      case 'bash':
        return Bash;
      case 'nautilus':
        return Nautilus;
    }
  };

  return (
    <Container>
      <Header />
      <Dock items={dockItems} />
      <main ref={main}>
        {Object.entries(windows).map(
          ([key, value]: [WindowKey, WindowValue]) => {
            if (!value) {
              return null;
            }

            const Component = ToComponent(key);

            return (
              <Component
                key={key}
                {...value}
                positionZ={positions[key]}
                onMinimize={() => minimizeWindow(key)}
                onClose={() => softCloseWindow(key)}
                onCloseEnd={() => closeWindow(key)}
                onFocus={() => openWindow(key)}
              />
            );
          }
        )}
      </main>
    </Container>
  );
};

export default Home;
