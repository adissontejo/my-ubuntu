import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    ${({ theme }) => theme.fonts.ubuntu}
  }

  body {
    background: no-repeat center url(./wallpaper.jpg);
    background-color: linear-gradient(#c03621, #7d205d, #450a46, #1f0010);
    background-size: cover;
  }

  button {
    border: none;
    background: none;
  }
`;
