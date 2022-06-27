import { useEffect, useState } from 'react';

export type Entry = {
  value: string;
  cursor: number;
  response?: string;
  active: boolean;
};

export type useEntryParams = {
  commands?: Record<string, (args?: string[]) => string | null>;
  onSubmit?: () => void;
};

export const useEntry = ({ onSubmit, commands }: useEntryParams) => {
  const [entry, setEntry] = useState<Entry>({
    value: ' ',
    cursor: 0,
    active: true,
  });

  const { value } = entry;

  const [command] = value.split(' ');

  const match = Object.keys(commands).some(item => item === command);
  const args = value.substring(command.length);

  const handleKeyDown = async ({ key }: KeyboardEvent) => {
    if (!entry.active) {
      document.removeEventListener('keydown', handleKeyDown);

      return;
    }

    if (key.match(/^[A-Za-z0-9]$/g) || key === ' ') {
      setEntry(prev => ({
        ...prev,
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
              ...prev,
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
        : `'${command}': command not found. Use 'help' for more information.`;

      if (onSubmit) {
        onSubmit();
      }

      setEntry(prev => ({ ...prev, response, active: false }));
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);

    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  return { ...entry, command, match, args };
};
