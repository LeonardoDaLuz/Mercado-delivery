import styled from 'styled-components';
import { colorTheme } from '../../../../theme';
import { Button } from '../../../../globalStyleds';

export const Flex = styled.div`
    display: flex;
`;
export const ImageViewer = styled.div`

    position: relative;
    flex: 1 3 100px;
    margin-bottom: 5px;
    img {
        width: 100%;
    }   
`;
export const ImageSelector = styled.div`
    width: 100px;
    margin-top: 5px;
    margin-left: 5px;

    &>div {
        box-sizing: border-box;
        width: calc(100% - 10px);
        min-height: 86px;
        border: 1px solid ${colorTheme.neutral(250)};
        margin: 5px;
        border-radius: 5px;
        overflow: hidden;
    }
   &>div>img {

        box-sizing: border-box;
        width: 100%;

    }

    &>div.selected,  &>div:hover {
        border: 2px solid ${colorTheme.primary(400)};
        cursor: pointer;
    }

`;

export const AddImgButton = styled(Button)`
    width: calc(100% - 10px);
    margin: 5px;
    height: 86px;
    border: none;
    border-radius: 5px;
    background-color: ${colorTheme.primary};
    position: relative;

    &:before, &:after {
        content: "";
        display: block;
        position: absolute;
        transform: translate(-50%,-50%);
        left: 50%;
        top: 50%;
        background-color: white;
        z-index: 5;
    }

    &:before {     
        width: 50%;
        height: 10px;  
    }

    &:after {      
        width: 10px;
        height: 40px;
    }

`;
export const ImgButton = styled.div`
    position: relative;
`;

export const DeleteImage = styled.button`
    background-color: #ff1111;
    position: absolute;
    width: 40px;
    height: 40px;
    right: 0px;
    top: 0px;
    border: none;
    border-radius: 50%;
    padding: 0px;
    margin: 0px;
    z-index: 1;

    &::after {

      content:"";
      background-color: white;
      display: block;
      width: 63%;
      height: 16%;
      transform: rotate(45deg);
      position: absolute;
      top: 40%;
      left: 19.5%;
    }
    &::before {

      content:"";
      background-color: white;
      display: block;
      position: absolute;
      width: 63%;
      height: 16%;
      top: 40%;
      left: 19.5%;
      transform: rotate(-45deg);
    }
`;

export const ImagePlaceholder = styled.div`
    text-align: center;
    vertical-align: middle;
    line-height: 100px;
`;