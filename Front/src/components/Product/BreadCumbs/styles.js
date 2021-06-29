import styled from 'styled-components';
import { colorTheme } from '../../../theme';

export const BreadcumbNav = styled.nav`
    
    flex: 1 1 1px;
    font-weight: 700;
    font-size: 14px;

    margin: 10px 10px;
    .teste {
        font-size: 16px;
        word-wrap: initial;
    }

     ol {
        padding: 0;
        margin: 0px;
    }

     li {
        display: inline-block;
        margin: 0 5px 0 5px;
        color: rgb(1, 155, 1);
    }

    a {
        color: rgb(1, 155, 1);
    }

     li:not(:last-child)::after {
        content: ">";
        font-weight: 1000;
        right: -5px;
        top: 1px;
        position: relative;
        color: ${colorTheme.neutral(600)};
    }
`;