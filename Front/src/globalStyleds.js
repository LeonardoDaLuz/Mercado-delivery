import styled, { createGlobalStyle } from 'styled-components';
import { colorTheme } from './theme';

export const GlobalStyle = createGlobalStyle`
    body {
        background-color: ${colorTheme.siteBackground(500)};
        min-height: 100%;
    }

    .noscroll {
        position: fixed!important;
    }

    .navbar-logo {
        flex: 0;
        flex-basis: 64px;
        height: 48px;
        background-image: url('/src/assets/png/LogoAlpha48px.png');
        background-repeat: no-repeat;
        background-position: center;  

    }

    .c-px-3>* {
        margin-left: 1rem;
        margin-right: 1rem;
    }

    .c-flex-grow-1>* {
        flex-grow: 1;

    }

    ul {
    list-style-type: none;
}

    @media screen and (min-width: 992px) {
        .navbar-logo {
            flex-basis: 289px;
            background-image: url('/src/assets/png/LogoExtended48px.png');
        }
    }
`;

//Div especial utilitária
export const Div = styled.div`
   ${({ ChildrenFlexGrow }) => ChildrenFlexGrow && `
        &>* {
            flex: 1 1 0%;
        }
   `}
`;
    

export const CenterContainer = styled.div`
    margin: 0 auto;
    width: 100%;
    max-width:1000px;
`;

export const Row = styled(Div)`
    display: flex;    
    flex-wrap: wrap;
    justify-content: ${props => (props.justify === undefined ? 'flex-start' : props.justify)};
`;

export const Col = styled.div`
    flex-grow: 1;
`;

export const Col3 = styled.div`
    flex: 0 0 25%;
    max-width: 25%;
`;


export const ButtonFlat = styled.button`

    color: ${({ Color = 'white' }) => Color};
    background-color: ${({ bgColor = '#32b112' }) => bgColor};
    border: 1px solid ${({ bgColor = '#32b112' }) => bgColor};
    border-radius: 0.25rem;
    display: inline-block;
    text-align: center;
    vertical-align: middle;
    padding: 0.375rem 0.75rem;
    margin: 3px 3px;
    transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;

    &:active {
        filter: brightness(85%);

    }

    &:disabled {
        opacity: 0.3!important;
    }
`;

export const ButtonOutline = styled.button`
    background-color: transparent;
    color: rgb(63, 223, 99);
    cursor: pointer;
    border-radius: 0.25rem;
    display: inline-block;
    text-align: center;
    vertical-align: middle;
    border: 1px solid rgb(63, 223, 99);
    padding: 0.375rem 0.75rem;
    margin: 3px 3px;
    transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;

    &:hover {
        color: #212529;
        text-decoration: none;
        color: rgb(255, 255, 255);
        text-decoration-color: initial;
        color: #fff;
        background-color: #28a745;
        border-color: #28a745;
    }

    &:active {
        color: rgb(255, 255, 255);
        background-color: rgb(56, 194, 87);
        border-color: rgb(63, 223, 99);
    }
`;

export const HorizontalFlexList = styled.ul`
    display: flex;
    align-items: center;
    margin: 0px;
    list-style-type: none;
    padding: 0px 10px;

    li {
        flex-grow: 1;
        margin: 3px 10px; 
        list-style-type: none;
    }
`;

export const HorizontalFlexList_Lg = styled(HorizontalFlexList)`

    @media screen and (max-width: 992px) {       
        li {
            display: none;
        }
    }
`;

export const Input = styled.input.attrs({
    type: "text"
})`

`;
