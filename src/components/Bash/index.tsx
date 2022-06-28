import { Container } from './styles';
import { useCommands } from './hook';
import { BashLine } from './BashLine';

export const Bash = () => {
  const { lines, commands, onSubmit } = useCommands();

  return (
    <Container title="Terminal">
      <div className="content">
        {lines.map(item => (
          <BashLine key={item} onSubmit={onSubmit} commands={commands} />
        ))}
      </div>
    </Container>
  );
};
