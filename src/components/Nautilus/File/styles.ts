import styled from 'styled-components';

export const Container = styled.button`
  margin: 5px 0 0;

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
    word-break: break-word;
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
`;
