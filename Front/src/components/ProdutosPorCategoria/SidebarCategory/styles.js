import styled from 'styled-components';


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