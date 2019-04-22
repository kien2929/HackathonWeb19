import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {} from 'reactstrap';
import NavBarHome from '../components/NavBarHome';
import Caro from '../components/home/Caro'
const Home = (props) => {
    return (
        <div>
            <NavBarHome></NavBarHome>
            
            <div style={{marginLeft:'6%',marginTop:'7px',width:'88%'}}>
                <div style={{ width: '70%',display:'inline-block',float:'left' }}><Caro></Caro></div>
                <div style={{width:'27%',display:'inline-block',float:'left',marginLeft:'9px'}}> 
                    <img src="https://cellphones.com.vn/media/ltsoft/promotion/Right-banner_SS_2004.png" style={{width:'100%',marginBottom:'9px'}} alt=""/>
                    <img src="https://cellphones.com.vn/media/ltsoft/promotion/Rightbanner_iphone_0804.png" style={{width:'100%'}} alt=""/>
                    </div>
            </div>
        </div>
    );
}
export default Home
