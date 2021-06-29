import { useEffect, useRef } from 'react';
import { useHistory, withRouter } from "react-router-dom";
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import SidebarCategories from './SidebarCategories';
import ProductCard from './ProductCard';
import { Row, Col, ButtonOutline, HorizontalFlexList_Lg } from '@globalStyleds';

import { Container, ListaDeProdutos } from './styles';
import assets from '@assets';
import './style.css';
import { loadMoreProducts, reloadProductList } from '../../store/actions/products';
import { combinePathWithQuery } from '../../utils/combinePathWithQuery';


function SearchProduct({ products, loadMoreProducts, location, history }) {


    let query = location.search;
    let path = location.pathname;

    products = products[combinePathWithQuery(path, query)];
    products = products === undefined ? [] : products;

    const listaDeProdutosElem = useRef(null);


    useEffect(() => {

        ligarInfiniteLoader();

        return desligaInfiniteLoader;

    }, [location.pathname, location.search])

    async function ligarInfiniteLoader() {

        let tries = 5;
        while (listaDeProdutosElem.current.clientHeight < window.innerHeight && tries > 0) { //Faz com que mais produtos sejam carregados até que preencha a tela toda.

            tries--;
            await loadMoreProducts(path, query, 12); //Aqui, o location.pathname é usado pois este path é usado na especificação da busca na api.
            await window.waitForSeconds(0.5);
        }

        window.onscroll = infiniteLoadOnScroll;
    }

    function desligaInfiniteLoader() {
        window.onscroll = null;
    }

    async function infiniteLoadOnScroll(e) { //carrega mais produtos a medida que dá scroll (infinite loader)
        if (window.pageYOffset > document.body.clientHeight - window.innerHeight - 600) {
            await loadMoreProducts(path, query, 12);
        }
    }

    let produtoCards = products.map((p, index) => {
        return <ProductCard product={p} key={index} />
    })


    return (
        <Container>
            <SidebarCategories />
            <ListaDeProdutos ref={listaDeProdutosElem}>

                {produtoCards}

            </ListaDeProdutos>
        </Container>

    );

}


const mapStateToProps = store => ({
    products: store.products
})


const mapDispatchToProps = dispatch =>
    bindActionCreators({ loadMoreProducts, reloadProductList }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(SearchProduct));

