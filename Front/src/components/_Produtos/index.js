import { Component } from 'react';
import './style.css';
import { ProdutoCard } from './ProdutoCard';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class Produtos extends Component {

    constructor() {
        super();

        this.loading = false;
        this.state = {
            produtos: [
            ]
        }
    }


    componentDidMount() {
        this.ligarInfiniteLoader();
    }

    async ligarInfiniteLoader() {
        await this.carregarMaisProdutos();
        await window.waitForSeconds(0.5);

        while (document.body.clientHeight < window.innerHeight) {
            if (!this.loading) {

                this.loading = true;
                await this.carregarMaisProdutos();
                await window.waitForSeconds(0.5);
                this.loading = false;
            }
        }

        window.addEventListener("scroll", async (e) => {
            if (!this.loading && window.pageYOffset > document.body.clientHeight - window.innerHeight - 600) {

                this.loading = true;
                await this.carregarMaisProdutos();
                this.loading = false;
            }
        });
    }

    async carregarMaisProdutos() {
        await fetch("http://localhost:3001/produtos/" + this.state.produtos.length + "/" + (this.state.produtos.length + 12))
            .then(x => x.json())
            .then(data => {
                let oldProdutos = this.state.produtos;
                this.setState({ produtos: oldProdutos.concat(data) });
            })
    }

    render() {
        let produtoCards = this.state.produtos.map((p, index) => {
            return <ProdutoCard produto={p} key={index} carrinho={this.props.loja.carrinho} />
        })
        return (
            <section className="container-lg px-2 produtos-page">
                <div className="container-lg">
                    <ul className="row">
                        {produtoCards}
                    </ul>
                </div>
            </section>

        );
    }
}



export default Produtos;
