import styled from 'styled-components';
import { FaInstagram } from 'react-icons/fa';

export const Container = styled.footer`
    height: 236px;
    background: #d9d9d9;
    padding: 10px;
    display: flex;
    a{
        text-decoration: none;
        color: black;
        font-size: 20px;
    }
`;

export const Menu = styled.div`
    margin-left: 15px;
    flex: 1;
    ul{
        list-style: none;
    }
    
`;

export const Contato = styled.div`
    font-size: 1.25em;
    flex: 0.8;
    display: flex;
    justify-content: flex-end;
    text-align: center;
`;

export const Local = styled.div`
    font-size: 1.25em;
    flex: 0.8;
    text-align: center;
`;

export const Redes = styled.div`
    font-size: 1.25em;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-top: 90px;
    flex: 0.8;
    ul{
        list-style: none;
        display: flex;
        li{
            margin-right: 1px;
            svg{
                font-size: 150%;
                margin-left: 15px;
            }
        }
    }
`;