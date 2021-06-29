import { Link, withRouter } from "react-router-dom"
import { BreadcumbNav } from "./styles";
import { reloadProductList as reloadProductList } from '@actions/products';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

function BreadCumbs_({ product  }) {

    let categories = product.categories;

    var CategoriesList = categories.map(function (category, index) {
        let sliced = categories.slice(0, index + 1);

        let path = '/SearchProducts/' + sliced.join('/');
        return (
            <li key={index}>
                <Link to={path}>{category}</Link>
            </li >
        );
    });

    return (
        <BreadcumbNav aria-label="breadcrumb">
            <ol>
                <li><Link to='/SearchProducts'>Todos</Link></li>
                {CategoriesList}
            </ol>
        </BreadcumbNav>
    )
}

const mapDispatchToProps = dispatch =>
    bindActionCreators({  }, dispatch);

export const BreadCumbs = connect(null, mapDispatchToProps)(withRouter(BreadCumbs_));
