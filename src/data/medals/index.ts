type Rank = {
  name: string;
  src: string;
  mode?: string;
};

export type Medal = {
  name: string;
  fullName: string;
  src: string;
  year: string;
  ranks: Rank[];
};

export const medals: Medal[] = [
  {
    name: 'OBR Teórica',
    src: '/medals/obr.png',
    fullName: 'Olimpíada Brasileira de Robótica - Modalidade Teórica',
    year: '2021',
    ranks: [
      {
        name: 'Medalha de Ouro',
        src: '/medals/gold-medal.svg',
      },
    ],
  },
  {
    name: 'OBR Teórica',
    src: '/medals/obr.png',
    fullName: 'Olimpíada Brasileira de Robótica - Modalidade Teórica',
    year: '2021',
    ranks: [
      {
        name: 'Medalha de Ouro',
        src: '/medals/gold-medal.svg',
      },
    ],
  },
  {
    name: 'OBI',
    src: '/medals/obi.svg',
    fullName: 'Olimpíada Brasleira de Informática',
    year: '2019',
    ranks: [
      {
        name: 'Medalha de Bronze',
        src: '/medals/bronze-medal.svg',
      },
    ],
  },
  {
    name: 'OBR',
    src: '/medals/obr.png',
    fullName: 'Olimpíada Brasileira de Robótica',
    year: '2019',
    ranks: [
      {
        name: 'Medalha de Bronze',
        src: '/medals/bronze-medal.svg',
      },
    ],
  },
  {
    name: 'OPI',
    src: '/medals/opi.png',
    fullName: 'Olimpíada Paraíbana de Informática',
    year: '2019',
    ranks: [
      {
        name: 'Medalha de Ouro',
        src: '/medals/gold-medal.svg',
      },
    ],
  },
  {
    name: 'OBR Prática',
    src: '/medals/obr.png',
    fullName: 'Olimpíada Brasileira de Robótica - Modalidade Prática',
    year: '2019',
    ranks: [
      {
        mode: 'Fase Regional',
        name: 'Medalha de Ouro',
        src: '/medals/gold-medal.svg',
      },
      {
        mode: 'Fase Estadual',
        name: 'Medalha de Prata',
        src: '/medals/silver-medal.svg',
      },
      {
        mode: 'Fase Nacional',
        name: 'Medalha de Finalista',
        src: '/medals/award.svg',
      },
    ],
  },
];
