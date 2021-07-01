import styled from 'styled-components';
import { colorTheme } from '../../theme';
import { Row } from "@globalStyleds"
import assets from '../../assets';

export const OfferManager__ = styled.div`
    min-height: 59vh;
    padding-top: 20px;

    label {
        margin-bottom: 10px;
    }
`;

export const Offer_ = styled.div`
    position: relative;
    border: 1px solid ${colorTheme.neutral(200)};
    background-color: ${colorTheme.siteBackground(300)};
    margin: 10px 0px;
    border-radius: 3px;
    padding: 10px;
    padding-right: 30px;

    input{
        width: 100%;
        border: 1px solid ${colorTheme.neutral(200)};
        border-radius: 5px;
    }


    label {
        display: block;
    }

    &>div>div {
        padding: 15px;
        flex: 1 1 250px;
    }
`;

export const ImgInput = styled.div`

    position: relative;
    overflow: hidden;
    border: 1px solid ${colorTheme.neutral(200)};
        border-radius: 5px;
        cursor: pointer;

    &:hover {
        background-color: rgb(0,0,0,0.4);
    }

    &:hover:before {
        content: "";
        position: absolute;
        display: block;
        left: 76px;
        top: 50px;
        background-color: ${colorTheme.primary()};
        width: 50px;
        height: 50px;      
        border-radius: 50%;  
    }

    &:hover:after {
        content: "";
        position: absolute;
        display: block;
        left: 76px;
        top: 50px;
        width: 50px;
        height: 50px;
        background: transparent url(${assets.searchIcon}) no-repeat center;
        background-size: 50%;
        filter: invert(100%);        
    }
`;

