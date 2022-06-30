import styled from 'styled-components';

export const Container = styled.button`
  padding: 0 30px 0 10px;
  gap: 7px;

  width: 100%;
  background: #474747;
  height: 40px;

  display: flex;
  align-items: center;

  > .label {
    color: white;
    font-size: 15px;
  }

  &:hover {
    filter: brightness(1.1);
  }

  &:focus {
    background: ${({ theme }) => theme.colors.primary};
  }
`;
