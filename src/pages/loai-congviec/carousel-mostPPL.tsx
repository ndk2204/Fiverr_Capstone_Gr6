import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Link } from "react-router-dom";

export default function MostPopular() {
  var settings = {
    arrows: true,
    infinite: true,
    speed: 300,
    slidesToShow: 5,
    slidesToScroll: 2,
    initialSlide: 0,
  };
  return (
    <div className="mostPopular">
      <Slider {...settings} className="listmostPopular">
        <div className="item">
          <div className="itemmostPopular">
            <Link to={"/danhsach/Logo"}>
              <img src="/src/assets/img-mostppl/Logo design_2x.png" />
              <h4>Minimalist Logo Design</h4>
              <i className="fa-solid fa-arrow-right"></i>
            </Link>
          </div>
        </div>
        <div className="item">
          <div className="itemmostPopular">
            <Link to={"/danhsach/Design"}>
              <img src="/src/assets/img-mostppl/Architecture _ Interior Design_2x.png" />
              <h4>Architecture & Interior Design</h4>
              <i className="fa-solid fa-arrow-right"></i>
            </Link>
          </div>
        </div>
        <div className="item">
          <div className="itemmostPopular">
            <Link to={"/danhsach/Editing"}>
              <img src="/src/assets/img-mostppl/Photoshop Editing_2x.png" />
              <h4>Image Editing</h4>
              <i className="fa-solid fa-arrow-right"></i>
            </Link>
          </div>
        </div>
        <div className="item">
          <div className="itemmostPopular">
            <Link to={"/danhsach/Merchading"}>
              <img src="/src/assets/img-mostppl/T-Shirts _ Merchandise_2x.png" />
              <h4>T-Shirts & Merchading</h4>
              <i className="fa-solid fa-arrow-right"></i>
            </Link>
          </div>
        </div>
        <div className="item">
          <div className="itemmostPopular">
            <Link to={"/danhsach/Ai"}>
              <img src="/src/assets/img-mostppl/ai atrists.png" />
              <h4>Ai Atrists</h4>
              <i className="fa-solid fa-arrow-right"></i>
            </Link>
          </div>
        </div>
        <div className="item">
          <div className="itemmostPopular">
            <Link to={"/danhsach/Illustration"}>
              <img src="/src/assets/img-mostppl/Illustration_2x.png" />
              <h4>Illustration</h4>
              <i className="fa-solid fa-arrow-right"></i>
            </Link>
          </div>
        </div>
        <div className="item">
          <div className="itemmostPopular">
            <Link to={"/danhsach/Web"}>
              <img src="/src/assets/img-mostppl/Web Design.png" />
              <h4>Web Design</h4>
              <i className="fa-solid fa-arrow-right"></i>
            </Link>
          </div>
        </div>
      </Slider>
    </div>
  );
}
