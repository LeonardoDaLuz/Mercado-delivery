import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { ButtonFlat, Row } from '../../../globalStyleds';
import { colorTheme } from '../../../theme';
import { DescricaoPgProduto, SaveOrDiscard } from './styles';

export function ProductDescription(props) {

    return (
        <DescricaoPgProduto>
            <div><h3 >Descrição do produto</h3></div>
            <CKEditor
                editor={ClassicEditor}
                data={props.produto.descricao}
            />
            <SaveOrDiscard>
                <ButtonFlat bgColor={colorTheme.warning()}>Descartar alterações</ButtonFlat>
                <ButtonFlat >Salvar Alterações</ButtonFlat>
            </SaveOrDiscard>

        </DescricaoPgProduto>
    )
}