import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  flex: 1;

  background: #282a36;

  overflow-x: hidden;
  overflow-y: auto;

  > input {
    opacity: 0;
    overflow: hidden;

    user-select: none;
  }
`;
