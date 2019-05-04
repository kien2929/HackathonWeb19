import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Table} from 'reactstrap';
const TopProduct = (props) => {
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
            {/* <th scope="row">1</th> */}
            <th><a href='/san-pham'><img src='https://cellphones.com.vn/media/catalog/product/cache/7/small_image/220x175/9df78eab33525d08d6e5fb8d27136e95/6/3/636872943529900358_samsung-galaxy-a50-trang-1.png' width='20%' /><br/>Iphone X</a></th>
            <th><a href='#'><img src='https://cellphones.com.vn/media/catalog/product/cache/7/small_image/220x175/9df78eab33525d08d6e5fb8d27136e95/6/3/636872943529900358_samsung-galaxy-a50-trang-1.png' width='20%' /><br/>Iphone X</a></th>
            <th><a href='#'><img src='https://cellphones.com.vn/media/catalog/product/cache/7/small_image/220x175/9df78eab33525d08d6e5fb8d27136e95/6/3/636872943529900358_samsung-galaxy-a50-trang-1.png' width='20%' /><br/>Iphone X</a></th>
            <th><a href='#'><img src='https://cellphones.com.vn/media/catalog/product/cache/7/small_image/220x175/9df78eab33525d08d6e5fb8d27136e95/6/3/636872943529900358_samsung-galaxy-a50-trang-1.png' width='20%' /><br/>Iphone X</a></th>
            <th><a href='#'><img src='https://cellphones.com.vn/media/catalog/product/cache/7/small_image/220x175/9df78eab33525d08d6e5fb8d27136e95/6/3/636872943529900358_samsung-galaxy-a50-trang-1.png' width='20%' /><br/>Iphone X</a></th>
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
export default TopProduct