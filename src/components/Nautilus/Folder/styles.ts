import styled from 'styled-components';

export const Container = styled.div`
  margin: 10px;

  width: 80px;

  > .button {
    margin: auto;

    display: flex;
    flex-direction: column;
    align-items: center;

    > .icon {
      width: 48px;
      height: 48px;
      object-fit: contain;
    }

    > .name {
      margin: 3px 0 0;
      padding: 3px;

      max-width: 75px;
      border-radius: 3px;

      color: white;
    }

    &:hover {
      filter: brightness(1.1);
    }

    &:focus {
      > .icon {
        filter: brightness(0.7);
      }

      > .name {
        background: ${({ theme }) => theme.colors.primary};
      }
    }
  }
`;
