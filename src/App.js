import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Main from './containers/Main/Main'; 
import DemoBlock from './containers/DemoBlock/DemoBlock'; 

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
            <Route exact path={ "/" } component={ Main } />  
            <Route exact path={ "/single-block" } component={ DemoBlock } />
        </Switch>
      </Router>
    );
  }
}

export default App;
