import styled from 'styled-components';

export const Row = styled.div`
    display: flex;
`;

export const Col = styled.div`
    flex-grow: 1;
`;

export const QuadroComprarContainer = styled.div`

    flex-basis: 426px;
    flex-grow: 1;
    background-color: rgb(255, 255, 255);
    border: 1px solid rgb(164, 164, 164);
    border-radius: 5px;
    padding: 20px;
    text-align: left;
    margin-bottom: auto;    

     h1 {
        font-size: 30px;
    }

    &>div {
        display: flex;
    }

    &>div>div {
        flex-grow: 1;
    }

    .green-text {
        font-weight: 700;
    }
`;

export const LikeButton = styled.button`

    color: rgb(125, 125, 125);
    font-size: 60px;
    font-family: Arial, Helvetica, sans-serif;
    margin-top: -30px;
    background-color: rgba(255, 255, 255, 0);
    border: none;
    transition: color 0.3s;


    &.true {
        color: red;
        animation: liking 0.3s ease-out;
    }


`;

