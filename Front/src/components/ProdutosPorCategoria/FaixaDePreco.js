import { useState } from 'react';
import { withRouter, useHistory } from "react-router-dom";
import { Input } from '../../globalStyleds';
import { FaixaDePrecoForm } from './styles';
import { filtraFloat } from '../../utils/InputFilters';
import { reiniciaListaDeProdutos } from '../../store/actions/produtos';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

function FaixaDePreco_({ location, reiniciaListaDeProdutos })  {

    let query = new URLSearchParams(location.search);

    const [minimo, _setMinimo] = useState(filtraFloat(query.get("minPrice")));
    const [maximo, _setMaximo] = useState(filtraFloat(query.get("maxPrice")));

    const setMinimo = (e) => {
        _setMinimo(filtraFloat(e.target.value));
    }

    const setMaximo = (e) => {
        _setMaximo(filtraFloat(e.target.value));
    }


    let history = useHistory();

    function aplicaFaixaDePreco(e) {

        e.preventDefault();

        let query = "?";

        if (minimo != "") {
            query += "minPrice=" + minimo;
        }
        if (maximo != "") {

            if (minimo != "")
                query += "&";

            query += "maxPrice=" + maximo;
        }
        reiniciaListaDeProdutos(location.pathname, query, 12);
        history.push(location.pathname + query);
       

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

const mapDispatchToProps = (dispatch)=>
    bindActionCreators({reiniciaListaDeProdutos}, dispatch)

export const FaixaDePreco = connect(null, mapDispatchToProps)(withRouter(FaixaDePreco_));