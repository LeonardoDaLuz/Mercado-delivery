import { Component } from 'react';
import { Link } from "react-router-dom";
import configs from '@configs';
import moveElementFromTo from '@utils/moveElementFromTo';
import { AdicionarRemoverDoCarrinho, Preco, ProdutoCard_ } from './styles';
import { Row } from '../../globalStyleds';
import { adicionarProdutoAoCarrinho } from '../../store/actions/carrinho';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { quantosDesseForamAdicionadosAoCarrinho } from '../../store/analyzers/carrinho';

function ProdutoCard( { produto, adicionarProdutoAoCarrinho, index } ) {

    let quantidadeAdicionado = quantosDesseForamAdicionadosAoCarrinho(produto._id);

    function RemoverDoCarrinho(e) { adicionarProdutoAoCarrinho(produto._id, -1); animarAdicao(e, -1) }

    function AdicionarAoCarrinho(e) { adicionarProdutoAoCarrinho(produto._id, 1); animarAdicao(e) }

    return (
        <ProdutoCard_ key={index}>
            <Link to={'/produto2/' + produto._id}>
                <img src={configs.imgsPath + produto.img} />
            </Link>
            <h5>{produto.titulo}</h5>
            <Preco>
                <div>R$ {(produto.preco * 1.1).toFixed(2)}</div>
                <div>{produto.preco}</div>
            </Preco>
            <AdicionarRemoverDoCarrinho>
                <button disabled={quantidadeAdicionado < 1} onClick={RemoverDoCarrinho}
                >-</button>
                <div>{quantidadeAdicionado}</div>
                <button onClick={AdicionarAoCarrinho}>+</button>
            </AdicionarRemoverDoCarrinho>
        </ProdutoCard_>
    );
}

async function animarAdicao(e, dir = 1) {
    let img = e.target.parentElement.parentElement.querySelector("img");
    let carrinho = document.querySelector("#carrinho");
    moveElementFromTo(img, img, carrinho, dir);
}

const mapStateToProps = store => ({  
    carrinho: store.carrinho
})

const mapDispatchToProps = dispatch =>
    bindActionCreators({ adicionarProdutoAoCarrinho }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ProdutoCard);