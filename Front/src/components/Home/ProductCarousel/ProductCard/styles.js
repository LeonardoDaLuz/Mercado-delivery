import styled from 'styled-components';
import assets from '@assets';
import { Row } from '@globalStyleds';
import { colorTheme } from '@colorTheme';
import { Link } from 'react-router-dom';

export const ProductLink = styled(Link)`
    width: 100%;
 
    /*background-color: grey;*/
    vertical-align: middle;
    overflow: hidden;
    flex: 1 1 50px;


    img {
        height: 100%;
        margin: 0 auto;
    }
`;

export const ProdutoCard_ = styled.div`


    height: 100%;
    padding: 10px;
    background-color: rgb(45, 48, 49);
    border-color: rgba(202, 188, 168, 0.13);
    padding-bottom: 25px;
    animation: fadein 1s;
    justify-content: space-between !important;
    position: relative;
    display: flex;
    flex-direction: column;
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
        margin: 5px 5px 5px 5px;
        flex: 0 0 32px;

    }



`;

export const Price = styled.div`
    flex: 0 0 32px;
    text-align: right;
    margin: -0px 15px 15px 0pc;
    
    &>div {
        font-size: 24px;
        color: ${colorTheme.primary};
        font-weight: 700;
        margin-bottom: -10px;
    }
    &>div:before {
        content: "R$";
        font-size: 14px;
        color: ${colorTheme.neutral};
        font-weight: 700;
        display: inline-block;
        transform: translate(-2px,-7px);
    }

`;
export const OffPrice = styled.div`
    flex: 0 0 32px;
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

    &>div:last-child:before {
        content: "R$";
        font-size: 14px;
        color: ${colorTheme.neutral};
        position: absolute;

        transform: translate(-17px,4px);
    }
`;


export const AdicionarRemoverDoCarrinho = styled.div`

    flex: 0 0 32px;
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

export const OfferTag = styled.div`
    background: transparent url(${assets.offerTag2}) no-repeat center left;
    background-size: contain;
    width: 55px;
    height: 80px;
    position: absolute;
   left: -18px;
   top: -14px;
   padding: 10px 10px 10px 10px;
   color: white;
    font-family: Arial, Helvetica, sans-serif;
   font-weight: 800;
   -webkit-text-stroke:1.5px black;
  -webkit-text-fill-color:white;




`;