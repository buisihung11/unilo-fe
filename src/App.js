import {
  BrowserRouter as Router,
  Link,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import "./App.css";

function App() {
  return (
    <Router>
      <ul>
        <li>
          <Link to="/screen-1">Screen 1</Link>
        </li>
        <li>
          <Link to="/screen-2">Screen 2</Link>
        </li>
        <li>
          <Link to="/screen-3">Screen 3</Link>
        </li>
      </ul>

      <Switch>
        <Route exact path="/">
          <Redirect to="/screen-1" />
        </Route>
        <Route path="/screen-1">
          <div>Screen 1</div>
        </Route>
        <Route path="/screen-2">
          <div>Screen 2</div>
        </Route>
        <Route path="/screen-3">
          <div>Screen 3</div>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
