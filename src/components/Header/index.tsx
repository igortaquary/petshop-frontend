import React from 'react';
import { Container, Menu, Icon, User } from './styles';
import logo from "../../assets/pawprint.png";
import { FaRegUserCircle, FaShoppingBag } from "react-icons/fa";
import { MdRoomService } from "react-icons/md"

const Header = () => {
  return (
    <Container>
      <Menu>
        <ul>
          <li>
            <a href='/'>
              <FaShoppingBag />
              Produtos
            </a>
          </li>
          <li>
            <a href='/'>
              <Icon src={logo} alt="Logo"></Icon>
            </a>
          </li>
          <li>
            <a href='/'>
              <MdRoomService />
              Serviços
            </a>
          </li>
          <User>
            <FaRegUserCircle />
            <a href="/">Entrar </a>
            <a href="/">Cadastrar</a>
          </User>
        </ul>
      </Menu>
    </Container >
  );
};

export default Header;