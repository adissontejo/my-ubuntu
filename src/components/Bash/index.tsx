import { FC } from 'react';

import { Container } from './styles';
import { useCommands } from './hook';
import { BashLine } from './BashLine';
import { Window, WindowProps } from '../Window';

export type BashProps = WindowProps;

export const Bash: FC<BashProps> = ({ ...rest }) => {
  const { lines, commands, onSubmit } = useCommands();

  return (
    <Window
      title="Terminal"
      defaultWidthPercent={55}
      defaultHeightPercent={65}
      {...rest}
    >
      <Container>
        {lines.map(item => (
          <BashLine key={item} onSubmit={onSubmit} commands={commands} />
        ))}
      </Container>
    </Window>
  );
};
