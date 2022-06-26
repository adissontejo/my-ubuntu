import styled from 'styled-components';

export const Container = styled.section`
  width: 40%;
  height: 40%;
  border-radius: 5px;
  border: 2px solid ${({ theme }) => theme.colors.bash.border};
  background: ${({ theme }) => theme.colors.bash.background};

  display: flex;
  flex-direction: column;

  overflow: auto;

  > header {
    padding: 15px 0;

    background: ${({ theme }) => theme.colors.bash.header};
    border: 2px solid ${({ theme }) => theme.colors.bash.border};
    border-style: none none solid none;

    color: white;
    font-weight: 700;

    display: flex;
    justify-content: center;

    .icon {
      position: absolute;
      right: 30px;
    }
  }

  > .content {
    flex: 1;
    overflow-y: auto;
    overflow-x: hidden;
  }
`;
