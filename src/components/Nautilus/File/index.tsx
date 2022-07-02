import { FC } from 'react';
import Image from 'next/image';

import { Container } from './styles';

export type FileProps = {
  name: string;
  type: string;
  src: string;
};

export const File: FC<FileProps> = ({ name, type, src }) => {
  return (
    <Container>
      <div className="icon">
        <Image
          src={src || `/nautilus/mimetypes/${type}.svg`}
          alt={name}
          width={48}
          height={48}
          objectFit="contain"
          draggable={false}
        />
      </div>
      <p className="name">
        {name}.{type}
      </p>
    </Container>
  );
};
