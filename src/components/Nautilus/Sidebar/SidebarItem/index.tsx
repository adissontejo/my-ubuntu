import Image, { StaticImageData } from 'next/image';

import { Container } from './styles';

export type SidebarItemProps = {
  src: StaticImageData;
  label: string;
};

export const SidebarItem = ({ src, label }) => {
  return (
    <Container>
      <Image src={src} alt={label} width={16} height={16} />
      <p className="label">{label}</p>
    </Container>
  );
};
