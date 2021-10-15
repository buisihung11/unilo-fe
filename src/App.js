import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import { ThemeProvider } from "styled-components";
import "./App.css";
import { Dashboard, OpenBoxGame } from "./pages";
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
          <Route path="/minigame/openbox">
            <OpenBoxGame />
          </Route>
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
