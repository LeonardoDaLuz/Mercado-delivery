import { useEffect } from "react";
import { connect } from "react-redux";
import { Link, withRouter } from "react-router-dom"
import { bindActionCreators } from "redux";
import { BreadcumbNav, SelectionCategory } from "./styles";
import { carregaCategorias } from '@actions/categorias';

function BreadCumbsSelector_({ product, carregaCategorias, categorias: categoriesOptionsHierarchy, changeBreadcumb }) {

    useEffect(() => {
        carregaCategorias();
    }, [])

    let categoriesOfThisProduct = product.categorias;



    let CategoriesSelectors = DrawCategorySelector(categoriesOfThisProduct, 0, categoriesOptionsHierarchy);


    function DrawCategorySelector(categoriesOfThisProduct, currentDepthIndex, CurrentCategoriesOptions) {

        let keys = Object.keys(CurrentCategoriesOptions);

        if (keys.length === 0)
            return <></>;


        let currentSelector = (
            <li key={currentDepthIndex}>
                <SelectionCategory value={categoriesOfThisProduct[currentDepthIndex]} onChange={(e) => { changeBreadcumb(currentDepthIndex, e.target.value) }}>
                    <option key={-1} value='todos'>Todos</option>
                    {keys.map((key, index) => {
                        return <option key={key} value={key}>{key}</option>
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
