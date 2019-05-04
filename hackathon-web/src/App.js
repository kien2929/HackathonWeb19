import React, { Component } from '../node_modules/react';
// import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import SignIn from './pages/SignIn';
import SanPham from './pages/Sanpham'
import { BrowserRouter, Route } from '../node_modules/react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
      <BrowserRouter>
          <Route path='/' exact={true} component={Home}  />
          <Route path='/sign-in' component={SignIn} />
          <Route path='/san-pham' component={SanPham}/>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
