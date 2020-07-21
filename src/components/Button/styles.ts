import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.button`
  background: #FF6B00;
  width: 100%;
  height: 56px;
  border: 0;
  border-radius: 10px;
  font-size: 24px;
  font-weight: 700;
  color: #FFFBFB;
  transition: 0.2s;
  cursor: pointer;

  &:hover {
    background: ${shade(0.2, '#FF6B00')}
  }


`;