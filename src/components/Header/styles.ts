import styled from 'styled-components';

export const Container = styled.header`
  height: 80px;
  background: orange;
  display: flex;
  align-items: center;

  font-size: 24px;
  a {
    text-decoration: none;
    color: black;
    font-weight: bold;
    margin-left: 30px;
  } 

`;

export const Menu = styled.div`

  flex: 1;
  margin-right: 30px;    

  ul {
    font-size: 20px;
    list-style: none;
    display: flex;
    justify-content: flex-end;

    li {
      &:hover {
        border-bottom: 1px solid black;
      }
    }
  }

`;