import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import { ThemeProvider } from "styled-components";
import "./App.css";
import { SettingProvider } from "./context/SettingContext";
import { Dashboard, Reward } from "./pages";
import Demo from "./pages/Demo/Demo";
import theme, { GlobalStyle } from "./theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <SettingProvider>
        <GlobalStyle />
        <Router>
          <Switch>
            <Route exact path="/">
              <Redirect to="/dashboard" />
            </Route>
            <Route path="/dashboard">
              <Dashboard />
            </Route>
            <Route path="/reward">
              <Reward />
            </Route>
            <Route path="/demo">
              <Demo />
            </Route>
            <Route path="/screen-2">
              <div>Screen 2</div>
            </Route>
            <Route path="/screen-3">
              <div>
                Screen 3
                <button onClick={() => console.log("Hello")}>Test</button>
              </div>
            </Route>
          </Switch>
        </Router>
      </SettingProvider>
    </ThemeProvider>
  );
}

export default App;
