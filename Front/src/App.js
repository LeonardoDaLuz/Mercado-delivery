import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";
import "../node_modules/bootstrap/scss/bootstrap.scss";

import Header from './components/Header';
import BarraCategorias from './components/BarraCategorias';
import Sidebar from './components/Sidebar';
import Produto from './components/Produto';
import Produtos from './components/Produtos';
import Footer from './components/Footer';


export default function App() {
  return (
    <Router>
      <div>
        <Header />
        <Sidebar tooglerId='sidebar-toogler' />
        <BarraCategorias />
        <Switch>
          <Route path="/produto/:id" component={Produto} />
          <Route path="/produtos">
            <Produtos />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

function Topics() {
  let match = useRouteMatch();

  return (
    <div>
      <h2>Topics</h2>

      <ul>
        <li>
          <Link to={`${match.url}/components`}>Components</Link>
        </li>
        <li>
          <Link to={`${match.url}/props-v-state`}>
            Props v. State
          </Link>
        </li>
      </ul>

      {/* The Topics page has its own <Switch> with more routes
          that build on the /topics URL path. You can think of the
          2nd <Route> here as an "index" page for all topics, or
          the page that is shown when no topic is selected */}
      <Switch>
        <Route path={`${match.path}/:topicId`}>
          <Topic />
        </Route>
        <Route path={match.path}>
          <h3>Please select a topic.</h3>
        </Route>
      </Switch>
    </div>
  );
}

function Topic() {
  let { topicId } = useParams();
  return <h3>Requested topic ID: {topicId}</h3>;
}