import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1295px;
  margin: 38px auto;
`;

export const SearchBar = styled.div`
  max-width: 1295px;
  width: 100%;
  display: flex;
  margin: 0 auto 38px auto;


  div {
    flex: 2;
  }

  button{
    flex: 1;
  }
  @media(max-width: 700px){
    flex-direction: column;
  }
`;

export const ProductContainer = styled.div`
  display: flex;
  width: 100%;
  max-width: 1295px;
  background: #FFF;
  border-radius: 20px;
  min-height: 650px;


  img {
    max-height: 520px;
    max-width: 520px;
    width: 100%;
    margin: 52px 0 0 52px;
  }

  div {
    flex: 1;
    margin-top: 80px;
    margin-left: 20px;
    max-width: 500px;
    h2 {
      font-size: 36px;
      color: #FF6B00;
    }
    span {
      color: green;
      font-size: 24px;
    }
    strong {
      font-size: 48px;
      font-weight: 500px;
    }
    p {
      margin-top: 20px;
      font-size: 20px;
      color: #6F6868;
    }

    div {
      margin-top: 20px;
      display: flex;
      justify-content: center;
      margin-bottom: 40px;
      align-items: center;

      span{
        font-weight: bold;
        font-size: 36px;
        margin: 0 10px;
      }

      svg {
        background: #DBDBDB;
        border-radius: 20px;
        cursor: pointer;
        width: 40px;
        height: 40px;
      }

  
    }
  }
  @media(max-width: 900px){
    flex-direction: column;
    align-items: center;
    img{
      margin: 0 0;
    }
    p{
      text-align: center;
    }
  }
`;