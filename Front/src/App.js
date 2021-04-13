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
import './utilities/waitForSeconds';
import './utilities/Mathf';
import Header from './components/Header';
import BarraCategorias from './components/BarraCategorias';
import Sidebar from './components/Sidebar';
import Produto from './components/Produto.js';
import Produtos from './components/Produtos';
import ProdutosPorCategoria from './components/ProdutosPorCategoria';
import Footer from './components/Footer';
import Loja from './classes/Loja';

export default class App extends Component {

  constructor() {
    super();
    this.loja = new Loja(this);
  }

  render() {
 
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
            <Route path="/categoria/:cat1?/:cat2?/:cat3?/:cat4?/:cat5?/" >
              <ProdutosPorCategoria loja={this.loja} />
            </Route>
            
          </Switch>
          <Footer />
        </div>
      </Router >
    );
  }

  /* <button onClick={this.log.bind(this)}>kjj</button> */
}

