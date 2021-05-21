import { useState } from 'react';
import { withRouter, useHistory } from "react-router-dom";
import { Input } from '../../globalStyleds';
import { FaixaDePrecoForm, OrdemSelectForm } from './styles';
import { filtraFloat } from '../../utils/InputFilters';
import { reiniciaListaDeProdutos } from '../../store/actions/produtos';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

function Ordem_({ location }) {

    const history = useHistory();
    const query = new URLSearchParams(location.search);
    let sort  = query.get('sort');
    sort = sort===null?'':sort;

    function aplicaOrdem(e) {

        query.set("sort", e.target.value);

        history.push(location.pathname + "?" + query.toString());

       
    }
    return (<>
        <h4>Ordem</h4>
        <OrdemSelectForm >
            <select name="ordem" id="ordem" value={sort} onChange={aplicaOrdem}>
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