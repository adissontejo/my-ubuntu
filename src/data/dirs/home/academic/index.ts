import { Dir } from '~/types';

export const academic: Dir = {
  name: 'Formação Acadêmica',
  folders: [
    {
      name: 'Ensino Médio e Técnico em Eletrônica',
      files: [
        {
          name: 'Instituição',
          type: 'png',
          src: '/icons/ifpb.png',
        },
        {
          name: 'Sobre',
          type: 'txt',
        },
      ],
    },
    {
      name: 'Bacharelado em TI',
      files: [
        {
          name: 'Instituição',
          type: 'png',
          src: '/icons/ufrn.png',
        },
        {
          name: 'Sobre',
          type: 'txt',
        },
      ],
    },
  ],
};
