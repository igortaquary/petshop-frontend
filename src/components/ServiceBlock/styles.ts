import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 1295px;
  margin: 40px auto;
  color: white;  
`;

export const TitleContainer = styled.div`
  width: 100%;
  padding: 20px;
  background: #FF6B00;
  border-radius: 20px;
  margin-bottom: 15px;
  margin-top: 20px;
  font-size: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;

`;

export const ServicesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  @media(min-width: 1295px) {
    div + div {
      margin-left: 28px;
    }
  }
  @media(max-width: 1295px){
    div{
      margin: 10px 20px;
    }
  }
`;

export const Contact = styled.div`
  display: flex;
  width: 350px;
  font-size: 36px;
  align-items:center;
  svg {
    color: black;
    margin: 0 20px;
  }
`;

