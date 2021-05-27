import styled, { keyframes, css } from 'styled-components';

export const GerenciarImagensCarousel = styled.div`
    ul {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 0px;
    }
    padding-top: 15px;
`;

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


export const ImgCardLi = styled.li`
    position: relative;
    margin: 10px;
    border: 1px solid #686868;

    &>div {
        

    }

    img {
        max-height: 500px;
        max-width: 100%;
        min-height: 200px;
    }

    ${props => props.waiting && css`
      &::before {
        content: "";
        background-color: black;
        opacity: 0.5;
        position: absolute;
        width: 100%;
        height: 100%;
      }

      &::after {
        content: "";
        border: 16px solid #e5e5e5;
        border-radius: 50%;
        border-top: 16px solid #3498db;
        width: 100px;
        height: 100px;
        position: absolute;
        left: calc(50% - 50px);
        top: calc(50% - 50px);
        animation: ${LoadIndicatorAnimation}  2s linear infinite;
      }
    `}
`;

export const DeleteImage = styled.button`
    background-color: #ff1111;
    position: absolute;
    width: 30px;
    height: 30px;
    right: 0px;
    top: 0px;
    border: none;
    border-radius: 50%;

    &::after {

      content:"";
      background-color: white;
      display: block;
      width: 19px;
      height: 5px;
      transform: rotate(45deg);
      position: absolute;
      top: 12px;
    }
    &::before {

      content:"";
      background-color: white;
      display: block;
      position: absolute;
      width: 19px;
      height: 5px;
      top: 12px;
      transform: rotate(-45deg);
    }
`;

