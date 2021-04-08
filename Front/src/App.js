import React from "react";
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


export default function App() {

  
  return (
    <Router>
      <div>
        <Header />
        <Sidebar tooglerId='sidebar-toogler' />
        <BarraCategorias />
        <Switch>
          <Route path="/produto/:id" component={Produto} />
          <Route path="/produtos" component={Produtos} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}