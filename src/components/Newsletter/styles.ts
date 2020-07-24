import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: stretch;
    justify-content: center;
    min-width: 40%;
    background-color:  #FF6B00;
    color: white;
    margin: 40px 5%;
    padding: 30px;
    border: 3px solid #E1E1E1;
    border-radius: 30px;

    .formButton {
        align-self: flex-end;
        background-color: white;
        color:  #FF6B00;
        flex: 1;

        &:hover{
            opacity: 0.9;
        }
    }
    .formText {
        flex: 2;
    }


    h1 {
        font-size: 40px;
        margin-bottom: 20px;
    }
    p {
        margin-bottom: auto;
    }
`;