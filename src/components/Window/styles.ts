import styled, { css } from 'styled-components';

const minimized = css`
  top: 50%;

  width: 0;
  height: 0;
  opacity: 0;

  overflow: hidden;
`;

const notMinimized = css`
  top: 0;

  width: 100%;
  height: 100%;
  opacity: 1;

  overflow: hidden;
`;

const closed = css`
  top: 50%;
  left: 50%;

  width: 0;
  height: 0;
  opacity: 0;
`;

const open = css`
  top: 0;
  left: 0;

  width: 100%;
  height: 100%;
  opacity: 1;
`;

export type ContainerProps = {
  size: {
    width: number | string;
    height: number | string;
  };
  position: {
    x: number;
    y: number;
  };
  closed: boolean;
  fullFilled: boolean;
};

export const Container = styled.section<ContainerProps>`
  position: absolute;

  width: 100%;
  height: 100%;
  opacity: ${({ closed }) => (closed ? 0 : 1)};
  border-radius: ${({ fullFilled }) => (fullFilled ? 0 : '5px')};
  border: 2px solid #252525;

  display: flex;
  flex-direction: column;

  overflow: hidden;

  &.minimize-enter {
    ${notMinimized}
  }

  &.minimize-enter-active {
    ${minimized}

    transition: all 0.3s;
  }

  &.minimize-exit {
    ${minimized}
  }

  &.minimize-exit-active {
    ${notMinimized}

    transition: all 0.3s;
  }

  &.fullFill-enter {
    margin: ${({ position }) => `${position.y}px 0 0 ${position.x}px`};

    width: ${({ size }) => size.width};
    height: ${({ size }) => size.height};
    border-radius: 5px;
  }

  &.fullFill-enter-active {
    margin: 0;

    width: 100%;
    height: 100%;
    border-radius: 0;

    transition: all 0.3s;
  }

  &.fullFill-exit {
    margin: 0;

    width: 100%;
    height: 100%;
    border-radius: 0;
  }

  &.fullFill-exit-active {
    margin: ${({ position }) => `${position.y}px 0 0 ${position.x}px`};

    width: ${({ size }) => size.width};
    height: ${({ size }) => size.height};
    border-radius: 5px;

    transition: all 0.3s;
  }

  &.open-enter {
    ${closed}
  }

  &.open-enter-active {
    ${open}

    transition: all 0.3s;
  }

  &.open-exit {
    ${open}
  }

  &.open-exit-active {
    ${closed}

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

      &.close {
        background: #df4a16;
      }

      &:not(.close):hover {
        background: #fff3;
      }
    }
  }
`;
