
import { Category_, EditButton, DeleteButton, SaveButton } from "./style";
import { useRef, useState } from "react";
import { useHistory } from "react-router";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { categoryRename } from '@actions/categorias';

function Category__({ name, linkPath, objectPath, categoryRename }) {

    const [onEdit, setOnEdit] = useState(false);
    const [editedName, setEditedName] = useState(name);

    let inputRef = useRef(null);
    let history = useHistory();

    return (
        <Category_>
            <input type='text' readOnly={!onEdit} ref={inputRef} value={editedName} style={{ width: (editedName.length * 0.95 + 1) + 'ch' }} onChange={
                (e) => setEditedName(e.target.value)
            }
                onClick={
                    () => {
                        if (!onEdit)
                            history.push(linkPath + name);
                    }
                } />

            {onEdit
                ?
                <>

                    <SaveButton onClick={(e) => categoryRename(objectPath + '.' + name, editedName)}></SaveButton>
                    <EditButton onClick={(e) => setOnEdit(!onEdit)}></EditButton>
                </>
                :
                <>

                    <EditButton onClick={(e) => { setOnEdit(!onEdit); inputRef.current.focus() }}></EditButton>
                    <DeleteButton></DeleteButton>
                </>
            }


        </Category_>
    );
}

const mapDispatchToProps = (dispatch) => bindActionCreators({ categoryRename }, dispatch);

export const Category = connect(null, mapDispatchToProps)(Category__);

