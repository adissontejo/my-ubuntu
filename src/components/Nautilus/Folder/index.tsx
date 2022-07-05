import { FC } from 'react';

import { Container } from './styles';

export type FolderProps = {
  name: string;
  src?: string;
  action: () => void;
};

export const Folder: FC<FolderProps> = ({ name, src, action }) => (
  <Container onDoubleClick={action}>
    <img
      src={src || '/nautilus/folder.svg'}
      alt={name}
      draggable={false}
      className="icon"
    />
    <p className="name">{name}</p>
  </Container>
);
