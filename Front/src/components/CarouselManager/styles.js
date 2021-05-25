import styled from 'styled-components';

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