import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux'; 
import store from './store'; 
import './App.css';
import Main from './containers/Main/Main'; 
import SingleBlockDisplay from './containers/Block/SingleBlockDisplay'; 
import Ledger from './containers/Ledger/Ledger'; 
import Currency from './containers/Currency/Currency'; 
import MoreInformation from './components/MoreInformation/MoreInformation';

class App extends Component {
  render() {
    return (
      <Provider store={ store } >
      <Router>
        <Switch>
            <Route exact path={ "/" } component={ Main } />  
            <Route exact path={ "/single-block" } component={ SingleBlockDisplay } />
            <Route exact path={ "/ledger" } component={ Ledger } />           
            <Route exact path={ "/currency" } component={ Currency } />           
            <Route exact path={ "/information" } component={ MoreInformation } />           
        </Switch>
      </Router>
      </Provider >
    );
  }
}

export default App;



