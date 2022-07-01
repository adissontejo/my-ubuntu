import styled, { keyframes } from 'styled-components';

const init = keyframes`
  from {
    filter: brightness(0);
  }

  to {
    filter: brightness(1);
  }
`;

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(#c03621, #7d205d, #450a46, #1f0010);

  overflow: hidden;

  display: grid;

  grid:
    'head head' 25px
    'aside main' 1fr
    / 60px 1fr;

  animation: ${init} 2s ease-in;

  > main {
    position: relative;
    grid-area: main;

    overflow: hidden;

    height: 100%;

    background: no-repeat center url(./wallpaper.jpg);
    background-size: cover;
  }
`;
