import { useState } from 'react';
import { withRouter, useHistory } from "react-router-dom";
import { Input } from '../../globalStyleds';
import { FaixaDePrecoForm, OrdemSelectForm } from './styles';
import { filtraFloat } from '../../utils/InputFilters';
import { reiniciaListaDeProdutos } from '../../store/actions/produtos';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

function Ordem_({ location, reiniciaListaDeProdutos }) {

    const history = useHistory();
    const query = new URLSearchParams(location.search);

    function aplicaOrdem(e) {

        query.set("sort", e.target.value);

        history.push(location.pathname + "?" + query.toString());
       // reiniciaListaDeProdutos(location.pathname, query, 12);
       
    }
    return (<>
        <h4>Ordem</h4>
        <OrdemSelectForm >
            <select name="ordem" id="ordem" onChange={aplicaOrdem}>
                <option value="nenhum">Nenhum</option>
                <option value="menorPreco">Menor Preço</option>
                <option value="maiorPreco">Maior Preço</option>
            </select>
        </OrdemSelectForm>
    </>);
};

const mapDispatchToProps = (dispatch) =>
    bindActionCreators({ reiniciaListaDeProdutos }, dispatch)

export const Ordem = connect(null, mapDispatchToProps)(withRouter(Ordem_));