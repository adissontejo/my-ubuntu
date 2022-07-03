import { FC } from 'react';
import Image, { StaticImageData } from 'next/image';

import { Container } from './styles';

export type DockItemProps = {
  src: string | StaticImageData;
  alt: string;
  open?: boolean;
  focus?: boolean;
  action?: string | (() => void);
};

export const DockItem: FC<DockItemProps> = ({
  src,
  alt,
  open,
  focus,
  action,
}) => (
  <Container
    open={open}
    focus={focus}
    onClick={
      typeof action === 'string'
        ? () => window.open(action, '_blank').focus()
        : action
    }
  >
    <div className="indicator" />
    <p className="alt">{alt}</p>
    <Image
      src={src}
      alt={alt}
      width={32}
      height={32}
      objectFit="contain"
      draggable={false}
    />
  </Container>
);
