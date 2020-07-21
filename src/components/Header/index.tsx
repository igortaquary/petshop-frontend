import React from 'react';
import { Container, Menu, Icon, User } from './styles';
import logo from "../../assets/pawprint.png";
import { FaRegUserCircle, FaShoppingBag } from "react-icons/fa";
import { MdRoomService } from "react-icons/md"
import {Link} from 'react-router-dom';

const Header = () => {
  return (
    <Container>
      <Menu>
        <ul>
          <li>
            <a href='/'>
              <FaShoppingBag />
              &nbsp;
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
              &nbsp;
              Serviços
            </a>
          </li>
          <User>
            <FaRegUserCircle />
            <Link to="/login">Entrar </Link>
            <Link to="/signup">Cadastrar</Link>
          </User>
        </ul>
      </Menu>
    </Container >
  );
};

export default Header;