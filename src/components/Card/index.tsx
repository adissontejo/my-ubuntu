import { FC, HTMLAttributes } from 'react';

import { Container } from './styles';

export type CardProps = HTMLAttributes<HTMLButtonElement> & {
  src: string;
  alt: string;
};

export const Card: FC<CardProps> = ({ src, alt, ...rest }) => (
  <Container {...rest}>
    <img src={src} alt={alt} draggable={false} className="icon" />
    <strong className="alt">{alt}</strong>
  </Container>
);
