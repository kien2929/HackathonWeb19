import React, { Component } from 'react';
import axios from 'axios';
import config from '../../config';
import './styles/editProduction.css';
import PrintButton from '../commons/PrintButton';
import Bills from '../commons/Bills';

import {
    Row,
    Col,
    Form,
    FormGroup,
    Input,
    Label,
    Button,
    Table,
     } from 'reactstrap';

     let productions = [{}];
class ListOrderOffline extends Component {

    constructor(props){
        super(props);
        this.state = {
            round : [1],
            ListOrderOffline : [],
            object : {},
            fadeIn : false,
            hello : []
            
            
        }
    }
    addRound = () => {
        productions[this.state.round.length]={};
        let temp = this.state.object;
        temp.production = productions
        this.setState({
            round : [...this.state.round,this.state.round[this.state.round.length -1 ] +1],
            ListOrderOffline : [...this.state.ListOrderOffline, temp]
        })
    }

    toggle = () => {
        
        this.setState({
            fadeIn: !this.state.fadeIn,
        });
        
    }
    
    clickSubmit = (e)=>{
        this.setState ({
            ListOrderOffline : [...this.state.ListOrderOffline, this.state.object],
            object : {},
            fadeIn : false
        })

    }
    

    render() {
        console.log(this.state.ListOrderOffline, this.state.object)
        return (
            <div className='container-fluid my-4'>
                <Row>
                    <Col sm='3'></Col>
                    <Col sm='6' className='body'>
                        <Form className='formPost'>
                            <FormGroup>
                                <Label for="name">Name</Label>
                                <Input onChange={(e)=>{this.setState({object :{...this.state.object, name : e.target.value } })}} name="name" id="name" />
                            </FormGroup>

                            <FormGroup>
                                <Label for="phone">Phone</Label>
                                <Input onChange={(e)=>{this.setState({object :{...this.state.object, phone : e.target.value } })}} name="phone" id="phone" />
                            </FormGroup>

                            <FormGroup>
                                <Label for="address">Address</Label>
                                <Input onChange={(e)=>{this.setState({object :{...this.state.object, address : e.target.value } })}} name="address" id="address" />
                            </FormGroup>
                            <Table hover>
                    <thead style={{backgroundColor : '#f5f6fa'}}>
                        <tr>
                            <th>ID</th>
                            <th>Production</th>
                            <th>Quantity</th>
                            <th>Price ($)</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.round.map((item, index) => { return (
                            <tr className='tablebody' key={index}>
                                <th>{item}</th>
                                <th><Input onChange={(e)=>{productions[index].name=e.target.value}}></Input></th>
                                <th><Input onChange={(e)=>{productions[index].quantity=e.target.value}}></Input></th>
                                <th><Input onChange={(e)=>{productions[index].price=e.target.value}}></Input></th>
                            </tr>
                        )})}
                    </tbody>
                    </Table>
                            <Button onClick={this.addRound}>add round</Button>

                            <PrintButton id={"printbill"} label={"Print Bill"}></PrintButton>
                            <Button onClick={this.clickSubmit} color="success">Success</Button>
                            <Button color="primary" onClick={this.toggle} > Bills </Button>
                        </Form>

                        {this.state.fadeIn === true ? <Bills id={"printbill"}  bills = {this.state.ListOrderOffline}/> : null}
                    </Col>

                </Row>
            </div>
        );
    }
}

export default ListOrderOffline;