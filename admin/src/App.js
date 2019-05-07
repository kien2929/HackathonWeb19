import React, { Component } from 'react';
import axios from 'axios';
import config from './config/index';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Header from './pages/header';
import SignIn from './pages/signIn';
class App extends Component {
  state = {
    username: '',
    password: '',
    isLogin : false,

  }
  islogin = (item, user, pass) => {
    this.setState({
      isLogin : item,
      username : user,
      password : pass
    })
  }

  setLogout = (item) => {
    this.setState({
      isLogin : !item
    })

    axios({
      method: 'post',
      url: `${config.baseUrl}/api/logout`,
    })
      .then((response) => {
        console.log(response.data.message);        
      })
      .catch((error) => {console.log(error);
      });
  }
  render() {
    return (
      <div className="App">
        {/* <Header user ={this.state.username} pass={this.state.password} islogout={this.setLogout}/> */}
        {this.state.isLogin === false ? <SignIn islogin = {this.islogin}/> : <Header user ={this.state.username} pass={this.state.password} islogout={this.setLogout}/> }
      </div>
    );
  }
}

export default App;