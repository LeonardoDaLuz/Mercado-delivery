import styled from 'styled-components';
import assets from '@assets';

export const Header = styled.header`
    position: sticky;
    top: 0;
    background-color: white;
    padding: 10px 0px;
    z-index: 100;
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

export const NavbarLogo = styled.div`
    flex: 0;
    flex-basis: 64px;
    height: 48px;
    background-image: url(${assets.logoAlpha});
    background-repeat: no-repeat;
    background-position: center;  

    @media screen and (min-width: 992px) {
 
        flex-basis: 289px;
        background-image: url(${assets.LogoExtended48px});
    
    }
`

export const SearchBar = styled.div`
    flex-grow: 1;
    display: flex;
    align-items: center;

   input {
       flex-grow: 1;
       display: block;
        width: 100%;
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
    display: inline-block;
    flex-grow: 0;
    width: 48px;
    display: none;
    background: transparent url(${assets.sandwich_menu}) center center / contain no-repeat;
    border: none;
    padding-right: 0px;

    @media screen and (max-width: 992px) {
        display: inline-block;
    }

`;


export const Carrinho = styled.a`

    position: relative;
    margin-right: 3px;
    
    .quantidade {
        position: absolute;
        top: -15px;
        right: -10px;
        background-color: red;
        color: white;
        padding: 1px 5px 0px 3px;
        border-radius: 20px;
        font-size: 12px;
    }

    .custo {
        position: absolute;
        bottom: -35px;
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