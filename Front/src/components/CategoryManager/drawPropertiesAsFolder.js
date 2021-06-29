import { nestedPropertySeletor } from "../../utils/nestedPropertySelector";
import { FolderBackground, ThumbnailSelector, NewCategory } from "./style";
import { Link } from "react-router-dom";
import { ButtonFlat } from "../../globalStyleds";
import assets from "../../assets";
import { Category } from './Category';

function drawPropertiesAsFolder_(obj, objectPath, linkPath) {
    if (obj === undefined)
        return <></>;

    const currentFolder = nestedPropertySeletor(obj, objectPath).get();

    if (currentFolder === undefined)
        return <></>;

    return (
        <>
            <FolderBackground>

                {
                    Object.keys(currentFolder)
                        .filter(key => key.charAt(0) !== '_')
                        .map(key => (<Category key={key} name={key} linkPath={linkPath} objectPath={objectPath} categoryObject={currentFolder[key]} />))

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

export const drawPropertiesAsFolder = drawPropertiesAsFolder_;