import { Component } from 'react';
import { Link } from "react-router-dom";
import configs from '@configs';
import moveElementFromTo from '@utils/moveElementFromTo';
import { AdicionarRemover, Preco, ProdutoCard_ } from './styles';
import { Row } from '../../globalStyleds';

export class ProdutoCard extends Component {
    render() {
        let { produto, carrinho, index } = this.props;

        let quantidade = carrinho.quantosForamAdicionadosAoCarrinho(this.props.produto._id);

        async function animarAdicao(e, dir = 1) {
            let img = e.target.parentElement.parentElement.querySelector("img");
            let carrinho = document.querySelector("#carrinho");
            moveElementFromTo(img, img, carrinho, dir);
        }

        function RemoverDoCarrinho(e) { carrinho.adicionarAoCarrinho(produto._id, -1); animarAdicao(e, -1) }

        function AdicionarAoCarrinho(e) { carrinho.adicionarAoCarrinho(produto._id, 1); animarAdicao(e) }

        return (
            <ProdutoCard_ key={index}>
                <Link to={'/produto2/' + produto._id}>
                    <img src={configs.imgsPath + produto.img} />
                </Link>
                <h5>{produto.titulo}</h5>
                <Preco>
                    <div className="riscado">R$ {(produto.preco * 1.1).toFixed(2)}</div>
                    <div className="preco">{produto.preco}</div>
                </Preco>

                <AdicionarRemover>
                    <button disabled={quantidade < 1} onClick={RemoverDoCarrinho}
                    >-</button>
                    <div className="quant-number">{quantidade}</div>
                    <button onClick={AdicionarAoCarrinho}>+</button>
                </AdicionarRemover>
            </ProdutoCard_>
        );
    }


}