import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {} from 'reactstrap';
import NavBarHome from '../components/NavBarHome';
const Sanpham = (props) => {
    
    return (
        <div>
        <link href="//netdna.bootstrapcdn.com/bootstrap/3.0.0/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css" />
        {/*---- Include the above in your HEAD tag --------*/}
        <div className="carousel slide article-slide" id="article-photo-carousel">
        <script>interval: false</script>
          {/* Wrapper for slides */}
          <div className="carousel-inner cont-slider">
            <div className="item active">
              <img alt title src="http://placehold.it/600x400" />
            </div>
            <div className="item">
              <img alt title src="http://placehold.it/600x400" />
            </div>
            <div className="item">
              <img alt title src="http://placehold.it/600x400" />
            </div>
            <div className="item">
              <img alt title src="http://placehold.it/600x400" />
            </div>
          </div>
          {/* Indicators */}
          <ol className="carousel-indicators">
            <li className="active" data-slide-to={0} data-target="#article-photo-carousel">
              <img alt src="http://placehold.it/250x180" />
            </li>
            <li className data-slide-to={1} data-target="#article-photo-carousel">
              <img alt src="http://placehold.it/250x180" />
            </li>
            <li className data-slide-to={2} data-target="#article-photo-carousel">
              <img alt src="http://placehold.it/250x180" />
            </li>
            <li className data-slide-to={3} data-target="#article-photo-carousel">
              <img alt src="http://placehold.it/250x180" />
            </li>
          </ol>
        </div>
      </div>
    );
  }
export default Sanpham