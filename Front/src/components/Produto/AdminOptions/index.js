
import { AdminOptions_ } from "./styles";
import { EditButton, DeleteButton } from "./styles";
import assets from "../../../assets";

export const AdminOptions = ({ product }) => {
   
    return (
        <AdminOptions_>
            <EditButton to={'/editProduct/' + product._id} icon={assets.edit}><img src={assets.edit} /> Editar</EditButton>
            <DeleteButton  to={'#'} icon={assets.edit} onClick={e=>e.preventDefault()}><img src={assets.delete_} /> Deletar</DeleteButton>
        </AdminOptions_>
    );
}

