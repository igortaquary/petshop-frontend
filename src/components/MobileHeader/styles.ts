import styled, { css } from "styled-components";

interface MenuProps {
    isVisible: boolean;
}

export const Container = styled.div`
    width: 100%;
    height: 80px;
    background-color: #FF6B00;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 25px;
    color: white;
    padding: 10px;
    overflow: hidden;

    .menuIcon {
        position: absolute;
        left: 10px;
        width: 80px;

        &:hover{
            opacity: 0.9;
            cursor: pointer;
        }
    }
    .cartIcon {
        position: absolute;
        right: 10px;
        width: 80px;
        &:hover{
            opacity: 0.9;
            cursor: pointer;
        }
    }
`;

export const Icon = styled.img`
    width: 70px;
    padding: 5px;
    display: flex;
    justify-content: center;

    &:hover {
      opacity: 0.9;
    }
`;

export const Menu = styled.div<MenuProps>`
    height: 0px;
    width: 70%;
    background-color: #FF6B00;
    position: absolute;
    top: 80px;
    left: 0;
    border: 1px solid white;
    border-radius: 0 0 40px 0; 
    z-index: 100;
    padding: 20px 20px 20px 5px;
    color: white;
    overflow: hidden;
    visibility: hidden;
    opacity: 0;

    transition: 0.5s;
    ${props => props.isVisible && css`height: 350px; visibility: visible; opacity: 1;`}

    h1 {
        margin-left: 5px;
        margin-bottom: 15px;
    }

    ul {
        color: white;
        font-size: 30px;
        flex-direction: column;
        margin: 20px 20px 20px 5px;
    }

    li{
        display: flex;
        justify-content: center;
        align-items: center;
        margin-bottom: 10px;
    }

    a{
        text-decoration: none;
        color: white;
    }

    hr{
        width: 90%;
        color: white;
        margin: 10px
    }
`;
