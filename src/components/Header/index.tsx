import React, { useContext } from 'react';
import { Container, Menu, Icon, User } from './styles';
import logo from "../../assets/pawprint.png";
import { FaRegUserCircle, FaShoppingBag, FaShoppingCart } from "react-icons/fa";
import { MdRoomService } from "react-icons/md"
import { Link } from 'react-router-dom';
import { CartContext } from '../../hooks/cartHook';

const Header = () => {

  const cartContext = useContext(CartContext);

  return (
    <Container>
      <Menu>
        <ul>
          <li>
            <Link to="/shop">
              <FaShoppingBag />
              &nbsp;
              Produtos
            </Link>
          </li>
          <li>
            <Link to="/">
              <Icon src={logo} alt="Logo"></Icon>
            </Link>
          </li>
          <li>
            <Link to="/service">
              <MdRoomService />
              &nbsp;
              Serviços
            </Link>
          </li>
          <User>
            <FaRegUserCircle />
            <Link to="/login">Entrar </Link>
            <Link to="/signup">Cadastrar</Link>
          </User>
          <FaShoppingCart onClick={cartContext.toggleCart} className={'cartMenu'} >Carrinho
          </FaShoppingCart>
        </ul>
      </Menu>
    </Container >
  );
};

export default Header;