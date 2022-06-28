import styled from 'styled-components';

export type ContainerProps = {
  size: {
    width: number | string;
    height: number | string;
  };
  position: {
    x: number;
    y: number;
  };
};

export const Container = styled.section<ContainerProps>`
  width: 100%;
  height: 100%;
  border-radius: 5px;
  border: 2px solid #252525;

  display: flex;
  flex-direction: column;

  &.container-enter {
    margin: ${({ position }) => `${position.y}px 0 0 ${position.x}px`};

    width: ${({ size }) => size.width};
    height: ${({ size }) => size.height};
    border-radius: 5px;
  }

  &.container-enter-active {
    margin: 0;

    width: 100%;
    height: 100%;
    border-radius: 0;

    transition: all 0.3s;
  }

  &.container-enter-done {
    border-radius: 0;
  }

  &.container-exit {
    margin: 0;

    width: 100%;
    height: 100%;
    border-radius: 0;
  }

  &.container-exit-active {
    margin: ${({ position }) => `${position.y}px 0 0 ${position.x}px`};

    width: ${({ size }) => size.width};
    height: ${({ size }) => size.height};
    border-radius: 5px;

    transition: all 0.3s;
  }
`;

export const Header = styled.header`
  position: relative;

  padding: 15px 0;

  background: ${({ theme }) => theme.colors.gray};
  border-width: 0 0 2px 0;
  border-style: none none solid none;
  border-color: #252525;

  display: flex;
  align-items: center;
  justify-content: center;

  > h4 {
    margin: 0 0 0 72px;

    flex: 1;

    color: white;
    font-weight: 700;
    text-align: center;
  }

  > .buttons {
    display: flex;

    > button {
      padding: 3px;
      margin: 0 10px 0 0;

      background: #0000;
      border: none;
      border-radius: 100%;
      width: 20px;
      height: 20px;

      display: flex;
      align-items: center;

      transition: background 200ms;

      > .icon {
        color: white;
        width: 14px;
        height: 14px;
      }

      &:hover {
        background: #fff3;
      }
    }
  }
`;
