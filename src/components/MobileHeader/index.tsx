import React, { useState } from 'react';
import { Container, Menu, Icon } from './styles';
import logo from "../../assets/pawprint.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaRegUserCircle, FaShoppingBag } from "react-icons/fa";
import { MdRoomService } from "react-icons/md"

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
                <Menu onBlur={toggleMenu}>
                    <h1>Menu</h1>
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
                                <MdRoomService />
                            &nbsp;
                            Serviços
                        </a>
                        </li>
                    </ul>
                    <hr />
                    <ul>
                        <li>
                            <FaRegUserCircle />
                        </li>
                        <li>
                            <a href="/">
                                Entrar
                        </a>
                        </li>
                        <li>
                            <a href="/">
                                Cadastrar
                        </a>
                        </li>
                    </ul>
                </Menu>
            ) : null}
        </>
    );
};

export default MobileHeader;