import styled from 'styled-components';

export const Menu = styled.div`
  width: 100%;
  height: 80px;
  padding: 5px;
  background-color: #FF6B00;
  color: white;
  display: flex;
  flex-direction: row;
  align-items: stretch;
  justify-content: center;
  overflow: hidden;

  ul {
    width: 75%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 30px;
    list-style: none;
    
    li {
    margin: 0;
    width: 33%
      
    }
    @media (max-width: 1000px){
        margin: 0 5px;
        font-size: 25px;

      }
  }

  a {
    text-decoration: none;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
      opacity: 0.9;
    }
  }

  .cartMenu {
    display: flex;
    margin: auto;
    font-size: 40px;
    width: 5%;

    &:hover{
      cursor: pointer;
      opacity: 0.9;
    }
  }
`;

export const Icon = styled.img`
    width: 80px;
    padding: 0;

    &:hover {
      opacity: 0.9;
    }
  `;

export const User = styled.div`
  height: 100%;
  width: 20%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
    
  a {
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    text-decoration: none;
    padding: 5px;
    
    &:hover {
      opacity: 0.9;
    }
  }

  @media (max-width: 1000px){
    flex-direction: column;
    font-size: 20px;
    a{padding: 2px;}
  }
`;