import styled from 'styled-components';

export const Container = styled.div`
    margin: 40px 5px;
    text-align: center;
    
    h1 {
        color: #FF6B00;
        margin-bottom: 40px;
        font-size: 50px;
    }

    h2 {
        color: #FF6B00;
        margin-bottom: 40px;
        font-size: 30px;
    }

    .products {
        display: flex;
        @media(max-width: 820px){
            flex-direction: column;
            align-items: center;
        }
    }
`;

export const ProductsContainer = styled.div`
    max-width: 1420px;
    margin-left: 10px;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
`;