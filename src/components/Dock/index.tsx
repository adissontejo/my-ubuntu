import { FC } from 'react';

import { useWindows } from '~/hooks';
import { WindowKey } from '~/types';

import { Container } from './styles';
import { DockItem } from './DockItem';

export type DockProps = {
  items: {
    key: WindowKey;
    name: string;
  }[];
};

export const Dock: FC<DockProps> = ({ items }) => {
  const { windows, focus, openWindow } = useWindows();

  return (
    <Container>
      {items.map(item => (
        <DockItem
          key={item.key}
          src={`/apps/${item.key}.svg`}
          alt={item.name}
          action={() => openWindow(item.key)}
          open={!!windows[item.key] && !windows[item.key].closed}
          focus={item.key === focus}
        />
      ))}
      <DockItem
        src="/apps/github.svg"
        alt="GitHub"
        action="https://github.com/adissontejo"
      />
      <DockItem
        src="/apps/linkedin.svg"
        alt="LinkedIn"
        action="https://linkedin.com/in/adissontejo"
      />
    </Container>
  );
};
