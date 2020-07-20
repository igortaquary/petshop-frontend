import React from 'react';
import { Container, Menu } from './styles';

const Header = () => {
  return (
    <Container>
      <a href="/">PetShop</a>

      <Menu>
        <ul>
          <li>
            <a href='/'>Agendamento</a>
          </li>
          <li>
            <a href='/'>Serviços</a>
          </li>
          <li>
            <a href='/'>Contato</a>
          </li>
        </ul>
      </Menu>


    </Container>
  );
};

export default Header;