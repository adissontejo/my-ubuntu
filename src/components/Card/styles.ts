import styled from 'styled-components';

export const Container = styled.button`
  width: 100px;
  height: 150px;
  border: solid 1px white;
  border-radius: 5px;

  cursor: pointer;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  transition: background 0.3s;

  > .icon {
    width: 60px;
    height: 60px;
  }

  > .alt {
    height: 0;
    opacity: 0;

    color: white;
    font-size: 16px;

    display: flex;
    align-items: flex-start;

    transform: translateY(25px);

    transition: all 0.3s;
  }

  &:hover {
    background: #fff1;

    > .alt {
      margin: 10px 0 0;

      height: 10px;
      opacity: 1;

      transform: translateY(0);
    }
  }
`;
