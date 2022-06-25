import { useEffect, useState } from 'react';

import { Container, Input, Response, Title } from './styles';
import { useEntry } from './hook';

export const BashLine = () => {
  const { value, cursor, response, command, match } = useEntry();

  const [cursorActive, setCursorActive] = useState(true);

  useEffect(() => {
    setTimeout(() => setCursorActive(!cursorActive), 300);
  }, [cursorActive]);

  return (
    <Container>
      <Title>
        <strong className="user">adisson</strong> in{' '}
        <strong className="dir">~</strong>
      </Title>
      <Input match={match} cursorActive={cursorActive && !response}>
        <span className="arrow">➜</span>{' '}
        {cursor < command.length ? (
          <strong className="value">
            <span className="command">
              {command.substring(0, cursor)}
              <span className="cursor">{command[cursor]}</span>
              {command.substring(cursor + 1)}
            </span>
            <span className="args">{value.substring(command.length)}</span>
          </strong>
        ) : (
          <strong className="value">
            <span className="command">{command}</span>
            <span className="args">
              {value.substring(command.length, cursor)}
              <span className="cursor">{value[cursor]}</span>
              {value.substring(cursor + 1)}
            </span>
          </strong>
        )}
      </Input>
      {response && <Response>{response}</Response>}
    </Container>
  );
};
