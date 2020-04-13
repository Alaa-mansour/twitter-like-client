import React from 'react';
import {BrowserRouter as Router , Route , Switch} from 'react-router-dom';
import './App.css';

import createMuiTheme from '@material-ui/core/styles/createMuiTheme';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';

//Pagess
import Home from './pages/home';
import Login from './pages/login';
import Signup from './pages/signup';

//Components
import NavBar from './components/Navbar';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#673ab7',
    }
  }

});

function App() {
  return (
    <MuiThemeProvider theme={theme} >
      <div className="App">
        <Router>
          <NavBar/>
          <div className="container">
              <Switch>
                <Route path="/" component={Home} exact/>
                <Route path="/login" component={Login} exact/>
                <Route path="/signup" component={Signup} exact/>
              </Switch>
          </div>
        </Router>
      </div>
    </MuiThemeProvider>
  );
}

export default App;
