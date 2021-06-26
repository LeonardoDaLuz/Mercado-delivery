import { CategoryManager_ } from "./style";
import { Row} from "../../globalStyleds";
import { useEffect } from "react";
import {  withRouter } from "react-router";
import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { carregaCategorias } from "@actions/categorias";
import { CategoryBreadcrumbs } from './CategoryBreadcrumbs';
import { drawPropertiesAsFolder } from "./drawPropertiesAsFolder";

function CategoryManager__({ location, categories, carregaCategorias }) {


    let linkPath = location.pathname;

    if (linkPath.charAt(linkPath.length - 1) !== '/')
        linkPath += '/';

    let objectPath = linkPath.replace('/CategoryManager/', '').replaceAll('/', '.');


    if (objectPath.charAt(objectPath.length - 1) === '.')
        objectPath = objectPath.slice(0, -1);


    useEffect(()=> {
        carregaCategorias();
    }, [])

    return (
        <CategoryManager_>
            <h1>Gerenciar Categorias</h1>
            <CategoryBreadcrumbs objectPath={objectPath} />

            <Row style={{ flexWrap: 'wrap' }}>
                {
                    drawPropertiesAsFolder(categories, objectPath, linkPath)
                }

            </Row>
        </CategoryManager_>
    );
};

const mapStateToProps = (store) => ({ categories: store.categories.data })

const mapDispatchToProps = (dispatch) => bindActionCreators({ carregaCategorias }, dispatch);

export const CategoryManager = connect(mapStateToProps, mapDispatchToProps)(withRouter(CategoryManager__));


