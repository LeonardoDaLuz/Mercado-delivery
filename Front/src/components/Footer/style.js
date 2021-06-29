import styled from 'styled-components';
import { Col } from '@globalStyleds';
import assets from '../../assets';

export const Footer_ = styled.footer`

    background-color: rgb(13, 173, 13);
    color: white;
    padding-top: 25px;
    margin-top: 30px;

    img {
        padding: 25px;
        width: 100%;
    
        box-sizing: border-box;
    }

    .rodape {
        text-align: center;
        background-color: rgb(0, 115, 0);
        margin-top: 25px;
        padding: 10px 0px;
    }
`;

export const FooterLogo = styled(Col)`

    background: transparent url(${assets.mercado_delivery_monochrome_white_logo}) no-repeat center;
    background-size: contain;
`;