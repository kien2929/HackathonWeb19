import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Table } from 'reactstrap';
import axios from 'axios'
import config from '../../config/index'
class TopProduct extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      products: []
    }
  }

  componentDidMount() {
    axios.get(`${config.baseUrl}/api/posts/products-view`)
      .then((response) => {
        response.data.data.forEach((item) => {
          this.setState({
            products: [...this.state.products, {
              id: item._id,
              name: item.name,
              price: item.price
            }]
          })
        });
        console.log(this.state.products);
      })
      .catch((error) => {
        console.log(error);
      })
  }
  render() {
    return (
      <Table style={{ border: '2px solid red' }}>
        <thead>
          <tr>
            <th style={{ backgroundColor: '#f46241' }}></th>
            <th style={{ backgroundColor: '#f46241' }}></th>
            <th style={{ backgroundColor: '#f46241' }}><p className='topproduct-title'>SẢN PHẨM XEM NHIỀU</p></th>
            <th style={{ backgroundColor: '#f46241' }}></th>
            <th style={{ backgroundColor: '#f46241' }}></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            {this.state.products.map((item, index) => {
              return <th key={index}>
              <a href={`/san-pham/${item.id}`} >
              <img src='https://cellphones.com.vn/media/catalog/product/cache/7/small_image/220x175/9df78eab33525d08d6e5fb8d27136e95/6/3/636872943529900358_samsung-galaxy-a50-trang-1.png' width='50%' alt=' ' />
              <br />{item.name}</a></th>;
            })}
          </tr>
          <tr>
            <th><a href='#'><img src='https://cellphones.com.vn/media/catalog/product/cache/7/small_image/220x175/9df78eab33525d08d6e5fb8d27136e95/6/3/636872943529900358_samsung-galaxy-a50-trang-1.png' width='50%' alt=' ' /><br />Iphone X</a></th>
            <th><a href='#'><img src='https://cellphones.com.vn/media/catalog/product/cache/7/small_image/220x175/9df78eab33525d08d6e5fb8d27136e95/6/3/636872943529900358_samsung-galaxy-a50-trang-1.png' width='50%' alt=' ' /><br />Iphone X</a></th>
            <th><a href='#'><img src='https://cellphones.com.vn/media/catalog/product/cache/7/small_image/220x175/9df78eab33525d08d6e5fb8d27136e95/6/3/636872943529900358_samsung-galaxy-a50-trang-1.png' width='50%' alt=' '/><br />Iphone X</a></th>
            <th><a href='#'><img src='https://cellphones.com.vn/media/catalog/product/cache/7/small_image/220x175/9df78eab33525d08d6e5fb8d27136e95/6/3/636872943529900358_samsung-galaxy-a50-trang-1.png' width='50%' alt=' '/><br />Iphone X</a></th>
            <th><a href='#'><img src='https://cellphones.com.vn/media/catalog/product/cache/7/small_image/220x175/9df78eab33525d08d6e5fb8d27136e95/6/3/636872943529900358_samsung-galaxy-a50-trang-1.png' width='50%' alt=' '/><br />Iphone X</a></th>
          </tr>
        </tbody>
      </Table>
    )
  }
}
export default TopProduct