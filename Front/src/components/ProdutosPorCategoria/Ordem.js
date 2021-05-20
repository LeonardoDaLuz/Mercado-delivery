import { useState } from 'react';
import { withRouter, useHistory } from "react-router-dom";
import { Input } from '../../globalStyleds';
import { FaixaDePrecoForm, OrdemSelectForm } from './styles';
import { filtraFloat } from '../../utils/InputFilters';
import { reiniciaListaDeProdutos } from '../../store/actions/produtos';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

function Ordem_({ location, reiniciaListaDeProdutos })  {

    const history = useHistory();
    const query = new URLSearchParams(location.search);

    function selectOrdem(e) {

        query.set("ordem", e.target.value);
        history.push(location.pathname +"?" +query.toString());
        console.log("feoi "+query.toString())
    }
       return (<>
        <h4>Ordem</h4>
        <OrdemSelectForm >
            <select name="ordem" id="ordem" onChange={selectOrdem}>
                <option value="Menor preco" onClick={selectOrdem}>Menor Preço</option>
                <option value="Maior preco">Maior Preço</option>
            </select>
        </OrdemSelectForm>
    </>);
};

const mapDispatchToProps = (dispatch)=>
    bindActionCreators({reiniciaListaDeProdutos}, dispatch)

export const Ordem = connect(null, mapDispatchToProps)(withRouter(Ordem_));