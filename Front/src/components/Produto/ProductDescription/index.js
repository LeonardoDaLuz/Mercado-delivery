export function ProductDescription(props) {

    return (
        <div className="descricao-pg-produto">
            <div><h3 >Descrição do produto</h3></div>
            <div
                dangerouslySetInnerHTML={{
                    __html: props.produto.descricao
                }}></div>

        </div>
    )
}