import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 212px;
  height: 280px;
  border: 1px solid rgb(255, 107, 0, 0.3);
  margin: 5px 5px;
  transition: 0.3s;
  border-radius: 20px;
  padding: 10px;
  background-color: white;

  svg {
    position: absolute;
    right: 15px;
    top: 15px;
    color: green;
    font-size: 24px;
    cursor: pointer;
  }

  &:hover {
    border: 2px solid #FF6B00;
  }

  img {
    max-width: 150;
    max-height: 150px;
    margin-bottom: 10px;
  }

  strong {
    text-align: center;
    flex: 1;
    background-color: white;

  }

  span {
    font-size: 24px;
    font-weight: 700;
    color: #FF6B00;
    margin-bottom: 10px;
    background-color: white;

  }
`;
