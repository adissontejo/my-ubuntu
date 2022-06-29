import { FC } from 'react';

import { Container } from './styles';
import { useCommands } from './hook';
import { BashLine } from './BashLine';
import { Window, WindowProps } from '../Window';

export const Bash: FC<WindowProps> = props => {
  const { lines, commands, onSubmit } = useCommands();

  return (
    <Window title="Terminal" {...props}>
      <Container>
        {lines.map(item => (
          <BashLine key={item} onSubmit={onSubmit} commands={commands} />
        ))}
      </Container>
    </Window>
  );
};
