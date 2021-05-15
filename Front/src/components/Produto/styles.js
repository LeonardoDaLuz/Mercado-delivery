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

export const Quantidade = styled.div`

    flex-basis: 150px;
    flex-grow: 0!important;
`;

export const BotaoOutline = styled.div`
display: inline-block;
    font-weight: 400;
    color: #212529;
    text-align: center;
    vertical-align: middle;
    -webkit-user-select: none;
    user-select: none;
    background-color: transparent;
    border: 1px solid transparent;
    padding: 0.375rem 0.75rem;
    font-size: 1rem;
    line-height: 1.5;
    border-radius: 0.25rem;
    transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
    box-shadow: rgb(132 141 146 / 50%) 0px 0px 0px 0.2rem;
    
    &:hover {
        color: rgb(255, 255, 255);
        background-color: rgb(132, 141, 146);
        border-color: rgb(150, 140, 125);
    }

`;


