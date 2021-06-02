import styled from 'styled-components';

export const SlickLightBoxContainer = styled.div`

    position: fixed;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;

    z-index: 300;

    img {

            max-height: 90vh;

    }

    .slick-dots {
        height: 50px;
        top: 0px;
        position: static;
        margin: 14px 0px 14px 0px;
    }

    .slick-dots li {
        margin: 7px;
    }


    .slick-slide, .slick-track, .slick-list, .slick-slider, .slick-slide>div, .slick-dots {
        pointer-events: none;
    }

    .slick-slide img {
        max-width: 100%;
        display: inline-block;
        pointer-events: all;
    }
    .slick-dots li button {
        background-color: rgb(152, 152, 152);
        border-radius: 20px;
        width: 15px;
        height: 15px;
    }

    .slick-dots li.slick-active button {
        background-color: rgb(1, 157, 12);
    }

    .slick-dots li button:before {
        display: none;
    }

    .slick-arrow {
        top: 50%;
        z-index: 3;
        height: 50px;
        width: 50px;
        background-color: green;
        border-radius: 50px;
        opacity: 0.8;
        transform: translateY(-100%);
        pointer-events: all;
    }

    .slick-prev {
        left: 50px;
    }

    .slick-next {
        right: 50px;
    }

    .slick-arrow:before, .slick-arrow:after {
        content: '';
        background-color: white;
        position: absolute;
        width: 20px;
        height: 7px;
        opacity: 1;
    }

    .slick-prev:before {
        left: 12px;
        top: 27px;
        transform: rotate(45deg);
    }

    .slick-prev:after {
        left: 12px;
        top: 17px;
        transform: rotate(-45deg);
    }

    .slick-next:before {
        right: 12px;
        top: 27px;
        transform: rotate(-45deg);
    }

    .slick-next:after {
        right: 12px;
        top: 17px;
        transform: rotate(45deg);
    }

    .slick-arrow:active, .slick-arrow:focus {
        background-color: green;
        opacity: 0.8;
    }

    .slick-arrow:hover {
        background-color: green;
        opacity: 1;
    }
`;

export const Center = styled.div`
    position: relative;
    height: 100%;
    text-align: center;
    line-height: 100vh;
    vertical-align: middle;
    pointer-events: none;
`;

export const BlackBackground = styled.div`
    background-color: rgba(0,0,0,0.8);
    z-index: -1;

    width: 100%;
    height: 100%;
    position: absolute;
    backdrop-filter: blur(3px);

`;


export const CloseButton = styled.button`
    position: absolute;
    right: 50px;
    top: 40px;
    background-color: transparent;
    width: 45px;
    height: 45px;
    border: none;
    &:before {
        content: "";
        display: block;
        position: absolute;
        left:0%;
        top: 40%;
        width: 100%;
        height: 20%;
        background-color: white;
        transform: rotate(45deg);
    }
    &:after {
        content: "";
        display: block;
        position: absolute;
        left:0px;
        top: 40%;
        width: 100%;
        height: 20%;
        background-color: white;
        transform: rotate(-45deg);
    }
`;