import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    ${({ theme }) => theme.fonts.ubuntu}
  }

  button {
    border: none;
    background: none;
  }
`;
