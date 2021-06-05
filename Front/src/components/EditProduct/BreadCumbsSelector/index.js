import { useEffect } from "react";
import { connect } from "react-redux";
import { Link, withRouter } from "react-router-dom"
import { bindActionCreators } from "redux";
import { BreadcumbNav, SelectionCategory } from "./styles";
import { carregaCategorias } from '@actions/categorias';

function BreadCumbsSelector_({ produto, carregaCategorias, categorias: categoriesOptionsHierarchy }) {

    useEffect(() => {
        carregaCategorias();
    }, [])

    let categoriesOfThisProduct = produto.categorias;

    /*
        var CategoriesList = categories.map(function (category, index) {
            let sliced = categories.slice(0, index+1);
    
            return (
                <li key={index}>
                    <Link to={'/produtos/' + sliced.join('/')}>{category}</Link>
                </li>
            );
        });
        */

    let CategoriesSelectors = DrawCategorySelector(categoriesOfThisProduct, 0, categoriesOptionsHierarchy);


    function DrawCategorySelector(categoriesOfThisProduct, currentDepthIndex, CurrentCategoriesOptions) {

        let keys = Object.keys(CurrentCategoriesOptions);

        if (keys.length === 0)
            return <></>;


        let currentSelector = (
            <li key={0}>
                <SelectionCategory value={categoriesOfThisProduct[currentDepthIndex]} onChange={() => { }}>
                    {keys.map((key, index) => {
                        return <option value={key}>{key}</option>
                    })}
                </SelectionCategory>
            </li>
        )

        let nextOptions = CurrentCategoriesOptions[categoriesOfThisProduct[currentDepthIndex]]
        if (nextOptions !== undefined) {
            let nextSelector = DrawCategorySelector(categoriesOfThisProduct, currentDepthIndex + 1, nextOptions);
            return (
                <>
                    {currentSelector}
                    {nextSelector}
                </>
            )
        } else {
            return currentSelector;
        }
    }

    return (
        <BreadcumbNav aria-label="breadcrumb">
            <ol>
                <li><Link to='/produtos'>Todos</Link></li>
                {CategoriesSelectors}
            </ol>
        </BreadcumbNav>
    )
}

const mapStateToProps = store => ({
    categorias: store.categorias,
})

const mapDispatchToProps = dispatch =>
    bindActionCreators({ carregaCategorias }, dispatch);


export const BreadcumbsSelector = connect(mapStateToProps, mapDispatchToProps)(withRouter(BreadCumbsSelector_));
