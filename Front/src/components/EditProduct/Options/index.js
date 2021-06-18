import { Options_ } from "./styles";
import { ButtonFlat } from "../../../globalStyleds";
import { colorTheme } from "../../../theme";

export const Options = ({ draftStatus, saveChanges, discardChanges }) => {
    return (
        <Options_>
            <ButtonFlat bgColor={colorTheme.neutral()} onClick={discardChanges}>Voltar</ButtonFlat>
            <ButtonFlat bgColor={colorTheme.warning()}  onClick={discardChanges}>Deletar</ButtonFlat>
            <ButtonFlat disabled={draftStatus !== 'modified'} onClick={saveChanges} >Salvar</ButtonFlat>
        </Options_>
    )
}