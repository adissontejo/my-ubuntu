import styled from 'styled-components';

import { Window } from '../Window';

export const Container = styled(Window)`
  .content {
    flex: 1;

    background: ${({ theme }) => theme.colors.bash.background};

    overflow: hidden;
  }
`;
