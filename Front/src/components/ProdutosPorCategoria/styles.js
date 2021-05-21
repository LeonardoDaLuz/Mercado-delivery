import styled from 'styled-components';
import assets from '@assets';
import { Row } from '@globalStyleds';

export const Container = styled.section`
    width: 100%;
    max-width: 1140px;
    min-height: 1000px;
    padding-left: 0px 8px;
    margin-left: auto;
    margin-right: auto;
    display: flex;
    align-items: flex-start;
`;

export const ListaDeProdutos = styled.ul.attrs({
    className: "col-9"
})`
    display: flex;
    /*width: 100%;
    max-width: 75%;*/
    flex-wrap: wrap;
    padding: 0px;
    
    img {
        width: 100%;
    }
`;

export const ProdutoCard_ = styled.li.attrs({
    className: "col-3"
})`
    
    background-color: rgb(45, 48, 49);
    border-color: rgba(202, 188, 168, 0.13);
    padding-bottom: 25px;
    animation: fadein 1s;
    justify-content: space-between !important;
    position: relative;
    display: flex;
    flex-direction: column;
    min-width: 0;
    word-wrap: break-word;
    background-color: #fff;
    background-clip: border-box;
    border: 1px solid rgba(0, 0, 0, 0.125);
    border-radius: 0.25rem;

    @keyframes fadein {
        from { opacity: 0; }
        to   { opacity: 1; }
    }

    h5 {
        font-size: 14px;
        margin-bottom: 5px;
    }
`;

export const Preco = styled.div`
    text-align: right;
    margin: -0px 15px 15px 0pc;

    &>div:first-child {
        color: grey;
        text-decoration: line-through;
        font-size: 14px;
        line-height: 12px;
    }

    &>div:last-child {
        font-size: 24px;
        color: rgb(2, 157, 2);
        font-weight: 700;
        margin-bottom: -10px;
    }
`;

export const AdicionarRemoverDoCarrinho = styled.div`
    display: flex;
    justify-content: center;

    button {
        border: 0px solid;
        color: white;
        font-size: 24px;
        width: 55px;
        text-align: center;
    }

    &>button:last-child {
        background-color: rgb(2, 204, 59);
        border-radius: 0px 15px 15px 0px;
    }

    &>button:first-child {
        background-color: rgb(137, 137, 137);
        border-radius: 15px 0px 0px 15px;
    }

    &>div {
        width: 55px;
        text-align: center;
        vertical-align: middle;
        line-height: 45px;
        border: 1px solid rgb(196, 196, 196);
    }

`;

export const CategoriasAside = styled.aside`

    padding: 20px 20px 25px 0px;
    flex: 0 0 25%;
    max-width: 25%;
    width: 100%;

    .lista {
        position: relative;
        background-color: rgb(235, 235, 235);
        margin-top: 20px;
        border-radius: 5px;
        padding: 10px;
    }

    a {
        color: rgb(64, 64, 64);
    }

    ul {
        padding-left: 0px;
    }
`;

export const BreadcumbList = styled.nav`

    display: inline-block;
    font-weight: 700;
    font-size: 14px;

    ul {
    margin-bottom: 5px;
    }

    li {
        display: inline;
        margin: 0 5px 0 5px;
    }

    li a {
        color: rgb(1, 155, 1);
    }

    li:not(:first-child)::before {
        content: ">";
        font-weight: 1000;
        left: -5px;
        position: relative;
        color: rgb(0, 0, 0);
    }
`;

export const FaixaDePrecoForm = styled.form`
 
        display: flex;
    margin-bottom: 20px;

    &>input {
        flex: 1;
        width: 100%;
        border-radius: 5px;
        border: 1px solid rgb(172, 172, 172);
    }

    &>button {
    background-color: green;
    color: white;
    border: none;
    padding: 0px 20px;
    border-radius: 5px;
    margin-left: 5px;
    }
`;

export const OrdemSelectForm = styled.form`


    select {
        width: 100%;
        border-radius: 5px;
        border: 1px solid rgb(172, 172, 172);
    }

    



`;