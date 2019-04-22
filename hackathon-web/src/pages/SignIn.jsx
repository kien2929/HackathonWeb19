import React from 'react';
import { Button, Form, FormGroup, Input, } from 'reactstrap';

export default class SignIn extends React.Component {
  render() {
    return (
      <Form style={
        { width: '100%',
            maxWidth: '330px',
            padding: '15px',
            margin: 'auto',
        marginTop:'150px'
    ,backgroundColor:''}
    }>
    <h4>Sign in with your Account</h4>
        <FormGroup >
          <Input style={{marginBottom:'4px'}} type="text" name="user" id="user" placeholder="Username" />
          </FormGroup>
          <FormGroup >
          <Input type="password" name="password" id="password" placeholder="Password" />
        </FormGroup>
        <Button>Sign In</Button>
      </Form>
       );
    }
  }