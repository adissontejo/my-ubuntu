import { useState } from 'react';
import Draggable from 'react-draggable';

import { useGithub } from '~/hooks';

import { Container } from './styles';
import { BashLine } from '../BashLine';

export const Bash = () => {
  const { repos } = useGithub();

  const [bashes, setBashes] = useState({
    ids: [0],
    count: 0,
  });

  const commands = {
    ls: () => repos.join('\n'),
    cd: ([name]: string[]) => {
      if (!repos.some(item => item === name)) {
        return `'${name}' not found`;
      }

      window.open(`https://github.com/adissontejo/${name}`, '_blank').focus();

      return null;
    },
    echo: (args: string[]) => args.join(' '),
    code: ([name]: string[]) => {
      if (!repos.some(item => item === name)) {
        return `'${name}' not found`;
      }

      window.open(`https://github1s.com/adissontejo/${name}`, '_blank').focus();

      return null;
    },
    clear: () => {
      setBashes(prev => ({
        ...prev,
        ids: [],
      }));

      return null;
    },
    help: () => {
      return `List of available commands:\n\nls: lists information about files and folders.\nUsage: ls\n\ncd: navigates through folders.\nUsage: cd [OPTION]\n\n`;
    },
  };

  return (
    <Draggable handle="#drag" bounds="parent">
      <Container>
        <header id="drag">Terminal</header>
        <div className="content">
          {bashes.ids.map(item => (
            <BashLine
              key={String(item)}
              onSubmit={() =>
                setBashes(prev => ({
                  ids: [...prev.ids, prev.count + 1],
                  count: prev.count + 1,
                }))
              }
              commands={commands}
            />
          ))}
        </div>
      </Container>
    </Draggable>
  );
};
