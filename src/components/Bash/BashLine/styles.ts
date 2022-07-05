import styled, { css } from 'styled-components';

export const Container = styled.div`
  * {
    ${({ theme }) => theme.fonts.code}
  }
`;

export const Title = styled.p`
  color: #5f45a4;
  font-weight: 700;

  > .user {
    color: #e1f34a;
  }

  > .dir {
    color: #75d7ec;
  }
`;

export type InputProps = {
  match: boolean;
  cursorActive: boolean;
};

export const Input = styled.p<InputProps>`
  white-space: pre-wrap;
  word-break: break-all;

  > .arrow {
    margin: 0 6px 0 0;

    color: #41de6a;
  }

  > .value {
    > .command {
      color: ${({ match }) => (match ? '#41de6a' : '#e356a7')};
      font-weight: ${({ match }) => (match ? 400 : 700)};

      ${({ cursorActive, match }) =>
        cursorActive &&
        css`
          > .cursor {
            background: ${match ? '#41de6a' : '#e356a7'};

            color: #282a36;
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

            color: #282a36;
          }
        `}
    }
  }
`;

export const Response = styled.p`
  color: white;
  white-space: pre-wrap;
  word-break: break-all;
`;
