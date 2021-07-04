import styled, { keyframes, css } from 'styled-components';
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


const LoadingWheelAnimation = keyframes`
  0% { transform: rotate(0deg)};
  100% { transform: rotate(360deg) };
`;

export const ImgInput = styled.div`

    position: relative;
    overflow: hidden;
    border: 1px solid ${colorTheme.neutral(200)};
    border-radius: 5px;
    cursor: pointer;


    &:hover:before {
        content: "";
        position: absolute;
        display: block;
        left: 0px;
        top: 0px;
        background-color: rgb(0,0,0,0.4);
        width: 100%;
        height: 100%;
        pointer-events: none;      

    }

    &:not([data-status="uploading"]):hover:after {
        content: "";
        position: absolute;
        display: block;
        left: 50%;
        top: 50%;
        transform: translate(-50%,-50%);
        width: 50px;
        height: 50px;
        border-radius: 50%;  
        background:  ${colorTheme.primary()} url(${assets.searchIcon}) no-repeat center;
        background-size: 50%;   
        pointer-events: none;  
    }

    
    &[data-status="uploading"]:after {
        content: ""; 
        display: block;
        left: calc(50% - 30px);
        top: calc(50% - 30px);
        position: absolute;
        border: 12px solid #e5e5e5;
        border-radius: 50%;
        border-top: 12px solid #3498db;
        width: 60px;
        height: 60px;
        animation: ${LoadingWheelAnimation}  2s linear infinite;
    }
`;


/*
const LoadIndicatorAnimation = keyframes`
  0% { transform: rotate(0deg)};
  100% { transform: rotate(360deg) };
`;

export const LoadIndicator = styled.div`
    border: 1px solid #686868;
  width: 300px;
  height: 200px;
  position: relative;
  margin: 0 auto 25px auto;

  &::before {
        content: "";
        background-color: black;
        opacity: 0.1;
        position: absolute;
        width: 100%;
        height: 100%;
      }


  &:after {
    content: "";
    display: block;
    left: calc(50% - 60px);
    top: calc(50% - 60px);
    position: absolute;
    border: 16px solid #e5e5e5;
    border-radius: 50%;
    border-top: 16px solid #3498db;
    width: 120px;
    height: 120px;
    animation: ${LoadIndicatorAnimation}  2s linear infinite;
  }

`;
*/