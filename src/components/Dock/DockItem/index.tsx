import { FC } from 'react';
import Image, { StaticImageData } from 'next/image';

import { Container } from './styles';

export type DockItemProps = {
  src: StaticImageData;
  alt: string;
};

export const DockItem: FC<DockItemProps> = ({ src, alt }) => (
  <Container>
    <div className="indicator" />
    <Image src={src} alt={alt} width={33} height={33} />
  </Container>
);
