import { FC } from 'react';

import { useWindows } from '~/hooks';
import { WindowKey } from '~/types';

import { Container } from './styles';
import { DesktopItem } from './DesktopItem';

export type DesktopProps = {
  items: {
    key: WindowKey;
    name: string;
  }[];
};

export const Desktop: FC<DesktopProps> = ({ items }) => {
  const { openWindow } = useWindows();

  return (
    <Container>
      {items.map(item => (
        <DesktopItem
          key={item.key}
          name={item.name}
          src={`/apps/${item.key}.svg`}
          action={() => openWindow(item.key)}
        />
      ))}
      <DesktopItem
        src="/apps/github.svg"
        name="GitHub"
        action="https://github.com/adissontejo"
      />
      <DesktopItem
        src="/apps/linkedin.svg"
        name="LinkedIn"
        action="https://linkedin.com/in/adissontejo"
      />
    </Container>
  );
};
