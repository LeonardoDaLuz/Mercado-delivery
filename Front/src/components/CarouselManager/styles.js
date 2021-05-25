import styled, { keyframes } from 'styled-components';

export const GerenciarImagensCarousel = styled.div`
    ul {
        display: flex;
        flex-direction: column;
        align-items: center;
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
    }
`;

export const DeleteImage = styled.button`
    background-color: #ff1111;
    position: absolute;
    width: 30px;
    height: 30px;
    right: 0px;
    top: 0px;
`;
const LoadIndicatorAnimation = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

export const LoadIndicator = styled.div`
border: 16px solid #e5e5e5;
  border-radius: 50%;
  border-top: 16px solid #3498db;
  width: 120px;
  height: 120px;
  animation: ${LoadIndicatorAnimation}  2s linear infinite;
  margin: 20px auto;
`;

