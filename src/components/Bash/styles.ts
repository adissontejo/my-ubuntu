import styled from 'styled-components';

export const Container = styled.div`
  flex: 1;

  background: ${({ theme }) => theme.colors.bash.background};

  overflow-x: hidden;
  overflow-y: auto;
`;
