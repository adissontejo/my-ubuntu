import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;

  display: none;
  grid-template-columns: repeat(auto-fill, 100px);
  justify-content: space-evenly;

  ${({ theme }) => theme.media.sm} {
    display: grid;
  }
`;
