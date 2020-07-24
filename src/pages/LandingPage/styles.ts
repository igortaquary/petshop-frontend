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
        

        @media (max-width: 1000px){
            display: block;
            position: relative;
            width: 60%;
            right: 0;
            top: 0;
            margin: 20px 20%;
            font-size: 50px;
        }
    }

        @media (max-width: 1000px){
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
    max-width: 1295px;
    height: 300px;
    border-radius: 30px;
    overflow: hidden;

    a {
        width: 100%;
    }
    img {
        width: 100%;
        height: 100%;
    }

    @media (max-width: 1000px){
        position: relative;
        margin: 30px 5%;
        top: 0;
        left: 0;
        width: 90%;
        height: 250px;
    }
`;

export const Dog = styled.img`
    position: absolute;
    top: 80px;
    left: 20%;
    height: 301px;
    z-index: 9;

    @media (max-width: 1000px){
        display: none;
    }
`;
