import { FC, HTMLAttributes, useEffect, useRef, useState } from 'react';

import { Container, Input, Response, Title } from './styles';
import { useEntry, useEntryParams } from './hook';

export type BashLineProps = HTMLAttributes<HTMLDivElement> & {
  commands?: useEntryParams['commands'];
  onSubmit?: useEntryParams['onSubmit'];
};

export const BashLine: FC<BashLineProps> = ({
  commands = {},
  onSubmit,
  ...rest
}) => {
  const { value, cursor, response, command, match, active } = useEntry({
    onSubmit,
    commands,
  });

  const [cursorActive, setCursorActive] = useState(true);

  const container = useRef<HTMLDivElement>();

  useEffect(() => {
    container.current.scrollIntoView({ behavior: 'smooth' });
  }, []);

  useEffect(() => {
    setTimeout(() => setCursorActive(!cursorActive), 300);
  }, [cursorActive]);

  return (
    <Container ref={container} {...rest}>
      <Title>
        <strong className="user">adisson</strong> in{' '}
        <strong className="dir">~</strong>
      </Title>
      <Input match={match} cursorActive={cursorActive && active}>
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
