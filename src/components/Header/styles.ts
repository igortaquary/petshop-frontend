import styled from 'styled-components';

export const Container = styled.header`
  width: 100%;
  height: 80px;
  background: #FF6B00;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  color: white;

`;

export const Menu = styled.div`
  position: absolute;

  ul {
    list-style: none;
    display: flex;
    align-items: center;
    font-size: 40px;

    li {
      margin: 0 80px;
    }
  }

  a {
    text-decoration: none;
    color: white;

    &:hover {
        font-weight: bolder;
    }
  }
`;

export const Icon = styled.img`
    height: 70px;

    &:hover {
      height: 80px;
    }
  `;

export const User = styled.div`
  margin-left: auto;
  margin-right: 10px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  font-size: 24px;
  
  a {
    color: white;
    text-decoration: none;
    padding: 10px;
  }
`;