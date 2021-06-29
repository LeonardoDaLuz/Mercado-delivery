import styled from 'styled-components';
import { ButtonOutline } from "@globalStyleds";
import { colorTheme } from '../../../theme';

export const BuyFrameContainer = styled.div`

    position: relative;
    flex-basis: 356px; 
    flex-grow: 1;
    background-color: rgb(255, 255, 255);
    border: 1px solid rgb(164, 164, 164);
    border-radius: 5px;
    padding: 20px;
    text-align: left;
    margin-bottom: auto;    

     h1 {
        font-size: 30px;
        margin-right: 40px;
    }
/*
    &>div {
        display: flex;
    }

    &>div>div {
        flex-grow: 1;
    }*/

    .green-text {
        font-weight: 700;
    }
`;

export const LikeButton = styled.button`

    position: absolute;
    right: 14px;
    top: 0px;
    color: rgb(125, 125, 125);
    font-size: 60px;
    font-family: Arial, Helvetica, sans-serif;
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

export const ButtonIncreaseDecrease = styled(ButtonOutline)`
    color: #212529;
    border: 1px solid #bfc6cc;
    padding: 0.375rem 0.75rem;
    font-size: 1rem;
    line-height: 1.5;
    margin: 0px;

    &:hover {
        color: rgb(255, 255, 255);
        background-color: rgb(132, 141, 146);
        border-color: rgb(150, 140, 125);
    }

`;

export const BotaoVerde = styled.button`
    background-color: rgb(2, 157, 2);
    border: 0px;
    border-radius: 5px;
    color: rgb(255, 255, 255);
    font-size: 16px;
    padding: 10px;
    margin-left: 3px;
    flex: 1 1 1px;
`;

export const BotaoAzul = styled.button`
    background-color: rgb(36, 87, 208);
    border: 0px;
    border-radius: 5px;
    color: rgb(255, 255, 255);
    font-size: 16px;
    flex: 1 1 1px;
    margin-right: 3px;
`;

export const BlocoQuantidade = styled.div`
    flex: 1 1 20px;

    button {
        flex: 0 1 1px;
    }
    input {
        flex: 1 1 20px;
        width: 100%;
        border: 1px solid #ced4da;
        border-left: none;
        border-right: none;
        text-align: center;
        border-radius: 0px;
    }

    button:first-child {
        border-radius: 10px 0px 0px 10px;
    }
    button:last-child {
        border-radius: 0px 10px 10px 0px;
    }
`;

export const BlocoPreco = styled.div`

    text-align: right;
    flex: 1 1 80px;
    margin-left: 10px;
    &>span:nth-child(1) {
        color: rgb(2, 157, 2);
        font-size: 45px;
        font-weight: 700;
        line-height: 40px;
        position: relative;
    }

    &>span:nth-child(1)::before {
        content: "R$";
        color: ${colorTheme.contentText(100)};
        font-size:22px;
        top: 5px;
        left: -25px;
        position: absolute;
        font-weight: 700;
        margin-bottom: -10px;

    }

    b>div {
        display: inline-block;
    }
`;

export const BlocoCalcularFrete = styled.div`
    margin-bottom: 15px;
    background-color: rgb(199, 255, 217);
    margin-top: 10px;
    border-radius: 7px;
    padding: 10px;
`;

