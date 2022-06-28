import styled from 'styled-components';

export const Container = styled.button`
  position: relative;

  width: 50px;
  height: 50px;
  border: none;
  border-radius: 10%;
  background: #fff0;

  &:hover {
    background: #fff1;
  }

  > .indicator {
    position: absolute;

    top: 23px;
    left: 0px;

    width: 4px;
    height: 4px;
    border-radius: 100%;
    background: ${({ theme }) => theme.colors.primary};
  }
`;
