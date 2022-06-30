import { SidebarItem } from './SidebarItem';
import { Container } from './styles';

export const Sidebar = () => {
  return (
    <Container>
      <SidebarItem src="/nautilus/sidebar/home.svg" label="Pasta pessoal" />
      <SidebarItem src="/nautilus/sidebar/documents.svg" label="Documentos" />
      <SidebarItem src="/nautilus/sidebar/trash.svg" label="Lixeira" />
    </Container>
  );
};
