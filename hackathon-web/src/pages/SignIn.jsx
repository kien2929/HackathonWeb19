import React from 'react';
import { Button, Form, FormGroup, Input, } from 'reactstrap';
import config from '../config';
import axios from 'axios';

export default class SignIn extends React.Component {
  state = {
    username: '',
    password: ''
  };
  logIn = async () => {
    axios({
      method: 'post',
      url: `${config.baseUrl}/api/auth/login`,
      data: {
          username: this.state.username,
          password: this.state.password
      },
    })
      .then((response) => {
        console.log(response.data.message)
;        console.log(this.state.password)
      })
      .catch((error) => {console.log(error);
      })
      ;
  }

  render() {
    return (
      <Form style={
        {
          width: '100%',
          maxWidth: '330px',
          padding: '15px',
          margin: 'auto',
          marginTop: '150px'
          , backgroundColor: 'whitesmoke',
          borderRadius:'25px'
        }
      }>
        <h4>Sign in with your Account</h4>
        <FormGroup >
          <Input
            style={{ marginBottom: '4px' }}
            type="text"
            name="user"
            id="user"
            placeholder="Username"
            // value={this.state.username}
            onChange={(e) => { this.setState({username:e.target.value})
            ; }} />
        </FormGroup>
        <FormGroup >
          <Input
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            // value={this.state.password}
            onChange={(e) => { this.setState({password:e.target.value}) }} />
        </FormGroup>
        <Button onClick={this.logIn}>Sign In</Button>
      </Form>
    );
  }
}