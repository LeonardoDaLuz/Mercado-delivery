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
    background-color: ${colorTheme.primary(560)};
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

export const Category_ = styled.div`

    background-color: ${colorTheme.primary};
    position: relative;
    margin: 10px;
    border-radius: 10px;
    overflow: hidden;
    padding-right: 10px;
    box-shadow: 0px 5px 0px ${colorTheme.primary(600)}, 3px 5px 4px rgba(0,0,0,0.5);
    font-weight: 600;

    a {

    }
    
    input {
         margin: 12px;        
        display: inline-block;
        text-decoration: none;
        border: none;
        font-weight: 600;
        color: ${colorTheme.contentText()};
        background-color: ${colorTheme.contentBackground()};
        outline: none;
    }

    input:read-only {
         margin: 12px;        
        display: inline-block;
        text-decoration: none;
        border: none;
        font-weight: 600;
        background-color: transparent;
        color: ${colorTheme.primaryText()};
        cursor: pointer;
     
    }
`;

export const CategoryProductCount = styled.span`
    flex: 1 1 20px;
    background-color: ${colorTheme.primary(200)};
    border-radius: 20px;
    padding: 3px;
    font-size: 12px;
    color: black;
    margin-right: 5px;

`;

export const NewCategory = styled(Category_)`
    background-color: ${colorTheme.tertiary};
    box-shadow: 0px 5px 0px ${colorTheme.tertiary(700)}, 3px 5px 4px rgba(0,0,0,0.5);
    padding: 10px 15px;
    a {
 
    color: ${colorTheme.tertiaryText};
    }

`;

export const EditButton = styled.button`
    width:32px;
    height: 32px;
    border: none;
    border-radius: 3px;
    background-color: ${colorTheme.tertiary()};
    vertical-align: middle;
    overflow: hidden;
    position: relative;
    margin: 3px;
    box-shadow: 0px 3px ${colorTheme.tertiary(700)};
    
    &:before {
        content: '';
        width: 32px;
        height: 32px;
        position: absolute;
        left: 0px;
        top: 0px;
        background: transparent url(${assets.editIcon}) no-repeat center;
        background-size: 50%;
        filter: invert(0%);
    }
`;

export const SaveButton = styled(EditButton)`
    &:before {
        content: '';
        width: 32px;
        height: 32px;
        position: absolute;
        left: 0px;
        top: 0px;
        background: transparent url(${assets.saveIcon}) no-repeat center;
        background-size: 50%;
        filter: invert(0%);
    }


`;

export const DeleteButton = styled(EditButton)`

    &:before {
        background: transparent url(${assets.delete_}) no-repeat center;
    background-size: 70%;
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