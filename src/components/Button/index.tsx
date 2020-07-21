import React from 'react';
import {Container} from './styles';

const Button: React.FC = ({children, ...props}) => {
  return (
    <Container type="button" {...props}>
      {children}
    </Container>
  );
};

export default Button;