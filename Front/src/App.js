import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  IndexRoute,
  useParams
} from "react-router-dom";

import "../node_modules/bootstrap/scss/bootstrap.scss";
import './css/App.css';

import Header from './components/Header';
import BarraCategorias from './components/BarraCategorias';
import Sidebar from './components/Sidebar';
import Produto from './components/Produto';
import Produtos from './components/Produtos';
import Footer from './components/Footer';
import waitForSeconds from './utilities/waitForSeconds';
import Mathf from './utilities/Mathf';
import Loja from './classes/Loja';

export default class App extends Component {

  constructor() {
    super();
    this.loja = new Loja(this);
  }


  componentDidMount() {
    //this.loja.carregaLocalizacaoCliente.bind(this)();
  }

  render() {
    //co nsole.log(this.state.carrinhoData);

    return (
      <Router>
        <div>
          <Header loja={this.loja} />
          <Sidebar tooglerId='sidebar-toogler' />
          <BarraCategorias />
          <Switch>
            <Route exact path="/produto/:id" >
              <Produto loja={this.loja} />
            </Route>
            <Route exact path="/produto2/:id" >
              <Produto loja={this.loja} />
            </Route>
            <Route path="/produtos" >
              <Produtos loja={this.loja} />
            </Route>
          </Switch>
          <Footer />
        </div>
      </Router >
    );
  }

  /* <button onClick={this.log.bind(this)}>kjj</button> */
}

