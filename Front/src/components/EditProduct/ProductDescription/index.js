import { CKEditor } from '@ckeditor/ckeditor5-react';
//import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { ButtonFlat, Row } from '../../../globalStyleds';
import { colorTheme } from '../../../theme';
import { DescricaoPgProduto, SaveOrDiscard } from './styles';
import Editor from 'ckeditor5-custom-build/build/ckeditor';

export function ProductDescription(props) {

    const editorConfiguration = {
        toolbar: {
            items: [
                'heading',
                '|',
                'bold',
                'italic',
                'fontFamily',
                'fontSize',
                'fontColor',
                'highlight',
                'alignment',
                'bulletedList',
                'numberedList',
                '|',
                'outdent',
                'indent',
                '|',
                'link',
                'imageInsert',
                'imageUpload',
                'blockQuote',
                'insertTable',
                'mediaEmbed',
                'undo',
                'redo'
            ]
        },
        language: 'pt-br',
        image: {
            toolbar: [ 'imageTextAlternative', '|', 'imageStyle:alignLeft', 'imageStyle:full', 'imageStyle:alignRight' ],

            styles: [
                // This option is equal to a situation where no style is applied.
                'full',

                // This represents an image aligned to the left.
                'alignLeft',

                // This represents an image aligned to the right.
                'alignRight'
            ]
        },
        table: {
            contentToolbar: [
                'tableColumn',
                'tableRow',
                'mergeTableCells'
            ]
        },
        licenseKey: '',
    };

    return (
        <DescricaoPgProduto>
            <div><h3 >Descrição do produto</h3></div>
            dsdd
            <CKEditor
                editor={Editor}
                data={props.produto.descricao}
                config={editorConfiguration}
            />
            <SaveOrDiscard>
                <ButtonFlat bgColor={colorTheme.warning()}>Descartar alterações</ButtonFlat>
                <ButtonFlat >Salvar Alterações</ButtonFlat>
            </SaveOrDiscard>

        </DescricaoPgProduto>
    )
}