import styled from 'styled-components';
import { lighten } from 'polished';

export const Container = styled.div`
  width: 100%;
  max-width: 1295px;
  margin: 30px auto 40px auto;
  
  display: flex;
  flex-direction: column;
  align-items: center;

  h2 {
    color: #FF6B00;
    font-size: 24px;
    border-bottom: 3px solid #FF6B00;
    margin-bottom: 30px;
  }
`;

export const Arrow = styled.button`
  background: transparent;
  font-size: 50px;
  border: none;
  color: ${lighten(0.8, '#000')};
  &:active {
    color: ${lighten(0.2, '#000')}
  }
`;