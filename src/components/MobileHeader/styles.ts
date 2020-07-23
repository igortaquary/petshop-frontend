import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 80px;
    background-color: #FF6B00;
    display: flex;
    align-items: center;
    font-size: 25px;
    color: white;
    padding: 10px;

    a {
        margin-left: 28%;
    }
`;

export const Icon = styled.img`
    width: 80px;
    padding: 5px;
    display: flex;
    justify-content: center;
   /*  margin-left: 30%; */

    &:hover {
      opacity: 0.9;
    }
`;

export const Menu = styled.div`
    
    width: 70%;
    background-color: #FF6B00;
    position: absolute;
    top: 80px;
    left: 0;
    border: 1px solid white;
    border-radius: 0 0 40px 0; 
    z-index: 1000;
    padding: 20px 20px 20px 5px;
    color: white;
    overflow: hidden;

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
