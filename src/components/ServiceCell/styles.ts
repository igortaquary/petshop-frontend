import styled from 'styled-components';
import {transparentize, shade} from 'polished';

interface ContainerProps {
  bg: string;
}

export const Container = styled.div<ContainerProps>`
  width: 300px;
  height: 300px;
  display: flex;
  flex-direction: column;
  justify-content:center;
  align-items:center;
  padding: 20px;
  background-image:
    /* linear-gradient(to bottom, ${shade(0, transparentize(0.5, '#fc4a1a'))}, ${shade(0, transparentize(0.5, '#f7b733'))}), */
    url(${props => props.bg});
  border-radius: 20px;
  overflow: hidden;

  &:hover{
    background-image:
    linear-gradient(to bottom, ${shade(0.3, transparentize(0.5, '#fc4a1a'))}, ${shade(0.3, transparentize(0.5, '#f7b733'))}),
    url(${props => props.bg});
    span {
      visibility: visible;
      opacity: 1;
      height: 100%;
    }
  }

  strong {
    font-size: 36px;
    color: white;
  }

  span {
    font-size: 22px;
    text-align: left;
    visibility: hidden;
    height: 0;
    opacity: 0;
    color: white;
    transition: 0.3s;
    line-height: 130%;
  }
`;