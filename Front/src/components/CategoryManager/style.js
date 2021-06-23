import styled from "styled-components";
import { Container } from "../../globalStyleds";
import { colorTheme } from "../../theme";
import assets from '@assets';
import { Link } from "react-router-dom";
export const CategoryManager_ = styled(Container)`
    h1 {
        margin-top: 25px;
    }

     


`;



export const FolderBackground = styled.div`
    background-color: ${colorTheme.neutral(250)};
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    border-radius: 0px 0px 0px 10px;
    flex: 1 1 800px;
    width: 900px;
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
    box-shadow: 0px 10px rgba(0,0,0,0.05);

    a {
        display: inline-block;
        padding: 10px 10px;
        margin: 5px 0px;
        background-color: ${colorTheme.neutral(0)};
    }


    .separator {
        color: ${colorTheme.primary()}!important;
        font-weight: 800;
    }

    .exitFolder {
        width: 54px;
        height: 44px;
        margin: 5px 5px 5px 5px;
        vertical-align: middle;
        background: transparent url(${assets.exitFolder}) no-repeat center;
        background-size: 50%;
        border-right: 1px solid ${colorTheme.neutral(200)};

    }

    .disabled {
  
        opacity: 0.2;
        pointer-events: none;
    }
  
`;

export const ThumbnailSelector = styled.div`
    flex: 1 1 200px;
    background-color: ${colorTheme.neutral(300)};
    padding: 10px;

    img {
        width: 100%;
        background-color:  ${colorTheme.neutral(200)};
    }

`;