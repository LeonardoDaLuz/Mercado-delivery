import { useEffect } from "react";
import { connect } from "react-redux";
import { Link, withRouter } from "react-router-dom"
import { bindActionCreators } from "redux";
import { BreadcumbNav, SelectionCategory } from "./styles";
import { carregaCategorias } from '@actions/categorias';

function BreadCumbsSelector_({ produto, carregaCategorias }) {

    useEffect(() => {
        //carregaCategorias();
    }, [])

    let categories = produto.categorias;

    var CategoriesList = categories.map(function (category, index) {
        let sliced = categories.slice(0, index + 1);

        return (
            <li key={index}>
                <SelectionCategory value={category} onChange={()=>{}}>
                    <option value="asdas">asdas</option>
                    <option value="asdas">asdas</option>
                    <option value="asdas">asdas</option>
                </SelectionCategory>
            </li>
        );
    });

    return (
        <BreadcumbNav aria-label="breadcrumb">
            <ol>
                <li><Link to='/produtos'>Todos</Link></li>
                {CategoriesList}
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
