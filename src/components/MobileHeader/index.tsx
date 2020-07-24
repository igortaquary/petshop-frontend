import React, { useState, useContext } from 'react';
import { Container, Menu, Icon } from './styles';
import logo from "../../assets/pawprint.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaRegUserCircle, FaShoppingBag, FaShoppingCart } from "react-icons/fa";
import { MdRoomService } from "react-icons/md"
import { Link } from 'react-router-dom';
import { CartContext } from '../../hooks/cartHook';

const MobileHeader = () => {

    const [isVisible, setIsVisible] = useState(false);
    const toggleMenu = () => {
        setIsVisible(!isVisible);
    }

    const cartContext = useContext(CartContext);

    return (
        <>
            <Container>
                <GiHamburgerMenu onClick={toggleMenu} className='menuIcon'></GiHamburgerMenu>
                <div>
                    <a href='/'>
                        <Icon src={logo} alt="Logo"></Icon>
                    </a>
                </div>
                {cartContext.cartProducts.length !== 0 && 
                    <div 
                        onClick={cartContext.toggleCart} 
                        className="quantity">
                            {cartContext.cartProducts.length}
                    </div>}
                <FaShoppingCart onClick={cartContext.toggleCart} className='cartIcon'></FaShoppingCart>
            </Container>
            <Menu isVisible={isVisible}>
                <h1>Menu</h1>
                <ul>
                    <li>
                        <Link to="/shop" onClick={toggleMenu}>
                            <FaShoppingBag />
                            &nbsp;
                            Produtos
                        </Link>
                    </li>
                    <li>
                        <Link to="/services" onClick={toggleMenu}>
                            <MdRoomService />
                            &nbsp;
                            Serviços
                        </Link>
                    </li>
                </ul>
                <hr />
                <ul>
                    <li>
                        <FaRegUserCircle />
                    </li>
                    <li>
                        <Link to="/login" onClick={toggleMenu}>
                            Entrar
                        </Link>
                    </li>
                    <li>
                        <Link to="/signup" onClick={toggleMenu}>
                            Cadastrar
                        </Link>
                    </li>
                </ul>
            </Menu>
        </>
    )
};

export default MobileHeader;