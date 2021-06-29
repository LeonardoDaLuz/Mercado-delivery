import { Options_ } from "./styles";
import { ButtonFlat } from "../../../globalStyleds";
import { colorTheme } from "../../../theme";
import { deleteProduct } from "../../../store/actions/product";
import { useHistory } from "react-router";
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";

export const Options__ = ({ product, draftStatus, saveChanges, discardChanges, deleteProduct }) => {

    const history = useHistory();
   
    return (
        <Options_>
            <ButtonFlat bgColor={colorTheme.neutral()} onClick={discardChanges}>Voltar</ButtonFlat>
            <ButtonFlat bgColor={colorTheme.warning()}  onClick={()=>deleteProduct(product, ()=>history.push('/produtos/'))}>Deletar</ButtonFlat>
            <ButtonFlat disabled={draftStatus !== 'modified'} onClick={saveChanges} >Salvar</ButtonFlat>
        </Options_>
    )
}

const mapStateToProps = store => ({

})

const mapDispatchToProps = dispatch =>
    bindActionCreators({ deleteProduct }, dispatch);


export const Options = connect(mapStateToProps, mapDispatchToProps)(Options__);