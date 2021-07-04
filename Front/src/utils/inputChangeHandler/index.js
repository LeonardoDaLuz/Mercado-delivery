import produce from "immer";
import { useCallback, useEffect, useState } from "react";
import { nestedPropertySeletor } from "../nestedPropertySelector";
import { uploadImages } from "../uploadImagesToServer";
import image_placeholder from './image_placeholder.png';
/**
 * 
 * @param {*} editedState specify react state that store field values
 * @param {*} setEditedState specify the state setter, to make modifications
 * @param {*} setDraftStatus specify the state that store if fields were modified.
 * @returns return object with getFieldProps, like a formik. Aditionaly the setFieldValue function, that is missing in formik
 */
export const useChangeHandler = (state, uploadUrl = 'http://localhost:3001/imageUpload/', imgsPath = 'http://localhost:3001/') => {

    const [editedState, setEditedState] = useState(Array.isArray(state) ? [...state] : { ...state });
    const [draftStatus, setDraftStatus] = useState('unchanged');
    const [fieldMetas, setFieldMetas] = useState({});

    useEffect(() => {
        setEditedState(Array.isArray(state) ? [...state] : { ...state });
    }, [state]);

    const handleChanges = useCallback((e) => {

        setDraftStatus('changed');

        setEditedState(produce(editedState, (draftState) => {

            nestedPropertySeletor(draftState, e.target.name).set(e.target.value);

            setFieldMetas(
                {
                    ...fieldMetas,
                    [e.target.name]: { ...fieldMetas[e.target.name], 'data-status': 'changed' }
                }
            )
        }
        ))
    })

    function getFieldMeta(path) {

        if (!fieldMetas[path]) {
            return { 'data-status': 'unchanged' }
        } else {
            return fieldMetas[path];
        }
    }

    return {
        state: editedState,

        setState: (newState) => {
            setDraftStatus('changed');
            setEditedState(newState)
        },

        getFieldProps: (path) => {
            let value = nestedPropertySeletor(editedState, path).get();
            if (!value)
                value = '';

            return {
                onChange: handleChanges,
                value,
                name: path,
                id: path,
            }
        },

        setFieldValue: (path, value) => {
            handleChanges({ target: { name: path, value } })
        },

        getFieldValue: (path) => {
            return nestedPropertySeletor(editedState, path).get();
        },

        getFieldMeta: getFieldMeta,

        getDraftStatus: () => draftStatus,

        getImageFieldProps: (path) => {

            let src = nestedPropertySeletor(editedState, path).get();

            if (src)
                src = imgsPath + src;
            else
                src = image_placeholder;

            return {
                onClick: () => {
                    uploadImages(false,
                        () => {
                            setFieldMetas(
                                {
                                    ...fieldMetas,
                                    [path]: { ...fieldMetas[path], 'data-status': 'uploading' }
                                }
                            )
                        }
                    )
                        .then(imageUrl => { handleChanges({ target: { name: path, value: imageUrl } }) })
                },
                name: path,
                id: path,
                status: getFieldMeta(path).status,
                src
            }
        },
        discardChanges: () => {
            setEditedState(Array.isArray(state) ? [...state] : { ...state });
        },
        isValid: ()=> {
            
        }
    }
}