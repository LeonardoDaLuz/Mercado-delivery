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

    text-align: right;

    &>span:nth-child(1) {
        color: rgb(2, 157, 2);
        font-size: 45px;
        font-weight: 700;
        line-height: 40px;
    }

    &>span:nth-child(1)::before {
        color: rgb(2, 157, 2);
        font-size: 45px;
        font-weight: 700;
        margin-bottom: -10px;
    }
`;

export const BlocoCalcularFrete = styled.div`
    white-space: nowrap;
    margin-bottom: 15px;
    background-color: rgb(199, 255, 217);
    margin-top: 10px;
    border-radius: 7px;
    padding: 10px;
`;

