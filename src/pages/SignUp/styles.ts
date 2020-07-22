import styled, { keyframes } from 'styled-components';
import signUpImage from '../../assets/signUpImage.svg';

const Animation = keyframes`
  from {
    margin-right: 100px;
  }
  to {
    margin-right: 0;
  }
`;

export const Container = styled.div`
  display: flex;
  height: 100vh;
  max-width: 1150px;
  overflow: hidden;
  margin: 0 auto;
`;

export const FormContainer = styled.div`
  animation: ${Animation} 1s;
  max-width: 580px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-items: center;
  margin: 18% 0 0 0;
  width: 100%;
  strong {
    color: #FF6B00;
    font-size: 36px;
    margin-bottom: 20px;
  }
  
  form {
    width: 320px;

    div {
      margin-bottom: 10px;
    }
  }
`;

export const ImageContainer = styled.div`
  background: url(${signUpImage}) no-repeat center;
  flex: 1;
`;

