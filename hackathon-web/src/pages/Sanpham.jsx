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
      orderName: '',
      orderPhone: '',
      orderAddress: '',
      orderProduction: [],
      path: []

    }
    this.toggle = this.toggle.bind(this);

  }
  toggle() {
    this.setState(state => ({ collapse: !state.collapse }));
  }
  buy() {
    console.log(this.state)
    axios({
      url: `${config.baseUrl}/api/orders`,
      method: `post`,
      data: [this.state.orderAddress,
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
        console.log(response.data.path.data);
        this.setState({
          id: response.data._id,
          name: response.data.data.name,
          price: response.data.data.romColorPrice[0][2],
          ram: response.data.data.ram,
          rom: response.data.data.rom,
          path: [...response.data.path.data]
        });
        console.log(`http://localhost:3001/open-image?image_name=${this.state.path[0].replace(`public\\images\\`, '')}`)
      })
      .catch((error) => console.log(error));
  }
  render() {
    return (
      <div>
        <NavBarHome></NavBarHome>
        <div>
          <Row style={{ marginLeft: '5%', marginTop: '30px' }}>
            <Col sm='5'>
              <Carousel autoPlay >
                {this.state.path.map((item) => {
                  return <div style={{backgroundColor:'white'}} >
                    <img src={`http://localhost:3001/open-image?image_name=${item.replace(`public\\images\\`, '')}`} height='' alt='' />
                  </div>;
                })}
                <div style={{backgroundColor:'white'}}>
                  <p>ha</p>
                  <img src="https://cellphones.com.vn/media/catalog/product/cache/7/thumbnail/9df78eab33525d08d6e5fb8d27136e95/p/h/photo_2019-04-02_13-44-01.jpg" height='' />
                </div>
              </Carousel>
            </Col>
            <Col sm='4' style={{ textAlign: 'left' }}>
              <p style={{ fontWeight: 'bold' }}><h5>THÔNG TIN SẢN PHẨM</h5> </p>
              <p style={{ color: 'red', fontWeight: 'bold' }}>Giá: {this.state.price} đ</p>
              <p>Tên: {this.state.name}
                <br />Ram: {this.state.ram}
                <br />Bộ nhớ:{this.state.rom}
                <br />
              </p>
              <Button className='bg-danger' onClick={this.toggle}>Mua hàng</Button>
              <Collapse isOpen={this.state.collapse}>
                <Card>
                  <CardBody>
                    <Form>
                      <FormGroup>
                        Tên Khách Hàng
                        <Input type='name' id='name' onChange={e => this.setState({
                          orderName: e.target.value
                        })}></Input>
                        Địa Chỉ
                        <Input type='name' id='address' onChange={e => this.setState({
                          orderAddress: e.target.value
                        })} ></Input>
                        Số điện thoại
                        <Input type='number' id='phone' onChange={e => this.setState({
                          orderPhone: e.target.value
                        })}></Input>
                        Số lượng
                        <Input type="select" name="select" id="number" onChange={e => this.setState({
                          orderNumber: e.target.value
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