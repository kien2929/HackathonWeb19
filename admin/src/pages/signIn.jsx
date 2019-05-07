import React from 'react';
import { Button, Form, FormGroup, Input, NavbarBrand, Navbar } from 'reactstrap';
import config from '../config/index';
import axios from 'axios';
import './styles/signIn.css';


export default class signIn extends React.Component {
  state = {
    username: '',
    password: '',
    islogin : '',
  };
  logIn = async() => {
    
    axios({
      method: 'post',
      url: `${config.baseUrl}/api/auth/login`,
      data: {
          username: this.state.username,
          password: this.state.password
      },
    })
      .then((response) => {
        console.log(response.data.message);        
        if(response.data.message === "Login success") {
          this.setState({
            islogin : true
          })
        }
        else {
          this.setState({
            islogin : false
          })
        } 
      })
      .catch((error) => {console.log(error);
      });
      
  }

  render() {
    
    if(this.state.islogin === true) {
      this.props.islogin(true, this.state.username, this.state.password);
    }
    
    return (
    <div>
        <Navbar className="brand fixed-top" expand="md">
          <NavbarBrand style={{fontSize : '32px', color:'#e84118', fontWeight :'bold', textTransform : 'uppercase'}} href="/">CellPhoneS</NavbarBrand>
        </Navbar>
      <Form className='container-fluid formSignIn' style={
        {
          width: '100%',
          maxWidth: '500px',
          backgroundColor: 'whitesmoke',
        }
      }>
        <h4>Sign in with your Account</h4>
        <FormGroup className='my-3'>

          <Input
            style={{ marginBottom: '4px' }}
            name="user"
            id="user"
            placeholder="Username"
            // value={this.state.username}
            onChange={(e) => { this.setState({username:e.target.value}) }} />
        </FormGroup>
        <FormGroup className='my-3' >
          <Input
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            // value={this.state.password}
            onChange={(e) => { this.setState({password:e.target.value})}} />
            {this.state.islogin === false ? (<p className="text-danger">SignIn fail!</p>) : null}
        </FormGroup>
        
        <Button onClick={this.logIn}>Sign In</Button>
      </Form>
    </div>
    );
}
}
