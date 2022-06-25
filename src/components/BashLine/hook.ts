import { useEffect, useState } from 'react';

import { commands } from '~/utils';

export type Entry = {
  value: string;
  cursor: number;
  response?: string;
};

export const useEntry = () => {
  const [entry, setEntry] = useState<Entry>({ value: ' ', cursor: 0 });

  const { value } = entry;

  const [command] = value.split(' ');

  const match = Object.keys(commands).some(item => item === command);
  const args = value.substring(command.length);

  const handleKeyDown = ({ key }: KeyboardEvent) => {
    if (entry.response) {
      document.removeEventListener('keydown', handleKeyDown);

      return;
    }

    if (key.match(/^[A-Za-z0-9]$/g) || key === ' ') {
      setEntry(prev => ({
        value:
          prev.value.substring(0, prev.cursor) +
          key +
          prev.value.substring(prev.cursor),
        cursor: prev.cursor + 1,
      }));
    }

    if (key === 'ArrowLeft') {
      setEntry(prev =>
        prev.cursor !== 0
          ? {
              ...prev,
              cursor: prev.cursor - 1,
            }
          : prev
      );
    }

    if (key === 'ArrowRight') {
      setEntry(prev =>
        prev.cursor !== prev.value.length - 1
          ? {
              ...prev,
              cursor: prev.cursor + 1,
            }
          : prev
      );
    }

    if (key === 'Backspace') {
      setEntry(prev =>
        prev.cursor !== 0
          ? {
              value:
                prev.value.substring(0, prev.cursor - 1) +
                prev.value.substring(prev.cursor),
              cursor: prev.cursor - 1,
            }
          : prev
      );
    }

    if (key === 'Enter') {
      const response = match
        ? commands[command](args.trim().split(' '))
        : `'${command}' command not found`;

      setEntry(prev => ({ ...prev, response }));
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);

    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  return { ...entry, command, match, args };
};
