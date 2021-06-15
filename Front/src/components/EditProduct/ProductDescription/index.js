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

export const ProductDescription = ({ product, draftProduct, handleChanges, draftStatus, discardChanges }) => {

    useEffect(() => {
        console.log('product Changed', product);
        if(editorRef.current) {
            console.log(`editorRef.current.setData(${product.description})`);
            editorRef.current.setData(product.description);
        }
    }, [product]);

    useEffect(() => {
        console.log('draftProduct Changed', draftProduct);
    }, [draftProduct]);

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
    const editorRef = useRef(null);
    window.cket = draftProduct;

    return (
        <DescricaoPgProduto>
            <div><h3 >Descrição do produto</h3></div>
            <CKEditor
                editor={Editor}
                config={editorConfiguration}
                onReady={editor => {
                    editorRef.current = editor;
                    window.editorRef = editor;
                    // You can store the "editor" and use when it is needed.
                    console.log('Editor is ready to use!', "+" + editor.getData());
                }}
                onChange={(event, editor) => {
                    console.log('CKE onChange', product, draftProduct);
                    handleChanges({ target: { name: 'description', value: editor.getData() } });

                    /* if (initialized.current) {
                         handleChanges({ target: { name: 'description', value: editor.getData() } });
                     } else {
                         initialized.current = true;
 
                     }*/
                }}
            />
            <SaveOrDiscard>
                <ButtonFlat bgColor={colorTheme.warning()} disabled={draftStatus !== 'modified'} onClick={discardChanges}>Descartar alterações</ButtonFlat>
                <ButtonFlat type='submit' disabled={draftStatus !== 'modified'}>Salvar Alterações</ButtonFlat>
            </SaveOrDiscard>

        </DescricaoPgProduto>
    )
}
