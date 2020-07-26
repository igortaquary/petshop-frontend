import React, { useState, useContext } from 'react';
import { Container, Menu, Icon } from './styles';
import logo from "../../assets/pawprint.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaRegUserCircle, FaShoppingBag, FaShoppingCart, FaTimesCircle, FaHome } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { CartContext } from '../../hooks/cartHook';

const MobileHeader = () => {

    const [isVisible, setIsVisible] = useState(false);
    const toggleMenu = () => {
        ; setIsVisible(!isVisible)
    }

    const closeMenu = () => {
        if (isVisible) {
            setIsVisible(false);
        }
    }

    const cartContext = useContext(CartContext);


    return (
        <>
            <Container>
                <GiHamburgerMenu onClick={toggleMenu} className='menuIcon'></GiHamburgerMenu>
                <div>
                    <Link to='/'>
                        <Icon src={logo} alt="Logo"></Icon>
                    </Link>
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
                <div style={{ display: 'flex' }}>
                    <h1>Menu</h1>
                    <FaTimesCircle onClick={closeMenu} className={'closeMenu'}>x</FaTimesCircle>
                </div>
                <ul>
                    <li>
                        <Link to='/' onClick={toggleMenu}>
                            <FaHome />
                            &nbsp;
                            Página Inicial

                        </Link>
                    </li>
                    <li>
                        <Link to="/shop" onClick={toggleMenu}>
                            <FaShoppingBag />
                            &nbsp;
                            Produtos
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