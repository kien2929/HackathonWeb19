import React from "react";
import { Carousel } from "react-responsive-carousel";
import NavBarHome from '../components/NavBarHome';

class Sanpham extends React.Component {
  constructor(props) {
    super(props)
    this.state={
      name:'',
      ram:'',
      memory:'',
      prince:''
    }
  }
  componentDidMount(){
    
  }
  render(){
    return(
  <div>
    <NavBarHome></NavBarHome>
    <br/><br/>
    <div style={{marginLeft:'6%',marginTop:'7px',width:'88%'}}>
      <div style={{width:'40%'}}>
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
  </div>
    </div>
    
  </div>)
  }
};
export default Sanpham