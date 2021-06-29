import { useEffect, useRef } from "react";
import './CKEditorContentStyles.css';
import { DescricaoPgProduto } from "./styles";

export function ProductDescription({ product }) {

    return (
        <DescricaoPgProduto>
            <div><h3 >Descrição do produto</h3></div>
            <div className='ck-content'
                dangerouslySetInnerHTML={{
                    __html: product.description
                }}></div>

        </DescricaoPgProduto>
    )
}

