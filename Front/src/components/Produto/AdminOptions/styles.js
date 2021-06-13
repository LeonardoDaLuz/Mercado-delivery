import styled from "styled-components";
import { ButtonFlat } from "../../../globalStyleds";
import { colorTheme } from "../../../theme";
import { Link } from "react-router-dom";


export const AdminOptions_ = styled.div`
    flex: 0 0 225px;
    display: flex;

    &>* {
        flex: 1 1 100px;
    }
`;

export const EditButton = styled(Link)`
    background-color: ${colorTheme.primary(550)};
    border-color:  ${colorTheme.primary(550)};
    border-radius: 5px;
    padding: 5px 8px;
    margin: 8px 5px;
    height: 28px;
    line-height: 16px;
    text-align: center;

    img {
        float: left;
        height: 100%;
        filter: invert(100%);
    }

    &, &:hover, &:focus, &:active {
     text-decoration: none;
     color: ${colorTheme.primaryText};
    }
`;

export const DeleteButton = styled(EditButton)`
    background-color: ${colorTheme.warning};
    border-color:  ${colorTheme.warning};
`;

