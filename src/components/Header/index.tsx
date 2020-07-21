import React from 'react';
import { Container, Menu, Icon, User } from './styles';
import logo from "../../assets/pawprint.png";
import { FaRegUserCircle } from "react-icons/fa";

const Header = () => {
  return (
    <Container>
      <Menu>
        <ul>
          <li>
            <a href='/'>Produtos</a>
          </li>
          <li>
            <a href='/'>
              <Icon src={logo} alt="Logo"></Icon>
            </a>
          </li>
          <li>
            <a href='/'>Serviços</a>
          </li>
        </ul>
      </Menu>
      <User>
        <FaRegUserCircle />
        <a href="/">Entrar</a> /
          <a href="/">Cadastrar</a>
      </User>
    </Container >
  );
};

export default Header;