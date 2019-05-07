import React, { Component } from 'react';
import {Row, Col, Form, FormGroup,Input,Label, Button} from 'reactstrap';
import axios from 'axios';
import config from '../../config/index';
import './styles/setting.css';

let isOldPass = true;
let isRePass = true ;
class Setting extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username : '',
            password : '',
            inputOldPass : '',
            inputNewPass :'',
            inputRePass : '',
            temp : false,
        }
    }
    componentDidMount (){
        this.setState({
            username : this.props.username,
            password : this.props.password,
            inputOldPass : this.props.password,
        })
        
    }

    handleUpdate = async () => {
        
        
            if(isRePass === true && isOldPass === true) {
                this.setState({
                    temp : true
                })

                axios({
                    method: 'post',
                    url: `${config.baseUrl}/api/auth/updatepass`,
                    data: {
                        username: this.state.username,
                        password: this.state.inputNewPass
                    },
                  })
                    .then((response) => {
                      console.log(response.data.message);        
                    })
                    .catch((error) => {console.log(error);
                    });
            }
        }
    

    render() {
        console.log('dkm',this.state.password)
        if(this.state.inputOldPass === this.state.password) {
                isOldPass = true;
                console.log(isOldPass);
        }
        else isOldPass = false;

        if(this.state.inputRePass === this.state.inputNewPass) {
            isRePass = true;
        }
        else isRePass = false;

        return (
            <div className='container-fluid'>
                <Row>
                    <Col sm='3'></Col>
                    <Col sm='6'>
                        <div>wellcome, {this.props.username}</div>
                        <Form className='formSetting'>
                            <FormGroup >
                                <Label for="old-pass">Old Password</Label>
                                <Input onChange={(e)=>{this.setState({inputOldPass : e.target.value})}} id="old-pass" placeholder=''></Input>
                                {isOldPass === true ? null : <p className="text-danger">password error</p> }
                            </FormGroup>
                            <FormGroup >
                                <Label for='new-pass'>New Password</Label>
                                <Input onChange={(e)=>{this.setState({inputNewPass : e.target.value})}} id="new-pass" placeholder=''></Input>
                            </FormGroup>
                            <FormGroup >
                                <Label for="re-pass">Re-Password</Label>
                                <Input onChange={(e)=>{this.setState({inputRePass : e.target.value})}} id="re-pass" placeholder=''></Input>
                                {isRePass === true ? null : <p className="text-danger">Re-password incorrect</p>}
                            </FormGroup>
                            {this.state.temp === true ? <p className="text-success">Change password success!</p> : null}
                            <Button color="success" onClick={this.handleUpdate}>Update</Button>
                        </Form>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default Setting;