import { FC, useState } from 'react';

import { home } from '~/data';

import { Container } from './styles';
import { Window, WindowProps } from '../Window';
import { Folder } from './Folder';
import { File } from './File';
import { Sidebar } from './Sidebar';

type NautilusProps = WindowProps;

export const Nautilus: FC<NautilusProps> = ({ ...rest }) => {
  const [dir, setDir] = useState(home);

  return (
    <Window title="Arquivos" minWidth={600} initFullFilled {...rest}>
      <Container>
        <Sidebar dirname={dir.name} onSelectDir={setDir} />
        <div className="folders">
          {dir.folders &&
            dir.folders.map((item, index) => (
              <Folder
                key={index}
                name={item.name}
                action={() => setDir(item)}
                src={item.src}
              />
            ))}
          {dir.files &&
            dir.files.map((item, index) => (
              <File
                key={index}
                name={item.name}
                type={item.type}
                src={item.src}
              />
            ))}
        </div>
      </Container>
    </Window>
  );
};
