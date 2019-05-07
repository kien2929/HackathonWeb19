import React, { Component } from '../node_modules/react';
// import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import SignIn from './pages/SignIn';
import SanPham from './pages/Sanpham';
import Ketqua from './pages/Ketqua';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { BrowserRouter, Route } from '../node_modules/react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
      <BrowserRouter>
          <Route path='/' exact={true} component={Home}  />
          <Route path='/sign-in' component={SignIn} />
          <Route path='/san-pham/:productId' component={SanPham}/>
          <Route path='/search/:searchKey' component={Ketqua} />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
