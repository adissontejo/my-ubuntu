import styled, { css, keyframes } from 'styled-components';

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

const keyframe = keyframes`
  from {
    ${closed}
  }

  to {
    ${open}
  }
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

  margin: ${({ fullFilled }) => (fullFilled ? '0' : '2px')};

  width: 100%;
  height: 100%;
  opacity: ${({ closed }) => (closed ? 0 : 1)};
  border-radius: ${({ fullFilled }) => (fullFilled ? 0 : '5px')};
  border: 2px solid #252525;

  display: flex;
  flex-direction: column;

  overflow: hidden;

  animation: ${keyframe} 0.3s;

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
    top: ${({ position }) => position.y}px;
    left: ${({ position }) => position.x}px;

    margin: 1px;

    width: ${({ size }) => size.width};
    height: ${({ size }) => size.height};
    border-radius: 5px;
  }

  &.fullFill-enter-active {
    top: 0;
    left: 0;

    margin: 0;

    width: 100%;
    height: 100%;
    border-radius: 0;

    transition: all 0.3s;
  }

  &.fullFill-exit {
    top: 0;
    left: 0;

    margin: 0;

    width: 100%;
    height: 100%;
    border-radius: 0;
  }

  &.fullFill-exit-active {
    top: ${({ position }) => position.y}px;
    left: ${({ position }) => position.x}px;

    margin: 1px;

    width: ${({ size }) => size.width};
    height: ${({ size }) => size.height};
    border-radius: 5px;

    transition: all 0.3s;
  }

  &.close-enter {
    ${open}
  }

  &.close-enter-active {
    ${closed}

    transition: all 0.3s;
  }
`;

export type HeaderProps = {
  backEnabled?: boolean;
  forwardEnabled?: boolean;
  navigateEnabled?: boolean;
};

export const Header = styled.header<HeaderProps>`
  position: relative;

  padding: 5px 0;

  background: #2c2c2c;
  border-width: 0 0 2px 0;
  border-style: none none solid none;
  border-color: #252525;

  display: flex;
  align-items: center;
  justify-content: center;

  > .back,
  .forward {
    padding: 10px 0;

    opacity: ${({ navigateEnabled }) => (navigateEnabled ? 1 : 0)};
    width: 35px;
    height: 35px;
    background: #4d4d4d;
    border: 1px solid #222222;

    > .icon {
      height: 15px;
    }
  }

  > .back {
    margin: 0 0 0 5px;

    border-radius: 5px 0 0 5px;
    border-style: solid none solid solid;

    ${({ backEnabled }) => !backEnabled && 'filter: brightness(0.7);'}

    &:hover {
      filter: ${({ backEnabled }) =>
        backEnabled ? 'brightness(1.1)' : 'brightness(0.7)'};
    }
  }

  > .forward {
    border-radius: 0 5px 5px 0;

    ${({ forwardEnabled }) => !forwardEnabled && 'filter: brightness(0.7);'}

    &:hover {
      filter: ${({ forwardEnabled }) =>
        forwardEnabled ? 'brightness(1.1)' : 'brightness(0.7)'};
    }
  }

  > h4 {
    flex: 1;

    margin: 0 0 0 15px;

    color: white;
    font-weight: 700;
    text-align: center;
  }

  > .action-button {
    padding: 3px;
    margin: 0 10px 0 0;

    background: #2c2c2c;
    border-radius: 100%;
    width: 20px;
    height: 20px;

    display: flex;
    align-items: center;

    transition: all 0.3s;

    > .icon {
      color: white;
      width: 14px;
      height: 14px;
    }

    &:hover {
      filter: brightness(1.4);
    }

    &.close {
      background: #df4a16;
    }

    &:not(.close) {
      ${({ theme }) => theme.media.sm} {
        visibility: hidden;
      }
    }
  }
`;
