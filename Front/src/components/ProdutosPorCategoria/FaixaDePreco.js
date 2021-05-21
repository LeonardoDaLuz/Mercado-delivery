import { useState } from 'react';
import { withRouter, useHistory } from "react-router-dom";
import { Input } from '../../globalStyleds';
import { FaixaDePrecoForm } from './styles';
import { reiniciaListaDeProdutos } from '../../store/actions/produtos';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

function FaixaDePreco_({ location, reiniciaListaDeProdutos }) {

    let query = new URLSearchParams(location.search);

    const [minimo, _setMinimo] = useState(filtraFloat(query.get("menorPreco")));
    const [maximo, _setMaximo] = useState(filtraFloat(query.get("maiorPreco")));

    const setMinimo = (e) => { _setMinimo(filtraFloat(e.target.value)); }

    const setMaximo = (e) => { _setMaximo(filtraFloat(e.target.value)); }

    let history = useHistory();
 
    function aplicaFaixaDePreco(e) {

        e.preventDefault();

        if (minimo != "")
            query.set('menorPreco', filtraFloat(minimo));
        else
            query.delete('menorPreco');

        if (maximo != "")
            query.set("maiorPreco", filtraFloat(maximo));
        else
            query.delete("maiorPreco")

        history.push(location.pathname + "?" + query);
       // reiniciaListaDeProdutos(location.pathname, query, 12);
    }

    return (<>
        <h4>Preço</h4>
        <FaixaDePrecoForm onSubmit={aplicaFaixaDePreco}>
            <Input placeholder="Mínimo" value={minimo} onChange={setMinimo} />-
            <Input placeholder="Máximo" value={maximo} onChange={setMaximo} />
            <button type="submit">Ir</button>
        </FaixaDePrecoForm>
    </>);
};

const mapDispatchToProps = (dispatch) =>
    bindActionCreators({ reiniciaListaDeProdutos }, dispatch)

export const FaixaDePreco = connect(null, mapDispatchToProps)(withRouter(FaixaDePreco_));

function filtraFloat(number) {
    let _number = parseFloat(number);
    return (_number === 0 || isNaN(number) || number === null ? "" : number)
}