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
    }
`;

export const ProductsContainer = styled.div`
    max-width: 70%;
    margin-left: 10px;
    display: flex;
    flex-wrap: wrap;
`;