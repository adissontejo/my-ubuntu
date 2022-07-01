import { FC } from 'react';
import Image from 'next/image';

import { Container } from './styles';

export type FolderProps = {
  name: string;
};

export const Folder: FC<FolderProps> = ({ name }) => (
  <Container>
    <div className="icon">
      <Image
        src="/nautilus/folder.svg"
        alt={name}
        width={48}
        height={48}
        objectFit="contain"
      />
    </div>
    <p className="name">{name}</p>
  </Container>
);
