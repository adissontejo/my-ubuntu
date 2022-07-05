import { FC } from 'react';

import { Container } from './styles';

export type FileProps = {
  name: string;
  type: string;
  src: string;
};

export const File: FC<FileProps> = ({ name, type, src }) => {
  return (
    <Container>
      <img
        src={src || `/nautilus/mimetypes/${type}.svg`}
        alt={name}
        draggable={false}
        className="icon"
      />
      <p className="name">
        {name}
        <wbr />.{type}
      </p>
    </Container>
  );
};
