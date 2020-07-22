import React from 'react';
import {Container} from './styles';

interface ServiceProps {
  image: string;
  title: string;
}

const ServiceCell: React.FC<ServiceProps> = ({image, title, children}) => {

  return (
    <Container bg={image}>
      <strong>{title}</strong>
      <span>{children}</span>
    </Container>
  );
}

export default ServiceCell;