import styled from 'styled-components';

export const Container = styled.div`
  padding: 15px 0 0 15px;

  width: 100%;
  height: 100%;
  overflow: auto;

  color: white;

  &.slide-exit {
    overflow: hidden;
  }

  &.slide-exit-active {
    overflow: hidden;
  }

  > .header {
    display: flex;
    align-items: center;
    gap: 10px;

    > .icon {
      width: 50px;
      height: 50px;
      object-fit: fit-content;
    }
  }

  > .content {
    margin: 10px 0 0 60px;
  }
`;

export const Rank = styled.div`
  margin: 20px 0 0;

  display: flex;
  align-items: center;
  gap: 10px;

  > .icon {
    width: 60px;
    height: 60px;
    object-fit: contain;
  }

  > .alt {
    text-align: center;
  }
`;
