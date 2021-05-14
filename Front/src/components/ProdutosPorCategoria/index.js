import { Component } from 'react';
import { withRouter } from "react-router-dom";
import SidebarCategorias from './SidebarCategorias';
import { ProdutoCard } from './ProdutoCard';
import './style.css';

export default withRouter(class ProdutosPorCategoria extends Component {

    componentDidMount() {
        this.ligarInfiniteLoader();
    }

    async ligarInfiniteLoader() {
        let loja = this.props.loja;
        let path = this.props.location.pathname;
        await loja.carregarMaisProdutos(path, 12);
        await window.waitForSeconds(0.5);

        while (document.body.clientHeight < window.innerHeight) {
            if (!this.loading) {

                this.loading = true;
                await loja.carregarMaisProdutos(path, 12);
                await window.waitForSeconds(0.5);
                this.loading = false;
            }
        }

        window.addEventListener("scroll", async (e) => {
            if (!this.loading && window.pageYOffset > document.body.clientHeight - window.innerHeight - 600) {

                this.loading = true;
                await loja.carregarMaisProdutos(path, 12);
                this.loading = false;
            }
        });
    }

    render() {
        let produtoCards = this.props.loja.state.listaProdutos.map((p, index) => {
            return <ProdutoCard produto={p} key={index} carrinho={this.props.loja.carrinho} />
        })
        return (
            <section className="container-lg px-2 produtos-page d-flex">
                <SidebarCategorias loja={this.props.loja} />
                <div className="col-9">
                    <ul className="row">
                        {produtoCards}
                    </ul>
                </div>
            </section>

        );
    }
})

