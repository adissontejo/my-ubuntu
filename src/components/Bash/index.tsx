import { FC } from 'react';

import { Container } from './styles';
import { useCommands } from './hook';
import { BashLine } from './BashLine';
import { Window, WindowProps } from '../Window';

export type BashProps = WindowProps;

export const Bash: FC<BashProps> = ({ ...rest }) => {
  const {
    lines,
    entry,
    commands,
    containerRef,
    inputRef,
    onContainerMouseDown,
    onInputBlur,
    onInputChange,
    onInputKeydown,
  } = useCommands();

  return (
    <Window
      title="Terminal"
      defaultWidthPercent={55}
      defaultHeightPercent={65}
      {...rest}
    >
      <Container ref={containerRef} onMouseDown={onContainerMouseDown}>
        {lines.map((item, index) => (
          <BashLine
            key={item}
            value={index === lines.length - 1 ? entry.value : ''}
            cursor={index === lines.length - 1 ? entry.cursor : 0}
            submited={index !== lines.length - 1}
            commands={commands}
          />
        ))}
        <input
          ref={inputRef}
          value={entry.value}
          onBlur={onInputBlur}
          onChange={onInputChange}
          onKeyDown={onInputKeydown}
        />
      </Container>
    </Window>
  );
};
