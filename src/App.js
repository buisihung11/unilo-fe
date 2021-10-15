import {
  BrowserRouter as Router,
  Link,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import "./App.css";
import Dashboard from "./pages/Dashboard";
import Pages from "./pages";

function App() {
  return (
    <Router>
      {/*<ul>*/}
      {/*  <li>*/}
      {/*    <Link to="/dashboard">Dashboard</Link>*/}
      {/*  </li>*/}
      {/*  <li>*/}
      {/*    <Link to="/screen-2">Screen 2</Link>*/}
      {/*  </li>*/}
      {/*  <li>*/}
      {/*    <Link to="/screen-3">Screen 3</Link>*/}
      {/*  </li>*/}
      {/*</ul>*/}
      <Switch>
        <Route exact path="/">
          <Redirect to="/dashboard" />
        </Route>
        <Route path="/dashboard">
          <Dashboard />
        </Route>
        <Route path="/screen-2">
          <div>Screen 2</div>
        </Route>
        <Route path="/screen-3">
          <div>Screen 3</div>
        </Route>
        <Route path="/reward">
          <Pages.Reward />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
