import React from 'react';
import {FaInstagram, FaWhatsapp, FaFacebook} from "react-icons/fa";
import {Container, Menu, Contato, Local, Redes} from './styles';

const Footer = () => {
    return (
        <Container>
        <Menu>
            <h3>PetShop Mundo Cão</h3>
            <ul>
                <li>
                    - <a href='/'>Produtos</a>
                </li>
                <li>
                    - <a href='/'>Serviços</a>
                </li>
            </ul>
        </Menu>
        <Contato>
                    Contato:<br></br>
                    (11) 4002-8922
        </Contato>
        <Local>
                    Localização:<br></br>
                    Brasília - DF
                    <Redes>
                        Redes Sociais:
                        <ul>
                            <li>
                                <a href='/'>
                                <FaInstagram></FaInstagram>
                                </a>
                            </li>
                            <li>
                                <a href='/'>
                                <FaWhatsapp></FaWhatsapp>
                                </a>
                            </li>
                            <li>
                                <a href='/'>
                                <FaFacebook></FaFacebook>
                                </a>
                            </li>
                        </ul>
                    </Redes>
        </Local>
        </Container>
    )
};

export default Footer;