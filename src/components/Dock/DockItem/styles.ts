import styled from 'styled-components';

export type ContainerProps = {
  open?: boolean;
  focus?: boolean;
};

export const Container = styled.button<ContainerProps>`
  position: relative;

  width: 50px;
  height: 50px;
  border-radius: 10%;
  background: ${({ focus }) => (focus ? '#fff3' : '#fff0')};

  &:hover {
    background: ${({ focus }) => (focus ? '#fff3' : '#fff1')};

    > .alt {
      opacity: 1;
      visibility: initial;
    }
  }

  > .indicator {
    position: absolute;

    top: 23px;
    left: 0px;

    width: 4px;
    height: 4px;
    border-radius: 100%;
    background: ${({ theme }) => theme.colors.primary};
    opacity: ${({ open }) => (open ? 1 : 0)};

    transition: opacity 0.3s;
  }

  > .alt {
    position: absolute;
    top: 12px;
    left: 60px;
    z-index: 1000;

    padding: 0 8px;

    background: #1d1d1d;
    border: 1px solid #41424b;
    border-radius: 5px;
    opacity: 0;
    visibility: hidden;

    color: white;
    line-height: 26px;
    text-align: center;
    white-space: nowrap;

    transition: all 0.3s;
  }

  > .icon {
    width: 32px;
    height: 32px;
    object-fit: contain;
  }
`;
