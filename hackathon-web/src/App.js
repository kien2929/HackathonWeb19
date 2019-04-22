import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import SignIn from './pages/SignIn';
import { BrowserRouter, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
      <BrowserRouter>
          <Route path='/' exact={true} component={Home}  />
          <Route path='/sign-in' component={SignIn} />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
