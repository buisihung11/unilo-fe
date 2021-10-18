import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import './App.css'
import { SettingProvider } from './context/SettingContext'
import {
  Dashboard,
  Reward,
  OpenBoxGame,
  Promotion,
  PromotionDetail,
  MissionDetail,
  Mission,
  WheelGame,
} from './pages'
import Demo from './pages/Demo/Demo'
import theme, { GlobalStyle } from './theme'

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
              <Reward type={1} quantity={5} />
            </Route>
            <Route path="/demo">
              <Demo />
            </Route>
            <Route path="/minigame/openbox">
              <OpenBoxGame />
            </Route>
            <Route path="/minigame/wheel">
              <WheelGame />
            </Route>
            <Route exact path="/promotion">
              <Promotion />
            </Route>
            <Route path="/promotion/:id">
              <PromotionDetail />
            </Route>
            <Route path="/mission/:id">
              <MissionDetail />
            </Route>
            <Route exact path="/mission">
              <Mission />
            </Route>
          </Switch>
        </Router>
      </SettingProvider>
    </ThemeProvider>
  )
}

export default App
