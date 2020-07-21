import styled, {css} from 'styled-components';

interface ContainerProps {
  isFocus: boolean;
  isFilled: boolean;
}

export const Container = styled.div<ContainerProps>`
  height: 56px;
  width: 100%;
  border: 1px solid black;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 28px;
  border-radius: 10px;
  transition: 0.2s;

  

  ${(props) => 
    (props.isFocus || props.isFilled) && 
    css`
      border-color: #FF6B00; 

      svg {
        color: #FF6B00;
      }

    `
  }

  svg {
    font-size: 18px;
    margin-right: 10px;
    transition: 0.2s;
  }


  input {
    flex: 1;
    height: 100%;
    border: 0;
    font-size: 18px;
  }
`;