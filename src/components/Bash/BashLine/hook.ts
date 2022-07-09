import { useEffect, useRef, useState } from 'react';

export type useEntryParams = {
  value: string;
  cursor: number;
  submited?: boolean;
  commands: Record<string, (args?: string[]) => string>;
  onSubmit?: () => void;
};

export const useEntry = ({
  value,
  cursor,
  submited,
  commands,
}: useEntryParams) => {
  const [response, setResponse] = useState<string>();
  const [cursorActive, setCursorActive] = useState(true);

  const submitedValue = useRef('');

  if (!submited) {
    submitedValue.current = value;
  }

  const currentValue = submitedValue.current;

  const [command] = currentValue.split(' ');
  const match = Object.keys(commands).some(item => item === command);
  const args = currentValue.substring(command.length);

  useEffect(() => {
    setCursorActive(true);

    const interval = setInterval(() => setCursorActive(prev => !prev), 500);

    return () => clearInterval(interval);
  }, [value, cursor]);

  useEffect(() => {
    if (submited) {
      const response = match
        ? commands[command](args.trim().split(' '))
        : `'${command}': command not found. Use 'help' for more information.`;

      setResponse(response);
    }
  }, [submited]);

  return {
    response,
    currentValue,
    command,
    cursorActive,
    match,
    args,
  };
};
