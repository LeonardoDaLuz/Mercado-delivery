import styled from 'styled-components';
import assets from '@assets';
import { Link } from "react-router-dom";

export const Teste = styled.div`

.vermelho {
    background-color: red;
    flex: 1 1 1px;
}

.azul {
    background-color: blue;
    flex: 1 1 50px;
    display: flex;
    flex-wrap: wrap;
}

.verde {
    background-color: green;
    flex: 1 1 50px;
}

input {
    width: 80%;
    flex-grow: 1;

}

button {

    flex-grow: 1;

}

`;

export const Header = styled.header`
    position: sticky;
    top: 0;
    background-color: white;
    padding: 5px 0px;
    z-index: 100;

    @media(max-width: 992px) {
        padding: 0;
    }
`;

export const ContainerLg = styled.div`
    width: 100%;
    margin-right: auto;
    margin-left: auto;
    box-sizing: border-box;

    @media (min-width: 1200px) {
        max-width: 1140px;
    }
`;


export const NavbarLogo = styled(Link)`
    flex: 0 0 50px;
    height: 48px;
    background-image: url(${assets.logoAlpha});
    background-repeat: no-repeat;
    background-position: center;  

    @media screen and (min-width: 992px) {
 
        flex-basis: 289px;
        background-image: url(${assets.LogoExtended48px});
    
    }
`


export const SearchBar = styled.form`
    flex: 1 1 50px;
    display: flex;
    align-items: center;

   input {
       flex: 1 1 1px;   
        width: 80%;
        height: calc(1.5em + 0.75rem + 2px);
        padding: 0.375rem 0.75rem;
        font-size: 1rem;
        font-weight: 400;
        line-height: 1.5;
        color: #495057;
        background-color: #fff;
        background-clip: padding-box;
        border: 1px solid #ced4da;
        border-radius: 0.25rem;
   }
`;




export const Sandwich = styled.button`


    flex: 0 0 50px;
    width: 48px;
    padding: 0px;
    display: none;
    background: transparent url(${assets.sandwich_menu}) center center / contain no-repeat;
    border: none;
    padding-right: 0px;

    @media screen and (max-width: 992px) {
        display: inline-block;
    }

`;

export const MenuPrincipal = styled.ul`
    flex: 0 0 35px;
    display: flex;  
    flex-wrap: none;
    padding: 0px;
    margin: 0px 8px 0px 0px;

    list-style-type: none;
    align-items: center;

    li {
        white-space: nowrap;
        list-style-type: none;
        padding: 0 7px;
    }

    @media screen and (max-width: 992px) {       
        li {
            display: none;
        }
    }
`;


export const Carrinho = styled.a`
    flex: 1 1 32px;
    position: relative;
    margin-right: 3px;
    display: block;
    width: 35px;
    height: 50px;
    background: transparent url(${assets.carrinho}) center center / auto no-repeat;

    .quantidade {
        position: absolute;
        top: 2px;
        right: -10px;
        background-color: red;
        color: white;
        padding: 1px 5px 0px 3px;
        border-radius: 20px;
        font-size: 12px;
    }

    .custo {
        position: absolute;
        bottom: -22px;
        left:  50%;
        background-color: rgb(125, 125, 125);
        color: white;
        padding: 1px 5px 0px 3px;

        border-radius: 20px;
        font-size: 12px;
        white-space: nowrap;
        transform: translateX(-50%);
        border: 4px solid white;

    }

    .custo:before {
        content: "";
        position: absolute;
        top: -5px;
        left: 50%;
        width: 0; 
        height: 0; 
        border-left: 5px solid transparent;
        border-right: 5px solid transparent;        
        border-bottom: 5px solid rgb(125, 125, 125);
    }    
`;

