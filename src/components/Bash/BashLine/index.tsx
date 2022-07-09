import { FC, HTMLAttributes } from 'react';

import { Container, Input, Response, Title } from './styles';
import { useEntry, useEntryParams } from './hook';

export type BashLineProps = HTMLAttributes<HTMLDivElement> & {
  value?: string;
  cursor?: number;
  submited?: boolean;
  commands?: useEntryParams['commands'];
  onSubmit?: useEntryParams['onSubmit'];
};

export const BashLine: FC<BashLineProps> = ({
  value = '',
  cursor = 0,
  submited,
  commands = {},
  onSubmit,
  ...rest
}) => {
  const { currentValue, response, command, cursorActive, match } = useEntry({
    value,
    cursor,
    submited,
    commands,
    onSubmit,
  });

  return (
    <Container {...rest}>
      <Title>
        <strong className="user">adisson</strong> in{' '}
        <strong className="dir">~</strong>
      </Title>
      <Input match={match} cursorActive={cursorActive && !submited}>
        <span className="arrow">➜</span>
        {cursor < command.length ? (
          <strong className="value">
            <span className="command">
              {command.substring(0, cursor)}
              <span className="cursor">{command[cursor]}</span>
              {command.substring(cursor + 1)}
            </span>
            <span className="args">
              {currentValue.substring(command.length)}
            </span>
          </strong>
        ) : (
          <strong className="value">
            <span className="command">{command}</span>
            <span className="args">
              {currentValue.substring(command.length, cursor)}
              <span className="cursor">{currentValue[cursor] || ' '}</span>
              {currentValue.substring(cursor + 1)}
            </span>
          </strong>
        )}
      </Input>
      {response && <Response>{response}</Response>}
    </Container>
  );
};
