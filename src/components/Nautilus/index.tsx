import { FC, useMemo, useRef, useState } from 'react';

import { home } from '~/data';

import { Container } from './styles';
import { Window, WindowProps } from '../Window';
import { Folder } from './Folder';
import { File } from './File';
import { Sidebar } from './Sidebar';

export type NautilusProps = WindowProps;

export const Nautilus: FC<NautilusProps> = ({ ...rest }) => {
  const [location, setLocation] = useState<number[]>([]);

  const forward = useRef<number[]>([]);

  const dir = useMemo(
    () => location.reduce((acc, curr) => acc.folders[curr], home),
    [location]
  );

  const onSidebarSelect = (newLocation: number[]) => {
    forward.current = [];

    setLocation(newLocation);
  };

  const onFolderSelect = (index: number) => {
    const next = forward.current.pop();

    if (next !== index) {
      forward.current = [];
    }

    setLocation(prev => [...prev, index]);
  };

  const onBack = () => {
    if (location.length === 0) {
      return;
    }

    const last = location.find((item, index) => index === location.length - 1);

    forward.current.push(last);

    setLocation(prev =>
      prev.filter((item, index) => index !== location.length - 1)
    );
  };

  const onForward = () => {
    if (forward.current.length === 0) {
      return;
    }

    const next = forward.current.pop();

    setLocation(prev => [...prev, next]);
  };

  return (
    <Window
      title="Arquivos"
      defaultWidthPercent={70}
      defaultHeightPercent={85}
      navigateEnabled
      backEnabled={location.length > 0}
      forwardEnabled={forward.current.length > 0}
      onBack={onBack}
      onForward={onForward}
      {...rest}
    >
      <Container>
        <Sidebar
          dirname={dir.name}
          level={location.length}
          onSelectDir={onSidebarSelect}
        />
        <div className="folders">
          {dir.folders &&
            dir.folders.map((item, index) => (
              <Folder
                key={index}
                name={item.name}
                action={() => onFolderSelect(index)}
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
