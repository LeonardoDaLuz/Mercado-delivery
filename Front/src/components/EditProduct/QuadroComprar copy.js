import moveElementFromTo from '@utils/moveElementFromTo';


export function QuadroComprar(props) {

    let produto = props.produto;
    let loja = props.loja;
    let quantidadeAdicionado = loja.carrinho.quantosForamAdicionadosAoCarrinho(produto._id);
    let liked = produto.likes !== undefined && produto.likes.includes(0);

    return (
        <div className="quadro-comprar">
            <div>
                <h1>{produto.titulo}   </h1>
                <button className={"like " + liked} onClick={() => loja.likeProduto(produto._id)}>♥</button>
            </div>
            <div>
                <div className="quantidade">
                    <label>Quantidade:</label>
                    <div className="linha">
                        <button className="btn btn-outline-secondary" disabled={quantidadeAdicionado < 1 ? true : false}
                            onClick={(e) => { loja.carrinho.adicionarAoCarrinho(produto._id, -1); animarAdicao(e, -1) }}>-</button>
                        <input className="form-control text-center" value={quantidadeAdicionado} aria-label="Recipient's username" aria-describedby="button-addon2" onChange={(e) => loja.carrinho.editarQuantidadeDoProdutoAoCarrinho(produto._id, e.target.value)} />
                        <button className="btn btn-outline-secondary" onClick={(e) => { loja.carrinho.adicionarAoCarrinho(produto._id, 1); animarAdicao(e) }}>+</button>
                    </div>
                </div>
                <div className="bloco-preco">
                    <span>{produto.preco}</span><br />
                    <span>Em <b>12x de 35 sem juros</b></span>
                </div>
            </div>
            <div className="calcular-frete">
                <span>Acima de 100 reais em compras o <b>Frete é grátis!</b><br />
                Abaixo disso, o frete para sua localização atual é R$ <b>{loja.state.frete.toFixed(2)} </b>
                </span>
            </div>
            <div>
                <button className="botao-azul">Ir para o carrinho</button>
                <button className="botao-verde" onClick={(e) => { loja.carrinho.adicionarAoCarrinho(produto._id, 1); animarAdicao(e) }}>Adicionar ao carrinho</button>
            </div>
        </div>
    );
}

function animarAdicao(e, dir = 1) {
    let fromImg = document.querySelector(".quadro-de-foto img");
    let to = document.querySelector("#carrinho");
    moveElementFromTo(fromImg, fromImg, to, dir);
}