import { useEffect, useRef } from 'react';
import { useHistory, withRouter } from "react-router-dom";
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import SidebarCategory from './SidebarCategory';
import ProdutoCard from './ProdutoCard';
import { Row, Col, ButtonOutline, HorizontalFlexList_Lg } from '@globalStyleds';

import { Container, ListaDeProdutos } from './styles';
import assets from '@assets';
import './style.css';
import { carregaMaisProdutos, reiniciaListaDeProdutos } from '../../store/actions/produtos';
import { combinePathWithQuery } from '../../utils/combinePathWithQuery';


function ProdutosPorCategoria({ produtos, carregaMaisProdutos, location, history }) {


    let query = location.search;
    let path = location.pathname;

    produtos = produtos[combinePathWithQuery(path, query)];
    produtos = produtos === undefined ? [] : produtos;

    const listaDeProdutosElem = useRef(null);


    useEffect(() => {

        ligarInfiniteLoader();

        return desligaInfiniteLoader;

    }, [location.pathname, location.search])

    async function ligarInfiniteLoader() {

        let tries = 5;
        while (listaDeProdutosElem.current.clientHeight < window.innerHeight && tries > 0) { //Faz com que mais produtos sejam carregados até que preencha a tela toda.

            tries--;
            await carregaMaisProdutos(path, query, 12);
            await window.waitForSeconds(0.5);
        }

        window.onscroll = infiniteLoadOnScroll;
    }

    function desligaInfiniteLoader() {
        window.onscroll = null;
    }

    async function infiniteLoadOnScroll(e) { //carrega mais produtos a medida que dá scroll (infinite loader)
        if (window.pageYOffset > document.body.clientHeight - window.innerHeight - 600) {
            await carregaMaisProdutos(path, query, 12);
        }
    }

    let produtoCards = produtos.map((p, index) => {
        return <ProdutoCard produto={p} key={index} />
    })


    return (
        <Container>
            <SidebarCategory />
            <ListaDeProdutos ref={listaDeProdutosElem}>

                {produtoCards}

            </ListaDeProdutos>
        </Container>

    );

}


const mapStateToProps = store => ({
    produtos: store.produtos
})


const mapDispatchToProps = dispatch =>
    bindActionCreators({ carregaMaisProdutos, reiniciaListaDeProdutos }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(ProdutosPorCategoria));

