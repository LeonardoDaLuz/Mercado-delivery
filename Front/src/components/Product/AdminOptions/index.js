
import { AdminOptions_ } from "./styles";
import { EditButton, DeleteButton } from "./styles";
import assets from "../../../assets";
import { deleteProduct } from "../../../store/actions/product";
import { useHistory } from "react-router";
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";

export const AdminOptions__ = ({ product, deleteProduct }) => {
    const history = useHistory();
   
    return (
        <AdminOptions_>
            <EditButton to={'/editProduct/' + product._id} icon={assets.edit}><img src={assets.edit} /> Editar</EditButton>
            <DeleteButton  to={'#'} icon={assets.edit} onClick={()=>deleteProduct(product, ()=>history.push('/produtos/'))}><img src={assets.delete_} /> Deletar</DeleteButton>
        </AdminOptions_>
    );
}


const mapStateToProps = store => ({

})

const mapDispatchToProps = dispatch =>
    bindActionCreators({ deleteProduct }, dispatch);


export const AdminOptions = connect(mapStateToProps, mapDispatchToProps)(AdminOptions__);
