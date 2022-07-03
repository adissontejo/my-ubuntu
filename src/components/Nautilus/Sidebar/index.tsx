import { FC } from 'react';

import { SidebarItem } from './SidebarItem';
import { Container } from './styles';

export type SidebarProps = {
  dirname: string;
  level: number;
  onSelectDir: (arg: number[]) => void;
};

export const Sidebar: FC<SidebarProps> = ({ dirname, level, onSelectDir }) => {
  return (
    <Container>
      <SidebarItem
        src="/nautilus/sidebar/home.svg"
        label="Pasta pessoal"
        selected={dirname === 'Pasta pessoal' && level === 0}
        onSelect={() => onSelectDir([])}
      />
      <SidebarItem
        src="/nautilus/sidebar/documents.svg"
        label="Documentos"
        selected={dirname === 'Documentos' && level === 1}
      />
    </Container>
  );
};
