import styled, { css } from 'styled-components';
import { shade } from 'polished';

interface ContainerProps {
  isShown: boolean;
}

export const CartContainer = styled.div<ContainerProps>`
  height: 100vh;
  max-width: 500px;
  width: 100%;
  background: #E1E1E1;
  position: absolute;
  right: -100%;
  transition: 0.5s;
  ${props => props.isShown && css`right: 0`};

  display: flex;
  flex-direction: column;
  align-items: center;

  span {
    font-size: 24px;
    margin-bottom: 10px;
    color: grey;
  }

  .cart-header {
    height: 100px;
    width: 100%;
    background: white;
    display: flex;
    align-items: center;
    padding: 20px;
    font-size: 24px;
    color: #FF6B00;
    margin-bottom: 29px;

    span{
      flex: 1;
    }

    svg {
      margin: 0 10px;
    }

    span + svg {
      cursor: pointer;
      color: black;
    }
  }

  .cart-items {
    flex: 1;
    overflow: auto;
    width: 100%;
    ::-webkit-scrollbar {
      width: 5px;
    }

      /* Track */
      ::-webkit-scrollbar-track {
        background: #f1f1f1;
      }

      /* Handle */
      ::-webkit-scrollbar-thumb {
        background: #888;
      }

      /* Handle on hover */
      ::-webkit-scrollbar-thumb:hover {
        background: #555;
      }
    }
  
`;

export const CartItem = styled.div`
  margin: 0 auto;
  height: 100px;
  margin-bottom: 10px;
  width: 90%;
  background: white;
  border-radius: 20px;
  display: flex;
  padding: 0 30px;
  align-items: center;

  img {
    height: 90%;
  }
  @media(max-width: 350px) {
    img {
      height: 70%;
    }
  }

  img + div {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    flex: 1;


    span {
      font-weight: bold;
      font-size: 18px;
    }
    strong{
      font-size: 22px;
      color: green;
    }
    @media(max-width: 350px) {
      span {
        font-size: 16px;
      }
      strong {
        font-size: 18px;
      }
    }
  }

  div + div {

    @media(max-width: 400px) {
      display: flex;
      flex-direction: column-reverse;
      align-items: center;
      justify-content: center;
    }
    margin-right: 15px;

    span {
      padding: 0 8px;
      font-size: 24px;
    }

    svg {
      font-size: 20px;
    }

    svg:hover {
      color: red;
    }

    span + svg:hover {
      color: green;
    }
  }

  svg {
    font-size: 20px;
    color: grey;
    cursor: pointer;

    &:hover {
      color: ${shade(0.2, 'grey')};
    }
  }
`;

export const FocusContainer = styled.div`
  height: 100%;
  width: 100%;
  background: rgb(0,0,0,0.5);
  opacity: 0;
  transition: 0.3s;
`;

export const Container = styled.div<ContainerProps>`  
  width: 100%;
  height: 100vh;
  position: absolute;
  z-index: 10;
  display: flex;
  visibility: hidden;
  ${props => props.isShown && 
    css`
      visibility: visible;
      .focus {
        opacity: 1;
      }
    `}
`;

