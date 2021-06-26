
import { Category_, EditButton, DeleteButton, SaveButton, CategoryProductCount } from "./style";
import { useRef, useState } from "react";
import { useHistory } from "react-router";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { categoryRename } from '@actions/categorias';

function Category__({ name, linkPath, objectPath, categoryRename, categoryObject }) {

    const [onEdit, setOnEdit] = useState(false);
    const [editedName, setEditedName] = useState(name);

    let inputRef = useRef(null);
    let history = useHistory();

    function sendToRename() {
        categoryRename(objectPath + '.' + name, editedName);
        setOnEdit(!onEdit)
    }

    function onEnter(e) {
        if (e.key === 'Enter') {
            sendToRename();
            setOnEdit(!onEdit)
        }
    }

    return (
        <Category_>
            <input type='text' readOnly={!onEdit} ref={inputRef} value={editedName} style={{ width: (editedName.length * 0.95 + 1) + 'ch' }} onChange={(e) => setEditedName(e.target.value.replace(/[`~!@#$%^&*()_|+\-=?;:'".<>\{\}\[\]\\\/]/gi, ''))}
                onClick={
                    () => {
                        if (!onEdit)
                            history.push(linkPath + name);
                    }
                }
                onKeyDown={onEnter}
            />
            <CategoryProductCount>{categoryObject._quantity}</CategoryProductCount>
            {onEdit
                ?
                <>

                    <SaveButton onClick={sendToRename} ></SaveButton>
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

