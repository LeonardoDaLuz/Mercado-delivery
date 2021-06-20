import styled from 'styled-components';
import { colorTheme } from '../../../theme';

export const BreadcumbNav = styled.nav`
    
    display: inline-block;
    font-weight: 700;
    font-size: 14px;
    flex: 1 1 500px;
    margin: 10px 10px;

    .teste {
        font-size: 16px;
        word-wrap: initial;
    }

     ol {
        padding: 0;
        margin: -2px 0px 0px 0px;
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
        color: rgb(0, 0, 0);
    }
`;

export const SelectionCategory = styled.select`
    border: 1.5px solid ${colorTheme.primary()};
    color: ${colorTheme.primary(560)};
    border-radius: 10px;
    padding: 2px;
    font-family: 'open sans';
    font-weight: 600;
    max-width: 150px;

    &:focus {
        outline: none;

    }

    option {
        background-color: ${colorTheme.primary};
        color: ${colorTheme.primaryText};
        padding: 50px;
        font-family: 'open sans';
        font-weight: 600;

    }
`;