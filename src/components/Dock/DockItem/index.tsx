import { FC } from 'react';
import Image, { StaticImageData } from 'next/image';

import { Container } from './styles';

export type DockItemProps = {
  src: StaticImageData;
  alt: string;
  href?: string;
};

export const DockItem: FC<DockItemProps> = ({ src, alt, href }) => (
  <Container onClick={href && (() => window.open(href, '_blank').focus())}>
    <div className="indicator" />
    <Image src={src} alt={alt} width={32} height={32} />
  </Container>
);
