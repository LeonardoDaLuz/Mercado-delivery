import { CategoryManager_, Category_, FolderBackground, PathBreadcrumbs, ThumbnailSelector, EditButton, DeleteButton, SaveButton, NewCategory } from "./style";
import { Row, Col, ButtonOutline, ButtonFlat } from "../../globalStyleds";
import { colorTheme } from "../../theme";
import { nestedPropertySeletor } from "../../utils/nestedPropertySelector";
import { useEffect, useRef, useState } from "react";
import { useHistory, withRouter } from "react-router";
import { Link } from "react-router-dom";
import assets from "../../assets";
import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { carregaCategorias } from "@actions/categorias";

function CategoryManager__({ location, categories, carregaCategorias }) {


    let linkPath = location.pathname;

    if (linkPath.charAt(linkPath.length - 1) !== '/')
        linkPath += '/';

    let objectPath = linkPath.replace('/CategoryManager/', '').replaceAll('/', '.');


    if (objectPath.charAt(objectPath.length - 1) === '.')
        objectPath = objectPath.slice(0, -1);


    useEffect(()=> {
        carregaCategorias();
    }, [])

    return (
        <CategoryManager_>
            <h1>Gerenciar Categorias</h1>
            <CategoryBreadcrumbs objectPath={objectPath} />

            <Row style={{ flexWrap: 'wrap' }}>
                {
                    drawPropertiesAsFolder(categories, objectPath, linkPath)
                }

            </Row>
        </CategoryManager_>
    );
};

const mapStateToProps = (store) => ({ categories: store.categories.data })

const mapDispatchToProps = (dispatch) => bindActionCreators({ carregaCategorias }, dispatch);

export const CategoryManager = connect(mapStateToProps, mapDispatchToProps)(withRouter(CategoryManager__));

function drawPropertiesAsFolder(obj, objectPath, linkPath) {
    if (obj === undefined)
        return <></>;

    const currentFolder = nestedPropertySeletor(obj, objectPath).get();

    if (currentFolder === undefined)
        return <></>;

    return (
        <>
            <FolderBackground>

                {
                    Object.keys(currentFolder).map(key => (<Category key={key} name={key} linkPath={linkPath} />))

                }
                <hr />
                <NewCategory><Link>Adicionar Nova Categoria</Link></NewCategory>
            </FolderBackground>
            <ThumbnailSelector>
                <h4>Thumbnail:</h4>
                <img src={assets.imagePlaceholder} />
                <ButtonFlat>Change</ButtonFlat>
            </ThumbnailSelector>
        </>
    )
}


function CategoryBreadcrumbs({ objectPath, rootPath }) {

    let pathArray = objectPath.split('.');
    let exitFolderClasses = pathArray.length === 0 || pathArray[0] === '' ? 'exitFolder disabled' : 'exitFolder';
    console.log(pathArray);
    return (
        <PathBreadcrumbs>
            <Link className={exitFolderClasses} to={'/CategoryManager/' + pathArray.slice(0, pathArray.length - 1).join('/')}></Link>
            <Link key='0' to='/CategoryManager/'>Todas</Link>

            {pathArray.map((item, index) => {

                let to = '/CategoryManager/' + pathArray.slice(0, index + 1).join('/');

                return (
                    <React.Fragment key={index}>
                        <span className='separator'>{'>'}</span>
                        <Link to={to}>{item}</Link>
                    </React.Fragment>
                )
            }
            )}
            {objectPath.length > 0 && <span className='separator'>{':'}</span>}
        </PathBreadcrumbs>
    );

}

function Category({ name, linkPath }) {

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

                    <SaveButton onClick={(e) => setOnEdit(!onEdit)}></SaveButton>
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

