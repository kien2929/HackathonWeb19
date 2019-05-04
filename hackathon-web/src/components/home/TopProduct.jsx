import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Table} from 'reactstrap';
import axios from 'axios'
import config from '../../config/index'
class TopProduct extends React.Component{

  constructor(props){
    super(props)
    this.state={
      products: []
    }
  }
  
  componentDidMount(){
    axios.get(`${config.baseUrl}/api/posts/products`)
    .then((response)=> {
      // this.setState({
      //   id: [...this.state.id, response.data.data[0]._id],
      //   name:[...this.state.name, response.data.data[0].name],
      //   price:[...this.state.price,response.data.data[0].price]
      // })  
      response.data.data.forEach((item) => {
        this.setState({
          // id: [...this.state.id, item._id],
          // name:[...this.state.name, item.name],
          // price:[...this.state.price, item.price]
          products: [...this.state.products, {
            // picture: item.picture,
            id: item._id,
            name: item.name,
            price: item.price
          }]
        }) 
      });
      console.log(this.state.products);
    })
    .catch((error)=> {
      // handle error
      console.log(error);
    })
    .then( () =>{

    });
  }
  render(){
    return (
        <Table style={{border:'2px solid red'}}>
        <thead>
          <tr>
                <th style={{backgroundColor:'#f46241'}}></th>
                <th style={{backgroundColor:'#f46241'}}></th>
                <th style={{backgroundColor:'#f46241'}}>Top sản phẩm</th>
                <th style={{backgroundColor:'#f46241'}}></th>
                <th style={{backgroundColor:'#f46241'}}></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            {/* <th><a href='/san-pham'><img src='https://cellphones.com.vn/media/catalog/product/cache/7/small_image/220x175/9df78eab33525d08d6e5fb8d27136e95/6/3/636872943529900358_samsung-galaxy-a50-trang-1.png' width='20%' /><br/>{this.state.name[0]}</a></th>
            <th><a href='#'><img src='https://cellphones.com.vn/media/catalog/product/cache/7/small_image/220x175/9df78eab33525d08d6e5fb8d27136e95/6/3/636872943529900358_samsung-galaxy-a50-trang-1.png' width='20%' /><br/>{this.state.name[1]}</a></th>
            <th><a href='#'><img src='https://cellphones.com.vn/media/catalog/product/cache/7/small_image/220x175/9df78eab33525d08d6e5fb8d27136e95/6/3/636872943529900358_samsung-galaxy-a50-trang-1.png' width='20%' /><br/>{this.state.name[2]}</a></th>
            <th><a href='#'><img src='https://cellphones.com.vn/media/catalog/product/cache/7/small_image/220x175/9df78eab33525d08d6e5fb8d27136e95/6/3/636872943529900358_samsung-galaxy-a50-trang-1.png' width='20%' /><br/>{this.state.name[3]}</a></th>
            <th><a href='#'><img src='https://cellphones.com.vn/media/catalog/product/cache/7/small_image/220x175/9df78eab33525d08d6e5fb8d27136e95/6/3/636872943529900358_samsung-galaxy-a50-trang-1.png' width='20%' /><br/>{this.state.name[4]}</a></th> */}
            {this.state.products.map((item, index) => {
                return <th key={index}><a href={`/san-pham/${item.id}`} > <img src='https://cellphones.com.vn/media/catalog/product/cache/7/small_image/220x175/9df78eab33525d08d6e5fb8d27136e95/6/3/636872943529900358_samsung-galaxy-a50-trang-1.png' width='20%' /><br/>{item.name}</a></th>;
                })}
          </tr>
          <tr>
          <th><a href='#'><img src='https://cellphones.com.vn/media/catalog/product/cache/7/small_image/220x175/9df78eab33525d08d6e5fb8d27136e95/6/3/636872943529900358_samsung-galaxy-a50-trang-1.png' width='20%' /><br/>Iphone X</a></th>
            <th><a href='#'><img src='https://cellphones.com.vn/media/catalog/product/cache/7/small_image/220x175/9df78eab33525d08d6e5fb8d27136e95/6/3/636872943529900358_samsung-galaxy-a50-trang-1.png' width='20%' /><br/>Iphone X</a></th>
            <th><a href='#'><img src='https://cellphones.com.vn/media/catalog/product/cache/7/small_image/220x175/9df78eab33525d08d6e5fb8d27136e95/6/3/636872943529900358_samsung-galaxy-a50-trang-1.png' width='20%' /><br/>Iphone X</a></th>
            <th><a href='#'><img src='https://cellphones.com.vn/media/catalog/product/cache/7/small_image/220x175/9df78eab33525d08d6e5fb8d27136e95/6/3/636872943529900358_samsung-galaxy-a50-trang-1.png' width='20%' /><br/>Iphone X</a></th>
            <th><a href='#'><img src='https://cellphones.com.vn/media/catalog/product/cache/7/small_image/220x175/9df78eab33525d08d6e5fb8d27136e95/6/3/636872943529900358_samsung-galaxy-a50-trang-1.png' width='20%' /><br/>Iphone X</a></th>
          </tr>
        </tbody>
      </Table>
    )
  }
}
export default TopProduct