import styled from 'styled-components';

export const TitleContainer = styled.div`
  display: inline-block;
  width: 100%;
  padding: 20px 40px;
  height: 650px;

  .mainTitle {
        position: absolute;
        right: 20%; 
        top: 120px;
        color: #FF6B00;
        font-size: 75px;
        width: 30%;
        text-align: center;
        

        @media (max-width: 1295px){
            display: block;
            position: relative;
            width: 60%;
            right: 0;
            top: 0;
            margin: 20px 20%;
            font-size: 60px;
        }
    }

        @media (max-width: 1295px){
            padding: 20px 0px;
            height: fit-content;
        }
`;

export const Container = styled.div` 
    width: 100%;
`;

export const Banner = styled.div`
    position: absolute;
    top: 340px;
    left: calc(50% - 647px);
    width: 1295px;
    max-height: 400px;
    border-radius: 30px;
    overflow: hidden;
    

    a {
        width: 100%;
    }
    img {
        width: 100%;
        height: 100%;
    }

    @media (max-width: 1295px){
        position: relative;
        margin: 0;
        top: 0;
        left: 0;
        width: 100%;
    }
`;

export const Dog = styled.img`
    position: absolute;
    top: 80px;
    left: 20%;
    height: 301px;
    z-index: 9;

    @media (max-width: 1295px){
        display: none;
    }
`;

export const Info = styled.div`
    display: flex;
    margin: 40px 20px;

    @media (max-width: 950px){
        flex-direction: column;
    }
`;

export const About = styled.div`
    font-size: 20px;
    color: 'black';
    opacity: 0.9;
    align-content: center;
    text-align: center;
    h1 {
        margin-bottom: 20px;
    }
    margin-bottom: 40px;
`;