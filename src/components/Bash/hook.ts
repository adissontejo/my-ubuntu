import { useState } from 'react';

import { useGithub } from '~/hooks';

const help = `List of available commands:

echo: prints desired message.\nUsage 'echo [MESSAGE]'.\n
ls: lists folders and files in current dir.\nUsage: 'ls'.\n
cd: navigates through folders.\nUsage 'cd [PATH]'.\n
code: opens desired file or folder on VSCode.\nUsage: 'code [PATH]'.\n
clear: clears bash.\nUsage: 'clear'.\n
`;

export const useCommands = () => {
  const [lines, setLines] = useState([0]);
  const [count, setCount] = useState(1);

  const { repos } = useGithub();

  const commands: Record<string, (args: string[]) => string | null> = {
    echo: args => args.join(' '),
    ls: () => repos.join(' '),
    cd: ([path]: string[]) => {
      if (!repos.some(item => item === path)) {
        return `'${path}': path not found.`;
      }

      window.open(`https://github.com/adissontejo/${path}`, '_blank').focus();

      return null;
    },
    code: ([path]: string[]) => {
      if (!repos.some(item => item === path)) {
        return `'${path}': path not found.`;
      }

      window.open(`https://github1s.com/adissontejo/${path}`, '_blank').focus();

      return null;
    },
    clear: () => {
      console.log(count);

      setLines([]);

      return null;
    },
    help: () => help,
  };

  const onSubmit = () => {
    setLines(prev => [...prev, count]);
    setCount(count + 1);
  };

  const reset = () => {
    setLines([0]);
    setCount(1);
  };

  return { lines, commands, onSubmit, reset };
};
