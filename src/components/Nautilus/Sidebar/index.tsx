import { FC } from 'react';

import { home } from '~/data';
import { Dir } from '~/types';

import { SidebarItem } from './SidebarItem';
import { Container } from './styles';

export type SidebarProps = {
  dirname?: string;
  onSelectDir?: (arg: Dir) => void;
};

export const Sidebar: FC<SidebarProps> = ({ dirname, onSelectDir }) => {
  return (
    <Container>
      <SidebarItem
        src="/nautilus/sidebar/home.svg"
        label="Pasta pessoal"
        selected={dirname === 'Pasta pessoal'}
        onSelect={() => onSelectDir(home)}
      />
      <SidebarItem
        src="/nautilus/sidebar/documents.svg"
        label="Documentos"
        selected={dirname === 'Documentos'}
      />
    </Container>
  );
};
