import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import { ThemeProvider } from "styled-components";
import "./App.css";
<<<<<<< HEAD
import { Dashboard } from "./pages";
import theme, { GlobalStyle } from "./theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Router>
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
            <div>
              Screen 3<button onClick={() => console.log("Hello")}>Test</button>
            </div>
          </Route>
        </Switch>
      </Router>
    </ThemeProvider>
=======
import Dashboard from "./pages/Dashboard";
import Promotion from "./pages/Promotion";

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
        <Route path="/promotion">
          <Promotion />
        </Route>
      </Switch>
    </Router>
>>>>>>> ca51ff8 (update header badges and special offer)
  );
}

export default App;
