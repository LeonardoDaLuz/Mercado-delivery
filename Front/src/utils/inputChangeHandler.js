import produce from "immer";
import { useCallback } from "react";
import { nestedPropertySeletor } from "./nestedPropertySelector";
import { uploadImages } from "./uploadImagesToServer";

/**
 * 
 * @param {*} editedState specify react state that store field values
 * @param {*} setEditedState specify the state setter, to make modifications
 * @param {*} setDraftStatus specify the state that store if fields were modified.
 * @returns return object with getFieldProps, like a formik. Aditionaly the setFieldValue function, that is missing in formik
 */
export const useChangeHandler = (editedState, setEditedState, setDraftStatus) => {

    const handleChanges = useCallback((e) => {

        if (setDraftStatus)
            setDraftStatus('modified');

        setEditedState(produce(editedState, (draftState) => {
            /* switch (e.target.type) {
                 case 'file':
                     nestedPropertySeletor(draftState, e.target.name).set(e.target.value);
                     break;
                 default:*/
            nestedPropertySeletor(draftState, e.target.name).set(e.target.value);
            /*}*/
        }));
    });

    return {
        getFieldProps: (path) => {
            return {
                onChange: handleChanges,
                value: nestedPropertySeletor(editedState, path).get(),
                name: path,
                id: path,
            }
        },
        getImageFieldProps: (path) => {
            return {
                onClick: () => {
                    uploadImages(false).then(imageUrl => { handleChanges({ target: { name: path, imageUrl } }) })
                },
                setFieldValue: (path, value) => {
                    handleChanges({ target: { name: path, value } })
                },
                getFieldValue: (path) => {
                    return nestedPropertySeletor(editedState, path).get();
                }
            }
        }
    }
}