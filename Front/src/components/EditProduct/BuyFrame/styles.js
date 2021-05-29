import styled from 'styled-components';
import { colorTheme } from '../../../theme';
import { ButtonOutline, ButtonFlat, Col } from '@globalStyleds';

export const BuyFrameContainer = styled.div`

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

export const StockBlock = styled(Col)`
    flex-basis: 150px;
    flex-grow: 0;
`;
export const ButtonOutline_ = styled(ButtonOutline)`

    font-weight: 400;
    color: #212529;
    border: 1px solid #bfc6cc;
    margin: 0;

    &:hover {
        color: rgb(255, 255, 255);
        background-color: rgb(132, 141, 146);
        border-color: rgb(150, 140, 125);
    }
`;

export const DiscartButton = styled(ButtonFlat)`
    background-color: rgb(2, 157, 2);
    border: 0px;
    border-radius: 5px;
    color: rgb(255, 255, 255);
    font-size: 16px;
    flex-grow: 1;
    padding: 10px;
`;

export const SaveButton = styled(ButtonFlat)`
    background-color: rgb(36, 87, 208);
    border: 0px;
    border-radius: 5px;
    color: rgb(255, 255, 255);
    font-size: 16px;
    flex-grow: 1;
`;

export const PriceBlock = styled.div`
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

export const Offer = styled.div`
    label {
        display: block;
    }
`;

export const OfferBody = styled.div`
    background-color: ${colorTheme.primary(100)};
    border-radius: 10px;
    padding: 10px;
    display: flex;
    flex-wrap: wrap;

    &>div, &>button {
        flex: 1 1 200px;
        margin: 5px;
    }

    &>button {

    }

    input, select {
        border: 1px solid #e2e2e2;
        border-radius: 10px;
        padding: 10px;
        width: 100%;
    }

    button {
        width: 49%;
        box-sizing: border-box;

    }
`;