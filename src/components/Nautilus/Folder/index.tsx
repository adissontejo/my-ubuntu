import { FC } from 'react';
import Image from 'next/image';

import { Container } from './styles';

export type FolderProps = {
  name: string;
  src?: string;
  action: () => void;
};

export const Folder: FC<FolderProps> = ({ name, src, action }) => (
  <Container onDoubleClick={action}>
    <div className="icon">
      <Image
        src={src || '/nautilus/folder.svg'}
        alt={name}
        width={48}
        height={48}
        objectFit="contain"
        draggable={false}
      />
    </div>
    <p className="name">{name}</p>
  </Container>
);
