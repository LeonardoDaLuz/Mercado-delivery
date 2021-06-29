import styled from 'styled-components';

export const MobileGalleryContainer = styled.div`

.slick-slide img {
    max-width: 100%;
    margin: 10px;
    display: inline-block;
}

.slick-arrow {
    top: 50%;
    z-index: 3;
    height: 28px;
    width: 28px;
    background-color: green;
    border-radius: 50px;
    opacity: 0.8;
    transform: translateY(-100%);
}

.slick-prev {
    left: 10px;
}

.slick-next {
    right: 10px;
}

.slick-arrow:before, .slick-arrow:after {
    content: '';
    background-color: white;
    position: absolute;
    width: 40%;
    height: 14%;
    opacity: 1;
}

.slick-prev:before {
    left: 24%;
    top: 54%;
    transform: rotate(45deg);
}

.slick-prev:after {
    left: 24%;
    top: 34%;
    transform: rotate(-45deg);
}

.slick-next:before {
    right: 24%;
    top: 54%;
    transform: rotate(-45deg);
}

.slick-next:after {
    right: 24%;
    top: 34%;
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