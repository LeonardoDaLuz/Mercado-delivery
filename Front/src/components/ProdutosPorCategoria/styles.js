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