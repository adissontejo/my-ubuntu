import { Dir } from '~/types';

import { academic } from './academic';
import { medals } from './medals';

export const home: Dir = {
  name: 'Pasta pessoal',
  folders: [academic, medals],
};
