import styled from 'styled-components';
import { colorTheme } from '../../theme';


export const QuadroComprarContainer = styled.div`

    flex-basis: 426px;
    flex-grow: 1;
    background-color: rgb(255, 255, 255);
    border: 1px solid rgb(164, 164, 164);
    border-radius: 5px;
    padding: 20px;
    text-align: left;
    margin-bottom: auto;    

    textarea {
        font-size: 20px;
        width: 100%;
        border: none;
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
    border: 1px solid #bfc6cc;
    padding: 0.375rem 0.75rem;
    font-size: 1rem;
    line-height: 1.5;
    border-radius: 0.25rem;
    transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;

    cursor: pointer;
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
    flex-grow: 1;
    padding: 10px;
`;

export const BotaoAzul = styled.button`
    background-color: rgb(36, 87, 208);
    border: 0px;
    border-radius: 5px;
    color: rgb(255, 255, 255);
    font-size: 16px;
    flex-grow: 1;
`;

export const BlocoPreco = styled.div`
    flex: 1;
    padding: 0 15px 0 15px;
    position: relative;

    &>input {
        width: 100%;
        color: rgb(2, 157, 2);
        font-size: 45px;
        font-weight: 700;
        line-height: 20px;
        padding-left: 40px;
        text-align: right;
        height: 45px;
        border: none;
        margin-top: -5px;
    }


    &>::after {
        content: "R$";
        display: block;
        position: absolute;
        top: 25px;
        left: 25px;
        font-weight: 700;
        font-size: 20px;
        color: ${colorTheme.complementaryText};

    }
`;


