import { Component } from 'react';
import { Link } from "react-router-dom";
import configs from '@configs';
import moveElementFromTo from '@utils/moveElementFromTo';
import { ProductLink, AdicionarRemoverDoCarrinho, Price, OffPrice, ProdutoCard_, OfferTag } from './styles';
import { Row } from '@globalStyleds';
import { adicionarProdutoAoCarrinho } from '../../../store/actions/carrinho';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { quantosDesseForamAdicionadosAoCarrinho } from '../../../store/analyzers/carrinho';
import assets from '../../../assets';
import { OfferTagSVG } from './OfferTagSvg';

function ProdutoCard({ produto, adicionarProdutoAoCarrinho, index }) {

    let addedQuantity = quantosDesseForamAdicionadosAoCarrinho(produto._id);

    function RemoverDoCarrinho(e) { adicionarProdutoAoCarrinho(produto._id, -1); animarAdicao(e, -1) }

    function AdicionarAoCarrinho(e) { adicionarProdutoAoCarrinho(produto._id, 1); animarAdicao(e) }

    const offerEnabled = produto.offer.enabled;


    return (
        <ProdutoCard_ key={index}>

            {produto.offer.enabled &&
                <OfferTagSVG product={produto} />
            }
            <ProductLink to={'/produto2/' + produto._id}>
                <img src={configs.imgsPath + produto.imgs[0]} />
            </ProductLink>
            <h5>{produto.title}</h5>
            {offerEnabled &&
                <Row>

                    <OffPrice>
                        <div>R$ {(produto.price).toFixed(2).replace('.', ',')}</div>
                        <div>{produto.offer.off_price.toFixed(2).replace('.', ',')}</div>
                    </OffPrice>
                </Row>
            }
            {!offerEnabled &&
                <Price>
                    <div>{produto.price.toFixed(2).replace('.', ',')}</div>
                </Price>
            }
            <AdicionarRemoverDoCarrinho>
                <button disabled={addedQuantity < 1} onClick={RemoverDoCarrinho}
                >-</button>
                <div>{addedQuantity}</div>
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