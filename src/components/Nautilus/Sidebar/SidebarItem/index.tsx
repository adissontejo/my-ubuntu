import { FC } from 'react';

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
      <img src={src} alt={label} draggable={false} className="icon" />
      <p className="label">{label}</p>
    </Container>
  );
};
