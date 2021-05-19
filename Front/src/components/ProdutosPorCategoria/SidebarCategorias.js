import react, { Component, useEffect } from 'react';
import {
    BrowserRouter as Router,
    Link,
    withRouter
} from "react-router-dom";
import { Input } from '../../globalStyleds';
import { carregaCategorias } from '../../store/actions/categorias';
import Breadcumb from "./Breadcumb";
import { CategoriasAside, FaixaDePrecoForm } from './styles';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { reiniciaListaDeProdutos } from '../../store/actions/produtos';

function SidebarCategorias({ carregaCategorias, reiniciaListaDeProdutos, categorias, loja, location, match,  }) {

    useEffect(()=> {      
        carregaCategorias();
    }, [])

    function obtemListaAPartirDaCategoria(objeto) {

        let path = location.pathname;
        if (path[path.length - 1] != '/')
            path += '/';

        let keys = Object.keys(objeto);
        let resultado = keys.map((key, index) => {

            let id = key;
            let link = <Link to={path + key} onClick={() => { reiniciaListaDeProdutos(path + key, 12) }}>{key}</Link>;
            return <li key={key}>{link}</li>;
        });



        return keys.length == 0 ? <></> : <ul className="lista">{resultado}</ul>;
    }

    function selecionaSubcategoria(categorias) {
        let path = match.params;
        let categoriaCursor = categorias;

        for (let key in path) {
            if (path[key] !== undefined && categoriaCursor[path[key]] !== undefined) {
                categoriaCursor = categoriaCursor[path[key]];
            } else {
                break;
            }
        }
        return categoriaCursor;
    }

    function caminho() {
        let path = location.pathname;
        let splitedPath = path.split('/');
        //splitedPath.pop();
        let ultimaCategoria = splitedPath.pop();

        ultimaCategoria = ultimaCategoria == "produtos" ? "Todos" : ultimaCategoria;

        return {
            ultimaCategoria,
            caminhoAcima: splitedPath.join('/')
        }
    }

    let isRoot = match.params.cat1 === undefined;
    let categoriaSelecionada = selecionaSubcategoria(categorias);
    let CategoriaLista = obtemListaAPartirDaCategoria(categoriaSelecionada);
    let caminhoAcima = caminho().caminhoAcima;

    return (
        <CategoriasAside>
            {!isRoot &&
                <Breadcumb path={caminhoAcima} loja={loja} />
            }
            <h3>{caminho().ultimaCategoria}</h3>
            {CategoriaLista}
            <FaixaDePreco loja={loja} />
        </CategoriasAside>
    )


    
}

const mapStateToProps = store => ({
    categorias: store.categorias,

})

const mapDispatchToProps = dispatch =>
    bindActionCreators({ carregaCategorias, reiniciaListaDeProdutos }, dispatch);


export default connect(mapStateToProps, mapDispatchToProps)(withRouter(SidebarCategorias));

let FaixaDePreco = withRouter(({ loja }) => {

    function updateSearch(e) {

    }

    function reinicia(e) {
        e.preventDefault(); loja.reiniciaListaDeProdutos();
    }
    
    return (<>
        <h4>Preço</h4>
        <FaixaDePrecoForm onSubmit={reinicia}>
            <Input placeholder="Mínimo" value={loja.state.seletorListaDeProdutos.faixaPreco.min} onChange={loja.updateFaixaPreco().min} />-
            <Input placeholder="Máximo" value={loja.state.seletorListaDeProdutos.faixaPreco.max} onChange={loja.updateFaixaPreco().max} />
            <button type="submit">Ir</button>
        </FaixaDePrecoForm>
    </>)
});