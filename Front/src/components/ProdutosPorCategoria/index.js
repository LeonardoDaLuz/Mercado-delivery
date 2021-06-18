import { useEffect } from 'react';
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


function ProdutosPorCategoria({ produtos, carregaMaisProdutos, reiniciaListaDeProdutos, location, history }) {

    let query = location.search;
    let path = location.pathname;

    useEffect(() => {


        ligarInfiniteLoader();

        return desligaInfiniteLoader;

    }, [])


    async function ligarInfiniteLoader() {

        await carregaMaisProdutos(path, query, 12);
        await window.waitForSeconds(0.5);

        let tries = 5;
        while (document.body.clientHeight < window.innerHeight && tries > 0) { //Faz com que mais produtos sejam carregados até que preencha a tela toda.

            tries--;
            await carregaMaisProdutos(path, query, 12);
            await window.waitForSeconds(0.5);
        }

        window.addEventListener("scroll", infiniteLoadOnScroll);
    }

    function desligaInfiniteLoader() {
        window.removeEventListener("scroll", infiniteLoadOnScroll);
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
            <ListaDeProdutos>

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

