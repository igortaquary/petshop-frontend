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

  

  ${(props) => 
    (props.isFocus || props.isFilled) && 
    css`
      border-color: #FF6B00; 
    `
  }


  input {
    flex: 1;
    height: 100%;
    border: 0;
    font-size: 18px;
  }
`;