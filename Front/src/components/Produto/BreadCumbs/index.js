import { Link } from "react-router-dom"
import { BreadcumbNav } from "./styles";

export function BreadCumbs({ produto }) {

    let categories = produto.categorias;

    var CategoriesList = categories.map(function (category, index) {
        let sliced = categories.slice(0, index+1);

        return (
            <li key={index}>
                <Link to={'/produtos/' + sliced.join('/')}>{category}</Link>
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
