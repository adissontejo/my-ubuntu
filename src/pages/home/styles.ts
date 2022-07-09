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

  overflow: hidden;

  display: grid;

  grid:
    'head head' 25px
    'aside main' 1fr
    / 60px 1fr;

  animation: ${init} 2s ease-in;

  ${({ theme }) => theme.media.sm} {
    grid:
      'head' 25px
      'main' 1fr
      / 1fr;
  }

  > main {
    position: relative;
    grid-area: main;

    overflow: hidden;

    height: 100%;
  }
`;
