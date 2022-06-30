import { FC } from 'react';

import { Container } from './styles';
import { Window, WindowProps } from '../Window';
import { Folder } from './Folder';
import { Sidebar } from './Sidebar';

type NautilusProps = WindowProps;

export const Nautilus: FC<NautilusProps> = ({ ...rest }) => {
  return (
    <Window title="Arquivos" initFullFilled {...rest}>
      <Container>
        <Sidebar />
        <div className="folders">
          <Folder name="Pasta 1" />
          <Folder name="Pasta 2" />
        </div>
      </Container>
    </Window>
  );
};
