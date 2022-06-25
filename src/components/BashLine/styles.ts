import styled, { css } from 'styled-components';

export const Container = styled.div`
  font-family: Fira Code;
`;

export const Title = styled.p`
  color: ${({ theme }) => theme.colors.bash.title};
  font-weight: 700;

  > .user {
    color: ${({ theme }) => theme.colors.bash.username};
  }

  > .dir {
    color: ${({ theme }) => theme.colors.bash.dirname};
  }
`;

export type InputProps = {
  match: boolean;
  cursorActive: boolean;
};

export const Input = styled.p<InputProps>`
  white-space: pre-wrap;

  > .arrow {
    color: ${({ theme }) => theme.colors.bash.command};
  }

  > .value {
    > .command {
      color: ${({ theme, match }) =>
        match ? theme.colors.bash.command : theme.colors.bash.input};
      font-weight: ${({ match }) => (match ? 400 : 700)};

      ${({ cursorActive, match }) =>
        cursorActive &&
        css`
          > .cursor {
            background: ${({ theme }) =>
              match ? theme.colors.bash.command : theme.colors.bash.input};

            color: ${({ theme }) => theme.colors.bash.background};
          }
        `}
    }

    > .args {
      color: white;
      font-weight: 400;

      ${({ cursorActive }) =>
        cursorActive &&
        css`
          > .cursor {
            background: white;

            color: ${({ theme }) => theme.colors.bash.background};
          }
        `}
    }
  }
`;

export const Response = styled.p`
  color: white;
  white-space: pre-wrap;
`;
