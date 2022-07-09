import styled from 'styled-components';

export const Container = styled.button`
  margin: 20px 0 0;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;

  > .icon {
    width: 50px;
    height: 50px;
    object-fit: contain;
  }

  > .name {
    color: white;
  }

  &:active {
    filter: brightness(0.7);
  }
`;
