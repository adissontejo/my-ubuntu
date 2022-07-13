import { knowledges } from '~/data/knowledges';
import { Dir } from '~/types';

export const knowledge: Dir = {
  name: 'Habilidades e Conhecimentos',
  folders: knowledges.map(item => ({
    name: item.name,
    files: item.list.map(file => ({
      name: file.name,
      src: file.src,
      type: 'png',
    })),
  })),
};
