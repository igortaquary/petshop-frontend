import React, { useContext } from 'react';
import { Menu, Icon, User } from './styles';
import logo from "../../assets/pawprint.png";
import { FaRegUserCircle, FaShoppingBag, FaShoppingCart } from "react-icons/fa";
import { MdRoomService } from "react-icons/md"
import { Link } from 'react-router-dom';
import { CartContext } from '../../hooks/cartHook';

const Header = () => {

  const cartContext = useContext(CartContext);

  return (
    <Menu>
      <User>
        <FaRegUserCircle />
        <Link to="/login">Entrar </Link>
        <Link to="/signup">Cadastrar</Link>
      </User>
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
      </ul>
      <FaShoppingCart onClick={cartContext.toggleCart} className={'cartMenu'} ></FaShoppingCart>
    </Menu>
  );
};

export default Header;