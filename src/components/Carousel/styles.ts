import styled from 'styled-components';

export const Container = styled.div`
  position: relative;

  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: flex-end;

  > .indicators {
    height: 20px;

    display: flex;
    align-items: center;
    gap: 10px;
  }
`;

export type WrapperProps = {
  show: boolean;
  forward: boolean;
};

export const Wrapper = styled.div<WrapperProps>`
  position: absolute;
  top: 0;
  left: ${({ show }) => (show ? 0 : '100%')};

  width: 100%;
  height: calc(100% - 20px);

  &.slide-enter {
    left: ${({ forward }) => (forward ? 100 : -100)}%;
  }

  &.slide-enter-active {
    left: 0;

    transition: left 1s;
  }

  &.slide-exit {
    left: 0;
  }

  &.slide-exit-active {
    left: ${({ forward }) => (forward ? -100 : 100)}%;

    transition: left 1s;
  }
`;

export type IndicatorProps = {
  show: boolean;
};

export const Indicator = styled.div<IndicatorProps>`
  width: ${({ show }) => (show ? 8 : 6)}px;
  height: ${({ show }) => (show ? 8 : 6)}px;
  background: ${({ show }) => (show ? 'white' : 'gray')};
  border-radius: 100%;

  transition: all 0.3s;
`;
