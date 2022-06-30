export const theme = {
  colors: {
    primary: '#e75621',
    gray: '#2c2c2c',
    bash: {
      background: '#282a36',
      title: '#5f45a4',
      username: '#e1f34a',
      dirname: '#75d7ec',
      input: '#e356a7',
      command: '#41de6a',
    },
  },
  fonts: {
    ubuntu: `font-family: 'Ubuntu', sans-serif;`,
    code: `font-family: 'Fira Code', sans-serif;`,
  },
};

export type Theme = typeof theme;
