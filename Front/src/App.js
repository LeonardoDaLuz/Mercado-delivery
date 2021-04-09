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
import Carrinho from './classes/Carrinho';

export default class App extends Component {

  constructor() {
    super();
    this.state = { carrinhoData: {} }
    this.carrinho = new Carrinho(this); //inicia o carrinho, carrega os dados remotos e fornece metodos para interagir com o carrinho
  }

  render() {
    //co nsole.log(this.state.carrinhoData);
 
    return (
      <Router>
        <div>
            <Header carrinho={this.carrinho} />
            <Sidebar tooglerId='sidebar-toogler' />
            <BarraCategorias />
            <Switch>
              <Route path="/produto/:id" component={Produto} />
              <Route path="/produtos" >
                <Produtos carrinho={this.carrinho}/>
              </Route>
            </Switch>
            <Footer />
        </div>
      </Router >
    );
  }

  /* <button onClick={this.log.bind(this)}>kjj</button> */
}

