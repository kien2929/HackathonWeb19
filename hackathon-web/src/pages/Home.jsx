import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {} from 'reactstrap';
import NavBarHome from '../components/NavBarHome';
import Caro from '../components/home/Caro';
import TopProduct from '../components/home/TopProduct'
import TopBuy from '../components/home/TopBuy'
const Home = (props) => {
    return (
        <div style={{backgroundColor: "#FAFAFA",width:'100%'}}>
            <NavBarHome></NavBarHome>
            
            <div className='row' style={{marginLeft:'6%',marginTop:'7px',width:'88%'}}>
                <div style={{ width: '72%',display:'inline-block',float:'left' }}><Caro></Caro></div>
                <div style={{width:'27%',display:'block',float:'left',marginLeft:'9px'}}> 
                    <img src="https://lh3.googleusercontent.com/ikjaIBhKdNU3zB4SIXjTOdxD-ayi6_QHLXF8Hd9MiJRDVI0-CR-ihCYEWLYudUF4G7i1kUMdEQWsOjmHesYYqagP3bJ7ECES0HktpDd6AeDBpUjD5elBCQ9Quja1S5jCSUur8E-bKFH1SHpHBWRj70HUTHZnimpilPyThb0FXtADzmDcTIqnsChY1zqrzlicpBGKJO8c4UZGybTSYcKQZ6riv3JRsvjJDrJZo9dEoRGCEaSGkUGOEDjntIkKDhggumV1xB0hK7W4Ok8DSc-TCQc4LimQmCzQhAPNRZ6raX8wKNpoDjutBIdcllp0PTMtyUAfOh56rV0uwL0ByZo3olxzyq6k20YYSrpcaJSJDWmOEtS1isoIlAtf0TTQWdubIrjDPyDvEWxeqRdg_V_rmJbuPWG456HMKzrZWoumEKse8uIKDJe3sg6vH6Mn7iFeCli1v542JqbaeQX6xRH1Jjk6eTXsV9WPWVVtu_chCbzE1ZQxahag4LaAnkuJJ7bbZWwaKjzaNrWjUbRr45svMXZJ2c9SsqEB146qWH_EM71n3NfqxWqq6rOEFVkWDhkqZdc5erRwUyo9fkVDmLH7PIuRjiDEiIUJwYrm894_X-_oX2SSDFe54lUiCFyiRJrAuxUDvcGqb8ShB6jSC0__RRxxeO-gMTksBqgqCUKFADtjYYkwU5r_AredxxRjc71q-JOTLqe4EQitOGJ-zjNulM0G=w750-h350-no" style={{width:'100%',marginBottom:'9px'}} alt=""/>
                    <img src="https://lh3.googleusercontent.com/zGQtke3m7SWNqN12Ib948xRD6GjBY5UTVIGNGjPoCFvh8DsdPubTqKGPqwE0-cojAC5dKeV_INek4bfT_yJrkuh3jfxvfGVPskUlGAQzRz-tDBquQ7KiVVtmx4r7ZpR2Yzv0tancagPbrNSTIHkisbCIw7gIWq4lXGzOJwVEp4R-JKrrt5XwBWe-cQZDEMwRwPyLYvt-CR42Q2SHvwpRbkjs-T9A11GyDjzKC0W7X4vgm0wHD6Gqz56-bYNGlDx3JsBFNSIEYmeam8BWBhEIXz-NvgKKdQCD3wuiCQdyVvkp_5CAz2IBwk9HrSAF3mkCU-4SwQrZtou9iiMW_YE3K53qOvpdFYls0HEjaN67edEBVCJhhT9YFX86pVt8lKMRLxts1lxDieVF-QDrvrrTKDp0s-rNfSdS8_Md0fJrg6bksirpJjvFQ7E1-JJ1JX79YTC6hj9spTTnwP1O8SVODimS3F-zhrRL4xFnreueH7xmmRdl4xUcAv5YdBlW3vqmvwnkZ_ZB-O9yChHoFTif1SFGwXFjvKGtXJ-RyCFBgsoEi7dJKevMaCwE9DFeYw3o-iJy_noB7o45C0DfdLD6CmwR-3zgCsiHfbq6Lr3KUp9F_8tdfVoCF2PHjjathuM0fVhN4Pi8LyqWgHRV2Uq6c-zuOxKTqxMLW8Juh5Ojz6QlQ8BaITUnKgntxwRMzkLkTCzFyBd0S-CkMhky_GXies1O=w750-h350-no" style={{width:'100%'}} alt=""/>
                </div>
            </div>
            <br/><br/><br/>
            <div style={{marginLeft:'6%',marginTop:'10px',width:'86%'}}><TopProduct ></TopProduct></div>
            <br/><br/><br/>
            <div style={{marginLeft:'6%',marginTop:'10px',width:'86%'}}><TopBuy ></TopBuy></div>
            
        </div>
    );
}
export default Home
