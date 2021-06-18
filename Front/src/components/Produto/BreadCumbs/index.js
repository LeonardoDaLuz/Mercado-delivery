import { Link, withRouter } from "react-router-dom"
import { BreadcumbNav } from "./styles";
import { reiniciaListaDeProdutos } from '@actions/produtos';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

function BreadCumbs_({ product, reiniciaListaDeProdutos }) {

    let categories = product.categories;

    var CategoriesList = categories.map(function (category, index) {
        let sliced = categories.slice(0, index + 1);

        let path = '/produtos/' + sliced.join('/');
        return (
            <li key={index}>
                <Link to={path}>{category}</Link>
            </li >
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

const mapDispatchToProps = dispatch =>
    bindActionCreators({ reiniciaListaDeProdutos }, dispatch);

export const BreadCumbs = connect(null, mapDispatchToProps)(withRouter(BreadCumbs_));
