import { medals } from '~/data/medals';
import { Dir } from '~/types';

export const medalsDir: Dir = {
  name: 'Medalhas',
  files: medals.reduce((acc: Dir['files'], curr) => {
    return [
      ...acc,
      ...curr.ranks.map(item => {
        const name = `${curr.name} ${curr.year}`;

        return {
          name: item.mode ? `${name} - ${item.mode}` : name,
          src: item.src,
          type: 'png',
        };
      }),
    ];
  }, []),
};
