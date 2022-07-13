import styled from 'styled-components';

export const Container = styled.div`
  padding: 15px 0 0 40px;

  width: 100%;
  height: 100%;
  overflow: auto;

  display: flex;

  color: white;

  &.slide-exit {
    overflow: hidden;
  }

  &.slide-exit-active {
    overflow: hidden;
  }

  > .wrapper {
    > .header {
      margin: 0 10px 0 0;

      display: grid;
      grid:
        'icon title' auto
        'icon subtitle' auto
        / 60px auto;
      gap: 10px 20px;

      > .icon {
        grid-area: icon;

        width: 60px;
        height: 100%;
        object-fit: contain;
      }

      > .title {
        grid-area: title;

        color: ${({ theme }) => theme.colors.text};
      }

      > .subtitle {
        grid-area: subtitle;
      }
    }

    > .content {
      margin: 10px 0 0;
    }
  }
`;

export const Rank = styled.div`
  margin: 30px 0 0;

  display: flex;
  align-items: center;
  gap: 20px;

  > .icon {
    padding: 8px;

    width: 60px;
    height: 60px;
    object-fit: contain;
  }
`;
