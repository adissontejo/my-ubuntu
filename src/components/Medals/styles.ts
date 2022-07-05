import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  background: ${({ theme }) => theme.colors.background};

  display: flex;
  flex-direction: column;
  gap: 40px;
`;
