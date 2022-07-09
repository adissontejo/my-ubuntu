import styled from 'styled-components';

export const Container = styled.aside`
  padding: 5px 0 0;

  height: 100%;
  background: #474747;
  border: 1px solid #202020;
  border-style: none solid none none;

  ${({ theme }) => theme.media.sm} {
    width: 0;
    overflow: hidden;
  }
`;
