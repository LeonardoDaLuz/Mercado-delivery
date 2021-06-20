import styled from 'styled-components';
import { Container } from '@globalStyleds';

export const OfertasDoDiaContainer = styled(Container)`

margin-top: 15px;
margin-bottom: 15px;
.slick-arrow {
    top: 50%;
    z-index: 3;
    height: 50px;
    width: 50px;
    background-color: green;
    border-radius: 50px;
    opacity: 0.8;
    transform: translateY(-100%);
}

.slick-prev {
    left: -60px;
}

.slick-next {
    right: -60px;
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

.slick-track {
    height: 350px;
}

.slick-slide>div {
    height: 100%;
}

.slick-list {
    border-left: 1px solid rgba(0, 0, 0, 0.075);
    border-right: 1px solid rgba(0, 0, 0, 0.075);
    border-radius: 0.25rem;
}

`;