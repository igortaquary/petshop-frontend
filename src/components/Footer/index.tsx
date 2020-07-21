import React from 'react';
import Instagram from '../../assets/instagram.png';
import Whatsapp from '../../assets/whatsapp.png';
import Facebook from '../../assets/facebook.png';
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
                                <img src={Instagram}></img>
                                </a>
                            </li>
                            <li>
                                <a href='/'>
                                <img src={Whatsapp}></img>
                                </a>
                            </li>
                            <li>
                                <a href='/'>
                                <img src={Facebook}></img>
                                </a>
                            </li>
                        </ul>
                    </Redes>
        </Local>
        </Container>
    )
};

export default Footer;