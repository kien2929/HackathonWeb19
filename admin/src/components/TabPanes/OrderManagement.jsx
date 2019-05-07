import React, { Component } from 'react';
import axios from 'axios';
import config from '../../config';
import './styles/OrderManagement.css';
import {
    Table,
    Button,
    Input,
    Label,
    Row,
    Col,
    Modal,
    ListGroup,
    ListGroupItem,
    FormGroup,
    ButtonDropdown
} from 'reactstrap'


class OrderManagement extends Component {

    constructor(props){
        super(props);
        this.state = {
            tempSuccess : false,
            tempLater : false,
            limitPages : 15 ,
            modalItems : {},
            indexModal : 0,
            isopenModal : false,
            listSuccess : [],
            listLater : [],
            orders : [
                {
                    name : 'Nguyen Hoang Anh',
                    phone : '0972742128',
                    address : 'Thanh Xuan, Ha Noi',
                    production : [{name : 'iphone X', quantity : 3},{name : 'iphone Y', quantity : 3}],
                    price : '60000000'
                },
                {
                    name : 'Nguyen Le Bach',
                    phone : '253851351532',   
                    address : 'Thanh Oai, Ha Noi',
                    production : [{name : 'iphone X', quantity : 3},{name : 'iphone Y', quantity : 3}],
                    price : '1000000'
                },
                {
                    name : 'Nguyen Le Bach',
                    phone : '253851351532',                    
                    address : 'Thanh Oai, Ha Noi',
                    production : [{name : 'iphone X', quantity : 3},{name : 'iphone Y', quantity : 3}],
                    price : '1000000'
                },
                {
                    name : 'Nguyen Le Bach',
                    phone : '253851351532',
                    address : 'Thanh Oai, Ha Noi',
                    production : [{name : 'iphone X', quantity : 3},{name : 'iphone Y', quantity : 3}],
                    price : '1000000'
                }   
                
            ],
            items : [],
        }
    }

    componentDidMount () {
        // call axios
        // axios({
        //     url: `${config.baseUrl}/api/order/`,
        //     method: `get`,
        //   })
        //     .then((response) => {
        //       console.log(response.data);
        //       this.setState({
        //                                                                                                         // upload list-order-data from server
        //         orders : [...this.state.orders , response.data].map( toDoitem => 
        //             {
        //                 return {
        //                     ...toDoitem,
        //                     search : toDoitem.name + toDoitem.address + toDoitem.production
        //                 }
        //             }
        //         ),
        //         items :  [...this.state.orders , response.data].map( toDoitem => 
        //             {
        //                 return {
        //                     ...toDoitem,
        //                     search : toDoitem.name + toDoitem.address + toDoitem.production
        //                 }
        //             }
        //         ),                     
        //       });
        //     })
        //     .catch((error) => console.log(error)); 

            //setState
            this.setState({
                                                                                                                // upload list-order-data from server
                orders : [...this.state.orders].map( toDoitem => 
                    {
                        return {
                            ...toDoitem,
                            search : toDoitem.name + toDoitem.address + toDoitem.production
                        }
                    }
                ),
                items :  [...this.state.orders].map( toDoitem => 
                    {
                        return {
                            ...toDoitem,
                            search : toDoitem.name + toDoitem.address + toDoitem.production
                        }
                    }
                ),                     
              });
    }
    
    toggle =()=>{
        this.setState({
            isopenModal : !this.state.isopenModal                                //hien thi modal
        })
    }

    handleClickRow = (item, index) => {
        let j ='';
        item.production.map((temp, i)=>(j=j+temp.name + ' ,' ))
        item.sp =j;
        this.setState({
            isopenModal : !this.state.isopenModal,                               //bat su kien slick row
            modalItems : item,
            indexModal : index
        })
    }

    successOrderForm = (index) => {
        let item = this.state.orders[index];
        let objects = this.state.orders[index];
        objects.time = new Date();
        this.setState({
            orders : this.state.orders.filter((todoItem)=>{                       //update list orders hien thi danh sach mua hang
              if(todoItem === item) return false;
              else return true;
            }),
            listSuccess :[...this.props.tempSuccess, objects],                            //update list success, va delete from header.jsx + time
            isopenModal : !this.state.isopenModal,
            tempSuccess : true,
            items : this.state.orders.filter((todoItem)=>{                       //update list orders hien thi danh sach mua hang
                if(todoItem === item) return false;
                else return true;
              }),
        })  

    }

    laterOrderForm = (index) => {
        let item = this.state.orders[index];
        let objects = this.state.orders[index];
        objects.time = new Date();
        this.setState({
            orders : this.state.orders.filter((todoItem)=>{                       //update list orders hien thi danh sach mua hang
              if(todoItem === item) return false;
              else return true;
            }),
            listLater :[...this.props.tempLater, objects],                            //update list later, va delete from header.jsx + time
            isopenModal : !this.state.isopenModal,
            tempLater : true,
            items : this.state.orders.filter((todoItem)=>{                       //update list orders hien thi danh sach mua hang
                if(todoItem === item) return false;
                else return true;
              }),
        })  
    }

    cancelOrderForm = (index) => {
        let item = this.state.orders[index];
        this.setState({
            orders : this.state.orders.filter((todoItem)=>{                        //su kien cancel form modal
              if(todoItem === item) return false;
              else return true;
            }),
            isopenModal : !this.state.isopenModal,
            items : this.state.orders.filter((todoItem)=>{                       //update list orders hien thi danh sach mua hang
                if(todoItem === item) return false;
                else return true;
              }),
          })
        
    }

    handlePages = (e) => {
        this.setState({
            limitPages : e.target.value,                                            //hien thi so dong trong trang
        });
    }

    handleSearch = (e) => {
        let updatedList = this.state.orders;
        updatedList = updatedList.filter(function(item){
            return item.search.toLowerCase().search(
              e.target.value.toLowerCase()) !== -1;
          });
          this.setState({items: updatedList});                                                                 //serach theo ten
    }

    

    render() {

        console.log(this.state.modalItems);
        let _arrayobj = this.state.items.slice(0, this.state.limitPages);           //lay chuoi list theo do dai

        if(this.state.tempSuccess === true) {
            this.props.listSuccess(this.state.listSuccess);                          //dkien update list-success later handle input change
            this.setState({
                tempSuccess : false
            })
        }

        if(this.state.tempLater === true) {
            this.props.listLater(this.state.listLater);                          //dkien update list-success later handle input change
            this.setState({
                tempLater : false
            })
        }

        return (
            
            <div className="container-fluid my-4">
              <Row>
                  <Col sm='1'></Col>
                  <Col sm='10' className='listOrder'>
                <h2>Order Management</h2>
                <Row className='my-3'>
                    <Col sm='1'> 
                        <FormGroup>
                            <Label for="pages">Pages</Label>
                            <Input onChange={this.handlePages} type="select" name="pages" id="pages">
                                <option>15</option>
                                <option>25</option>
                            </Input>
                        </FormGroup>
                    </Col>
                    <Col sm='9'></Col>
                    <Col sm='2'>
                        <FormGroup>
                            <Label style = {{'fontWeight' : 'bold'}} for="search" className='ml-0'>Search</Label>
                            <Input onChange={this.handleSearch} type="text" name="search" id="search" placeholder="KeyName" />
                        </FormGroup>
                    </Col>
                </Row>
                <Table hover>
                    <thead style={{backgroundColor : '#f5f6fa'}}>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Phone Number</th>
                            <th>Address</th>
                            <th>Production</th>
                            <th>Price (VND) <ButtonDropdown direction="up"></ButtonDropdown></th>
                        </tr>
                    </thead>
                    <tbody>
                        {_arrayobj.map((item, index) => { return (
                            <tr className='tablebody' key={index} onDoubleClick = { (e) => {this.handleClickRow(item, index)}}>
                                <th>{index + 1}</th>
                                <td>{item.name}</td>
                                <td>{item.phone}</td>
                                <td>{item.address}</td>
                                <td>{item.production.map((temp,indexx)=>(
                                    <p key={indexx}> {temp.name} * ({temp.quantity})  </p>
                                ))}</td>

                                <td>{item.price}</td>
                            </tr>
                        )})}
                    </tbody>
                  <Modal 
                    className='CustomModal container-fluid'
                    isOpen={this.state.isopenModal}
                    toggle={this.toggle}>

                    <h3 style = {{'textAlign' : 'center'}}>Don hang</h3>
                    <ListGroup>
                    <ListGroupItem>id : {this.state.indexModal}</ListGroupItem>
                        <ListGroupItem>Name : {this.state.modalItems.name}</ListGroupItem>
                        <ListGroupItem>Phone : {this.state.modalItems.phone}</ListGroupItem>
                        <ListGroupItem>Address : {this.state.modalItems.address}</ListGroupItem>
                        <ListGroupItem>Prodcution : {this.state.modalItems.sp}</ListGroupItem>
                        <ListGroupItem>Price : {this.state.modalItems.price}</ListGroupItem>
                    </ListGroup>

                    <Button className="my-2" color="success" onClick={(e)=>{this.successOrderForm(this.state.indexModal)}}>Success</Button>
                    <Button className="my-2" color="secondary" onClick={(e)=>{this.laterOrderForm(this.state.indexModal)}}>Later</Button>
                    <Button className="my-2" color="danger" onClick={(e)=>{this.cancelOrderForm(this.state.indexModal)}}>Delete</Button>

                  </Modal>
                </Table>

                  </Col>
                  <Col sm='1'></Col>
              </Row>
                
            </div>
        );
    }
}

export default OrderManagement;
