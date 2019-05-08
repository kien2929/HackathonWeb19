import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Table, Row, Col } from 'reactstrap';
import axios from 'axios'
import config from '../../config/index'
class TopProduct extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      products: [],
      products5: [],
      products10: []
    }
  }

  componentDidMount() {
    axios.get(`${config.baseUrl}/api/posts/products-view`)
      .then((response) => {
        response.data.data.forEach((item) => {
          this.setState({
            products: [...this.state.products, {
              id: item._id,
              name: item.data.name,
              price: item.data.price,
              path: [...item.path.data]
            }]
          })
        });
        this.setState({
          products5: this.state.products.slice(0, 5),
          products10: this.state.products.slice(5, 10)
        });
        console.log(this.state.products5)
      })
      .catch((error) => {
        console.log(error);
      })
  }
  render() {
    return (
      <Table style={{}}>
        <Row >
          <Col style={{ backgroundColor: '#f46241',fontWeight:'bold',padding:'10px 0px'}} className='topproduct-title'>SẢN PHẨM XEM NHIỀU</Col>
        </Row>
        <Row>
          {this.state.products5.map((item, index) => {
            return <Col key={index} style={{ backgroundColor: 'white' }}>
              <a style={{ backgroundColor: 'white', width: '15%' }} href={`/san-pham/${item.id}`} >
                <img style={{ backgroundColor: 'white' }} src={`http://localhost:3001/open-image?image_name=${item.path[0].replace(`public\\images\\`, '')}`} height='100px' alt='' />
                <br /><p style={{ width: '' }}>{item.name}</p></a></Col>;
          })}
        </Row>
        <Row>
          {this.state.products10.map((item, index) => {
            return <Col key={index} style={{ backgroundColor: 'white' }}>
              <a href={`/san-pham/${item.id}`} >
                <img src={`http://localhost:3001/open-image?image_name=${item.path[0].replace(`public\\images\\`, '')}`} height='100px' alt='' />
                <br /><p>{item.name}</p></a></Col>;
          })}
        </Row>
      </Table>
    )
  }
}
export default TopProduct