import styled from 'styled-components';

export type ContainerProps = {
  selected: boolean;
};

export const Container = styled.button<ContainerProps>`
  padding: 0 30px 0 10px;
  gap: 7px;

  width: 100%;
  height: 40px;
  background: ${({ selected, theme }) =>
    selected ? theme.colors.primary : '#474747'};

  display: flex;
  align-items: center;

  > .icon {
    width: 16px;
    height: 16px;
    object-fit: contain;
  }

  > .label {
    color: white;
    font-size: 15px;
  }

  &:hover {
    filter: brightness(1.1);
  }
`;
