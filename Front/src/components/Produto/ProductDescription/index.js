import { useEffect, useRef } from "react";

export function ProductDescription({ product }) {

    return (
        <div className="descricao-pg-produto">
            <div><h3 >Descrição do produto</h3></div>
            <div
                dangerouslySetInnerHTML={{
                    __html: product.description
                }}></div>

        </div>
    )
}

