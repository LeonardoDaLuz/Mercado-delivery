import styled from 'styled-components';
import { colorTheme } from '../../../theme';

export const PhotoFrame_ = styled.div`

    background-color: rgb(255, 255, 255);
    flex-shrink: 1;
    flex-grow: 1;
    width: 226px;
    flex-basis: 626px;
    border-radius: 10px;
    overflow: hidden;
    margin-right: 20px;

    @media(max-width: 992px) {
        margin-right: 0px;
    }
`;


export const DesktopView = styled.div`
    @media(max-width: 992px) {
        display: none;
    }
`;

export const MobileView = styled.div`

    @media(min-width: 992px) {
        display: none;
    }
`;