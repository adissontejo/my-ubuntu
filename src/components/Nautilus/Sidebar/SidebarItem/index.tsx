import { FC } from 'react';
import Image from 'next/image';

import { Container } from './styles';

export type SidebarItemProps = {
  src: string;
  label: string;
  selected?: boolean;
  onSelect?: () => void;
};

export const SidebarItem: FC<SidebarItemProps> = ({
  src,
  label,
  selected,
  onSelect,
}) => {
  return (
    <Container selected={selected} onClick={onSelect}>
      <Image
        src={src}
        alt={label}
        width={16}
        height={16}
        objectFit="contain"
        draggable={false}
      />
      <p className="label">{label}</p>
    </Container>
  );
};
