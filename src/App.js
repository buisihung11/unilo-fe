import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import './App.css'
import { Box } from './components'
import { SettingProvider } from './context/SettingContext'
import useQueryParam from './hooks/useQueryParam'
import useUser from './hooks/user/useUser'
import {
  Dashboard,
  OpenBoxGame,
  Promotion,
  Reward,
  WheelGame,
  PromotionDetail,
  MissionDetail,
  Mission,
} from './pages'
import Demo from './pages/Demo/Demo'
import theme, { GlobalStyle } from './theme'

const queryClient = new QueryClient()

function App() {
  const query = useQueryParam()
  const token = query.token || true
  // TODO: Check user token and set user info for first time
  const { isFetching, isAuthenticated } = useUser(token)

  return (
    <ThemeProvider theme={theme}>
      <SettingProvider>
        <GlobalStyle />
        <Switch>
          {isFetching ? (
            <Box>Loading...</Box>
          ) : isAuthenticated ? (
            <>
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
            </>
          ) : (
            <Redirect to="/401" />
          )}
          <Route path="/401">
            <Box>UnAuthenticated</Box>
          </Route>
        </Switch>
      </SettingProvider>
    </ThemeProvider>
  )
}

const Wrapper = (props) => (
  <QueryClientProvider client={queryClient}>
    <ReactQueryDevtools initialIsOpen={false} />
    <Router>
      <App {...props} />
    </Router>
  </QueryClientProvider>
)

export default Wrapper
