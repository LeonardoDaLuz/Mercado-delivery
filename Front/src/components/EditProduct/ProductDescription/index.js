import { CKEditor } from '@ckeditor/ckeditor5-react';
//import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { ButtonFlat, Row } from '../../../globalStyleds';
import { colorTheme } from '../../../theme';
import { DescricaoPgProduto, SaveOrDiscard } from './styles';
import Editor from 'ckeditor5-custom-build/build/ckeditor';
import { useEffect, useLayoutEffect, useRef } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { editarQuantidadeDoProdutoAoCarrinho } from '../../../store/actions/carrinho';

export const ProductDescription = ({ product, handleChanges, draftStatus, discardChanges }) => {

    const editorConfiguration = {
        toolbar: {
            items: [
                'heading', '|', 'bold', 'italic', 'fontFamily', 'fontSize', 'fontColor', 'highlight', 'alignment', 'bulletedList', 'numberedList', '|', 'outdent', 'indent', '|', 'link', 'imageInsert', 'imageUpload', 'blockQuote', 'insertTable', 'mediaEmbed', 'undo', 'redo'
            ]
        },
        language: 'pt-br',
        image: {
            toolbar: ['imageTextAlternative', '|', 'imageStyle:alignLeft', 'imageStyle:full', 'imageStyle:alignRight'],

            styles: ['full', 'alignLeft', 'alignRight']
        },
        table: {
            contentToolbar: ['tableColumn', 'tableRow', 'mergeTableCells']
        },
        licenseKey: '',
    };
    //dd
    const initialized = useRef(false);

    return (
        <DescricaoPgProduto>
            <div><h3 >Descrição do produto</h3></div>
            <CKEditor
                editor={Editor}
                data={product.description}
                config={editorConfiguration}
                onChange={(event, editor) => {
                    console.log('onChange');
                    if (initialized.current) {
                        handleChanges({ target: { name: 'description', value: editor.getData() } });
                    } else {
                        initialized.current = true;

                    }
                }}
            />
            <SaveOrDiscard>
                <ButtonFlat bgColor={colorTheme.warning()} disabled={draftStatus !== 'modified'} onClick={discardChanges}>Descartar alterações</ButtonFlat>
                <ButtonFlat type='submit' disabled={draftStatus !== 'modified'}>Salvar Alterações</ButtonFlat>
            </SaveOrDiscard>

        </DescricaoPgProduto>
    )
}
