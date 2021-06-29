import styled from 'styled-components';
import { colorTheme } from '../../../theme';
import { ButtonOutline, ButtonFlat, Col } from '@globalStyleds';

export const BuyFrameContainer = styled.div`

flex-basis: 356px; 
    flex-grow: 1;
    background-color: ${colorTheme.contentBackground};
    border: 1px solid ${colorTheme.contentBackground(600)};
    border-radius: 5px;
    padding: 20px;
    text-align: left;
    margin-bottom: auto;    

    textarea {
        font-size: 28px;
        width: 100%;
        border: none;
    }
`;

export const StockBlock = styled(Col)`
    flex-basis: 150px;
    flex-grow: 0;
`;

export const ButtonIncreaseDecrease = styled(ButtonOutline)`
    color: #212529;
    border: 1px solid #bfc6cc;
    padding: 0.375rem 0.75rem;
    font-size: 1rem;
    line-height: 1.5;
    margin: 0px;

    &:hover {
        color: rgb(255, 255, 255);
        background-color: rgb(132, 141, 146);
        border-color: rgb(150, 140, 125);
    }

`;

export const QuantityBlock = styled.div`
    flex: 1 1 140px;

    button {
        flex: 0 1 1px;
    }
    input {
        flex: 1 1 20px;
        width: 100%;
        border: 1px solid #ced4da;
        border-left: none;
        border-right: none;
        text-align: center;
        border-radius: 0px;
    }

    button:first-child {
        border-radius: 10px 0px 0px 10px;
    }
    button:last-child {
        border-radius: 0px 10px 10px 0px;
    }
`;


export const ButtonOutline_ = styled(ButtonOutline)`

    font-weight: 400;
    color: ${colorTheme.contentText};
    border: 1px solid ${colorTheme.contentBackground(800)};
    margin: 0;

    &:hover {
        color: rgb(255, 255, 255);
        background-color: ${colorTheme.contentBackground(800)};
        border-color: ${colorTheme.contentBackground(800)};
    }
`;

export const PriceBlock = styled.div`
    flex: 1 1 230px;
    padding: 0 15px 0 15px;
    position: relative;

    &>input {
        width: 100%;
        color: ${colorTheme.primary};
        font-size: 40px;
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
        color: ${colorTheme.contentText(0)};

    }
`;

export const Offer = styled.div`
    label {
        display: block;
    }
`;

export const OfferBody = styled.div`
    background-color: ${colorTheme.secondary(150)};
    border-radius: 10px;
    padding: 10px;
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 20px;

    &>div {
        flex: 1 1 180px;
        box-sizing: border-box;
        padding: 5px;    
        position: relative;
        overflow: hidden;
    }


    input, select {
        display: block;
        border: 0px solid #e2e2e2;
        border-radius: 10px;
        padding: 8px;
        box-sizing: border-box;
        width: 100%;
    }

    button {
        flex: 1 1 1px;
        width: 50%;
        box-sizing: border-box;

    }
`;

export const DraftStatus = styled.div`
    text-align: center;
    margin-top: 8px;
`;