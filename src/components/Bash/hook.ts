import {
  ChangeEvent,
  KeyboardEvent,
  MouseEvent,
  useEffect,
  useRef,
  useState,
} from 'react';

import { useGithub } from '~/hooks';

import { BashLineProps } from './BashLine';

const help = `List of available commands:

echo: prints desired message.\nUsage 'echo [MESSAGE]'.\n
ls: lists folders and files in current dir.\nUsage: 'ls'.\n
cd: navigates through folders.\nUsage 'cd [PATH]'.\n
code: opens desired file or folder on VSCode.\nUsage: 'code [PATH]'.\n
clear: clears bash.\nUsage: 'clear'.\n
`;

export const useCommands = () => {
  const [entry, setEntry] = useState({
    value: '',
    cursor: 0,
  });
  const [lines, setLines] = useState([0]);
  const [count, setCount] = useState(1);
  const [inputFocus, setInputFocus] = useState(true);

  const containerRef = useRef<HTMLDivElement>();
  const inputRef = useRef<HTMLInputElement>();

  const { repos } = useGithub();

  const commands: BashLineProps['commands'] = {
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
      setLines([count]);

      return null;
    },
    help: () => help,
  };

  const onInputKeydown = ({ key }: KeyboardEvent<HTMLInputElement>) => {
    switch (key) {
      case 'ArrowLeft':
        setEntry(prev => ({
          ...prev,
          cursor: Math.max(0, prev.cursor - 1),
        }));
        break;
      case 'ArrowRight':
        setEntry(prev => ({
          ...prev,
          cursor: Math.min(prev.value.length, prev.cursor + 1),
        }));
        break;
      case 'Enter':
        setEntry({
          value: '',
          cursor: 0,
        });
        setLines(prev => [...prev, count]);
        setCount(prev => prev + 1);
        break;
    }
  };

  useEffect(() => {
    setTimeout(() => {
      inputRef.current.scrollIntoView({
        behavior: 'smooth',
      });
    }, 50);
  }, [lines]);

  useEffect(() => {
    if (inputFocus) {
      inputRef.current.focus();
    }
  }, [inputFocus]);

  const onContainerMouseDown = (e: MouseEvent<HTMLDivElement>) => {
    e.preventDefault();

    setInputFocus(true);
  };

  const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEntry({
      value: e.target.value,
      cursor: e.target.selectionStart,
    });
  };

  const onInputBlur = () => {
    setInputFocus(false);
  };

  return {
    lines,
    entry,
    inputFocus,
    setInputFocus,
    containerRef,
    inputRef,
    commands,
    onContainerMouseDown,
    onInputKeydown,
    onInputChange,
    onInputBlur,
  };
};
