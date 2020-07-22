import React, { useState } from 'react';
import { Container, Menu, Icon } from './styles';
import logo from "../../assets/pawprint.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaRegUserCircle, FaShoppingBag } from "react-icons/fa";
import { MdRoomService } from "react-icons/md"
import { Link } from 'react-router-dom';

const MobileHeader = () => {

    const [isVisible, setIsVisible] = useState(false);
    const toggleMenu = () => {
        setIsVisible(!isVisible);
    }

    return (
        <>
            <Container>

                <GiHamburgerMenu onClick={toggleMenu}></GiHamburgerMenu>

                <a href='/'>
                    <Icon src={logo} alt="Logo"></Icon>
                </a>
            </Container>
            {isVisible ? (
                <Menu>
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
            ) : null}
        </>
    );
};

export default MobileHeader;