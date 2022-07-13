export type Knowledge = {
  name: string;
  src: string;
  level: number | string;
};

export type KnowledgeSection = {
  name: string;
  list: Knowledge[];
};

export const knowledges: KnowledgeSection[] = [
  {
    name: 'Idiomas',
    list: [
      {
        name: 'Português',
        src: '/knowledges/portuguese.svg',
        level: 'Nativo',
      },
      {
        name: 'Inglês',
        src: '/knowledges/english.svg',
        level: 'Intermediário',
      },
    ],
  },
  {
    name: 'Linguagens de Programação',
    list: [
      {
        name: 'Javascript',
        src: '/knowledges/javascript.svg',
        level: 3,
      },
      {
        name: 'Typescript',
        src: '/knowledges/typescript.svg',
        level: 3,
      },
      {
        name: 'HTML',
        src: '/knowledges/html.svg',
        level: 2,
      },
      {
        name: 'CSS',
        src: '/knowledges/css.svg',
        level: 2,
      },
      {
        name: 'SASS',
        src: '/knowledges/sass.svg',
        level: 2,
      },
      {
        name: 'C',
        src: '/knowledges/c.svg',
        level: 2,
      },
      {
        name: 'C++',
        src: '/knowledges/cpp.svg',
        level: 2,
      },
      {
        name: 'PostgreSQL',
        src: '/knowledges/postgresql.svg',
        level: 2,
      },
      {
        name: 'Python',
        src: '/knowledges/python.svg',
        level: 1,
      },
    ],
  },
  {
    name: 'Frameworks e Ferramentas',
    list: [
      {
        name: 'ReactJS',
        src: '/knowledges/react.svg',
        level: 3,
      },
      {
        name: 'React Native',
        src: '/knowledges/react-native.svg',
        level: 3,
      },
      {
        name: 'NodeJS',
        src: '/knowledges/node.svg',
        level: 2,
      },
      {
        name: 'NextJS',
        src: '/knowledges/next.svg',
        level: 2,
      },
      {
        name: 'Git',
        src: '/knowledges/git.svg',
        level: 3,
      },
      {
        name: 'VSCode',
        src: '/knowledges/vscode.svg',
        level: 3,
      },
      {
        name: 'Linux',
        src: '/knowledges/linux.svg',
        level: 2,
      },
      {
        name: 'Docker',
        src: '/knowledges/docker.svg',
        level: 3,
      },
      {
        name: 'Docker Compose',
        src: '/knowledges/docker-compose.png',
        level: 3,
      },
      {
        name: 'Jest',
        src: '/knowledges/jest.svg',
        level: 2,
      },
    ],
  },
];
