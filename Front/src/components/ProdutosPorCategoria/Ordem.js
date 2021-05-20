import { useState } from 'react';
import { withRouter, useHistory } from "react-router-dom";
import { Input } from '../../globalStyleds';
import { FaixaDePrecoForm, OrdemSelectForm } from './styles';
import { filtraFloat } from '../../utils/InputFilters';
import { reiniciaListaDeProdutos } from '../../store/actions/produtos';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

function Ordem_({ location, reiniciaListaDeProdutos })  {

       return (<>
        <h4>Ordem</h4>
        <OrdemSelectForm >
            <select name="ordem" id="ordem">
                <option value="Menor preço">Menor Preço</option>
                <option value="Maior preço">Maior Preço</option>
            </select>
        </OrdemSelectForm>
    </>);
};

const mapDispatchToProps = (dispatch)=>
    bindActionCreators({reiniciaListaDeProdutos}, dispatch)

export const Ordem = connect(null, mapDispatchToProps)(withRouter(Ordem_));