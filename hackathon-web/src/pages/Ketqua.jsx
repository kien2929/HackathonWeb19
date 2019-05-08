import React from "react";
import { Col, Row, Form, FormGroup, Input, Label } from 'reactstrap';
import NavBarHome from '../components/NavBarHome';
import axios from 'axios';
import config from '../config/index'
class Ketqua extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      searchName: '',
      products: []
    }
  }
  componentDidMount() {
    const pathname = this.props.location.pathname;
    const productName = pathname.split('/')[pathname.split('/').length - 1];
    productName.replace("%20", " ");
    this.setState({
      searchName: productName,
      products:[]
    })
    axios.get(`${config.baseUrl}/api/posts/products`)
      .then((response) => {
        this.setState({
          products:response.data.data.filter(name => name.data.name.includes(`${this.state.searchName}`))
        })
        console.log(this.state.products);
      })
      .catch((error) => {
        console.log(error);
      })
  }
  render() {
    return (
      <div>
        <NavBarHome></NavBarHome>
        <div style={{
          marginLeft: '6%',
          marginTop: '7px',
          width: '88%',
          textAlign: 'left',
          fontWeight: 'bolder',
          fontSize: '30px'
        }}>Kết quả tìm kiếm của "{this.state.searchName}"</div>
        <hr ></hr>
        <Row>
          <Col xs='12'>
          {this.state.products.map((item, index) => {
              return <th key={index}>
              <a href={`/san-pham/${item._id}`} >
              <img src='https://cellphones.com.vn/media/catalog/product/cache/7/small_image/220x175/9df78eab33525d08d6e5fb8d27136e95/6/3/636872943529900358_samsung-galaxy-a50-trang-1.png' width='50%' alt=' ' />
              <br />Giá {item.data.romColorPrice[0][2]} đ<br/>
              {item.data.name}</a></th>;
            })}
          </Col>
        </Row>
      </div>
    )
  };
}
export default Ketqua