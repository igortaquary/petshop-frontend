import styled, {css} from 'styled-components';

interface ContainerProps {
  isFocus: boolean;
  isFilled: boolean;
  hasError: boolean;
}

export const Container = styled.div<ContainerProps>`
  height: 56px;
  width: 100%;
  border: 1px solid black;
  position:relative;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 28px;
  border-radius: 10px;
  transition: 0.2s;
  margin-bottom: 16px;


  span {
    position: absolute;
    left: auto;
    top: 2px;
    color: red;
    visibility: hidden;
    height: 0;
    transition: 0.2s;
    opacity: 0;
  }

  

  ${(props) => 
    (props.isFocus || props.isFilled) && 
    css`
      border-color: #FF6B00; 

      svg {
        color: #FF6B00;
      }

    `
  }

  ${(props) => 
      (props.hasError && !props.isFocus) && 
      css`
        border-color: red; 

        svg {
          color: red;
        }

        span {
          visibility: visible; 
          height: 8px;
          opacity: 1;
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