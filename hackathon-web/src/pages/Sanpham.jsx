import React from "react";
import {
  Row, Col, Collapse, Card,
  CardBody,
  Form, FormGroup,
  Input
} from 'reactstrap';
import { Carousel } from "react-responsive-carousel";
import NavBarHome from '../components/NavBarHome';
import axios from 'axios'
import Button from "reactstrap/lib/Button";
import config from '../config/index'

class Sanpham extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      id: '',
      name: '',
      prince: '',
      orderName:'',
      orderPhone:'',
      orderAddress:'',
      orderNumber:''
      
    }
    this.toggle = this.toggle.bind(this);

  }
  toggle() {
    this.setState(state => ({ collapse: !state.collapse }));
  }
  buy(){
    axios({
      url: `${config.baseUrl}/api/orders`,
      method: `post`,
      data:[this.state.orderAddress,
      this.state.orderPhone,
    this.state.orderAddress,
    this.state.orderNumber
  ]
    })
      .then((response) => {
        // console.log(response.data);
        // this.setState({
        //   id: response.data._id,
        //   name: response.data.name,
        //   price: response.data.price,
        // });
      })
      .catch((error) => console.log(error));
  }
  componentDidMount() {
    // get gameid
    const pathname = this.props.location.pathname;
    const productId = pathname.split('/')[pathname.split('/').length - 1];
    // cal ajax
    axios({
      url: `${config.baseUrl}/api/posts/get-product-by-id?productId=${productId}`,
      method: `get`,
    })
      .then((response) => {
        console.log(response.data);
        this.setState({
          id: response.data._id,
          name: response.data.name,
          price: response.data.price,
        });
      })
      .catch((error) => console.log(error));
  }
  render() {
    return (
      <div>
        <NavBarHome></NavBarHome>
        <div>
          <Row style={{ marginLeft: '5%', marginTop: '30px' }}>
            <Col sm='4'>
              <Carousel autoPlay >
                <div>
                  <img src="http://lorempixel.com/output/cats-q-c-640-480-1.jpg" />
                  <p className="legend">Hình 1</p>
                </div>
                <div>
                  <img src="http://lorempixel.com/output/cats-q-c-640-480-2.jpg" />
                  <p className="legend">Hình 2</p>
                </div>
                <div>
                  <img src="http://lorempixel.com/output/cats-q-c-640-480-3.jpg" />
                  <p className="legend">Hình 3</p>
                </div>
              </Carousel>
            </Col>
            <Col sm='4' style={{ textAlign: 'left' }}>
              <p style={{ fontWeight: 'bold' }}><h5>THÔNG TIN SẢN PHẨM</h5> </p>
              <p style={{ color: 'red', fontWeight: 'bold' }}>Giá: {this.state.price} đ</p>
              <p>Tên: {this.state.name}
                <br />Ram:
              <br />Bộ nhớ:
              <br />
              </p>
              <Button className='bg-danger' onClick={this.toggle}>Mua hàng</Button>
              <Collapse isOpen={this.state.collapse}>
                <Card>
                  <CardBody>
                    <Form>
                      <FormGroup>
                        Tên Khách Hàng
                        <Input type='name' id='name' onChange={e=>this.setState({
                          orderName:e.target.value
                        })}></Input>
                        Địa Chỉ
                        <Input type='name' id='address' onChange={e=>this.setState({
                          orderAddress:e.target.value
                        })} ></Input>
                        Số điện thoại
                        <Input type='number' id='phone' onChange={e=>this.setState({
                          orderPhone:e.target.value
                        })}></Input>
                        Số lượng
                        <Input type="select" name="select" id="number" onChange={e=>this.setState({
                          orderNumber:e.target.value
                        })}>
                          <option>1</option>
                          <option>2</option>
                          <option>3</option>
                          <option>4</option>
                          <option>5</option>
                        </Input>
                        <br></br>
                        <Button onClick={this.buy} color="success">Đặt hàng</Button>
                      </FormGroup>
                    </Form>
                  </CardBody>
                </Card>
              </Collapse>
            </Col>
          </Row>
        </div>
      </div>)
  }
};
export default Sanpham