import styled from "styled-components";
import { Container } from "../../globalStyleds";
import { colorTheme } from "../../theme";
import { Link } from "react-router-dom";
export const CategoryManager_ = styled(Container)`
    h1 {
        margin-top: 25px;
    }

     


`;



export const FolderBackground = styled.div`
    background-color: ${colorTheme.neutral(200)};
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    border-radius: 0px 0px 10px 10px;

    hr {
        width: 100%;
        border: none;
    }

`;

export const Category_ = styled(Link)`
    padding: 13px;
    background-color: ${colorTheme.primary};
    color: ${colorTheme.primaryText};
    margin: 10px;
    border-radius: 10px;
`;

export const PathBreadcrumbs = styled.ul`
    list-style: none;
    padding: 0px;
    background-color: ${colorTheme.neutral(0)};
    border-radius: 10px 10px 0px 0px;
    margin-bottom: 5px;

    li {
        display: inline-block;
        padding: 10px 10px;
        margin: 5px 0px;
        background-color: ${colorTheme.neutral(0)};
    }


    .separator {
        color: ${colorTheme.primary()}!important;
        font-weight: 800;
    }


  
`;