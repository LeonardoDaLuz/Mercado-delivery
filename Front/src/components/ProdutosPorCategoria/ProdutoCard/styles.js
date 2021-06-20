import styled from 'styled-components';
import assets from '@assets';
import { Row } from '@globalStyleds';
import { colorTheme } from '../../../theme';
import { Link } from 'react-router-dom';

export const ProductLink = styled(Link)`
    width: 100%;
    height: 200px;
    /*background-color: grey;*/
    vertical-align: middle;
    line-height: 200px;

    img {
        height: 100%;
        max-width: 100%;
        display: block;
        margin: 0 auto;
        max-height: 200px;
    }
`;

export const ProdutoCard_ = styled.li`

    flex: 0 0 25%;
    max-width: 25%;
    padding: 10px;
    background-color: white;
    border-color: rgba(202, 188, 168, 0.13);
    padding-bottom: 25px;
    animation: fadein 1s;
    justify-content: space-between !important;
    position: relative;
    display: flex;
    flex-direction: column;
    word-wrap: break-word;
    background-color: white;
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

    }


`;

export const Price = styled.div`
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
    text-align: right;
    margin: -0px 15px 15px 0pc;
    flex: 1 1 100px;

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