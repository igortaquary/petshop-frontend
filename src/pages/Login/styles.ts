import styled from 'styled-components';
import LoginImage from '../../assets/loginImage.svg';

export const Container = styled.div`
  display: flex;
  margin: 0 auto;
  overflow:hidden;
  height: 100vh;

  max-width: 1150px;
  
`;

export const FormContainer = styled.div`
  /* margin: 15% 0 0 0; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 600px;
  text-align: center;

  strong {
    color: #FF6B00;
    font-size: 36px;
    margin-bottom: 20px;
  }

  button {
    margin-bottom: 20px;
    width: 320px;
  }

  a {
    text-decoration: none;
    color: #463F3A;
    font-size: 18px;
  }

  hr {
    width: 440px;
    margin: 20px 0;
    border: 0,5px solid black;
  }

  form {
    width: 320px;
    text-align: center;

    div {
      margin-bottom: 10px;
    }
  }
`;

export const ImageContainer = styled.div`
  background: url(${LoginImage}) no-repeat center;
  
  flex: 1;
`;