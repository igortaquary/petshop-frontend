import styled from 'styled-components';

export const Container = styled.div`
    min-width: 350px;
    max-width: 20%;
    border: 1px solid #FF6B00;
    border-radius: 20px;
    max-height: 600px;
    overflow: hidden;
    display: flex;
    flex-direction: column;

    header {
        background-color: #FF6B00;
        color: white;
        padding: 20px;
        font-size: 30px;
    }

`;

export const Form = styled.form`
    margin: 20px 10px;
    font-size: 25px;

    p {
        margin-top: 30px;
        color: #787878;
    }

    input {
        font-size: 20px;
        border-color: #FF6B00;
        border-radius: 30px 0px 0px 30px;
        padding: 5px 10px;
        height: 40px;
    }
    button {
        font-size: 20px;
        color: white;
        height: 40px;
        width: 40px;
        background-color: #FF6B00;
        border-color: #FF6B00;
        border-radius: 0px 30px 30px 0px;

        &:hover {
            cursor: pointer;
        }
    }

    select {
        color: #707070;
        height: 30px;
        width: 200px;
        font-size: 18px;
        border-color: #FF6B00;
        border-radius: 30px;
        padding: 0px 10px;
    }

    .slider {
        margin-top: 25px;
        width: 250px;
        color: #FF6B00;
    }
`;