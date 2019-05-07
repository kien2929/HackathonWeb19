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
      <div style={{ marginLeft:'-15px',width:'103%',backgroundImage:'url("https://lh3.googleusercontent.com/pxlQA1jOyyLzuO_w5MXHOwsntUbcFhH848-aacZCmj91by0ZZcWk8aDDJ1KGwFyM1NO6v7vb_YcOHIwLmPVVTbJut6j7a9hX7yRUAaLYKougxQnG3lvifEK5L9btDpBCs4f5A51bZFvc0XvffWlJSZVzWypn4RT70uxdFhBB2NI-0q-BrPPGmGYbqavpMgSNurFGMzUaL9UoGasFBybbjH4CnYR2TccmF0NjszBGXhMWiQg2lByhDVZL_z6QjumTC_NhYD3W9GqAgtlf7MLMvFbf5t6g2mlqzdRmY7f8QX8BolZRxz6O88U0u4D2fG7laU4iYSeRVGl_F6hux26vVCgaEInd2uzXL28_nQN2WZcZvOa0ncFfUIE02G3eOWsiwUWSIOr26YqsF3afcl9uAlzfCWPGuQhHxkPpOpCAJ51YYQOht5HT__U7oNsvbes8CwChI2jwUueWKKs9PKTd_fGiCExVmtaZNqugseclrtrWPu-CXGjegUkYiuNUZqdIUdzg7C8ptvvYcCVEMLqJfy8E5pNZFu2no5Fw06J488aeafAv9ycCe41YGMUHTvEjYQ9xf2AkKXjfpcRul4GQdYxZuBb9lRznQOdUF9ttJ32y3tPDpstGbL_yRgKcQXveSckQQmZhrGnWQD1sApwnyMOkQvqaxPRSgzbRE7C98NTLWQNST_PrGCNULmHiRHTYUSbc8NkqV2iwkDuOD-QnxFfq=w1112-h625-no")'}}>
       <div><h4 style={{color:'white',display:'block',paddingTop:'12%'}}></h4></div>
        <div  style={
        {
          width: '100%',
          maxWidth: '330px',
          padding: '15px',
          marginBottom: '240px',
          marginLeft:'38%',
          backgroundColor: 'whitesmoke',
          borderRadius:'25px',
          display:'block'
        }
      } >
        <Form className='container-fluid'>
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
    </div>
    <div><p>i</p></div>
    </div>
    );
  }
}