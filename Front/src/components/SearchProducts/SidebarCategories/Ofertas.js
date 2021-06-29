import { useState } from 'react';
import { withRouter, useHistory } from "react-router-dom";
import { Input } from '../../../globalStyleds';
import { OrdemSelectForm } from './styles';
import { filtraFloat } from '../../../utils/InputFilters';
import { loadMoreProducts } from '../../../store/actions/products';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

function Ofertas_({ location, carregaMaisProdutos }) {

    const history = useHistory();
    const query = new URLSearchParams(location.search);
    let sort = query.get('sort');
    sort = sort === null ? '' : sort;

    function aplicaOrdem(e) {

        query.set("sort", e.target.value);
        history.push(location.pathname + "?" + query.toString());
      }
    return (<>
        <h4>Ofertas</h4>
        <OrdemSelectForm >
            <select name="ofertas" id="ofertas" value={sort} onChange={aplicaOrdem}>
                <option value="nenhum"> </option>
                <option value="menorPreco">Ofertas do dia</option>
                <option value="maiorPreco">Ofertas da semana</option>
                <option value="maiorPreco">Ofertas do mês</option>
            </select>
        </OrdemSelectForm>
    </>);
};

const mapDispatchToProps = (dispatch) =>
    bindActionCreators({ carregaMaisProdutos: loadMoreProducts }, dispatch)

export const Ofertas = connect(null, mapDispatchToProps)(withRouter(Ofertas_));