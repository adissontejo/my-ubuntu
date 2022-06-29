import { FC } from 'react';

import { Container } from './styles';
import { useCommands } from './hook';
import { BashLine } from './BashLine';
import { Window, WindowProps } from '../Window';

export const Bash: FC<WindowProps> = ({ onClose, ...rest }) => {
  const { lines, commands, onSubmit, reset } = useCommands();

  const onWindowClose = () => {
    reset();

    if (onClose) {
      onClose();
    }
  };

  return (
    <Window title="Terminal" onClose={onWindowClose} {...rest}>
      <Container>
        {lines.map(item => (
          <BashLine key={item} onSubmit={onSubmit} commands={commands} />
        ))}
      </Container>
    </Window>
  );
};
