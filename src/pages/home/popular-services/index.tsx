import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Link } from "react-router-dom";

export default function PopularServices() {
  var settings = {
    arrows: true,
    infinite: true,
    speed: 300,
    slidesToShow: 5,
    slidesToScroll: 2,
    initialSlide: 1,
    responsive: [
      {
        breakpoint: 1240,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
          infinite: true,
        },
      },
      {
        breakpoint: 1060,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    // <Link to={"/danhsach/Design"}> Design</Link>

    <div className="services">
      <h1>Popular professional services</h1>
      <Slider {...settings} className="listServices">
        <div className="item">
          <div className="itemServices1">
            <Link to={"/danhsach/Marketing"}>
              <p>Color your dream</p>
              <h2>Marketing</h2>
            </Link>
          </div>
        </div>
        <div className="item">
          <div className="itemServices2">
            <Link to={"/danhsach/Seo"}>
              <p>Unlock growth online</p>
              <h2>SEO</h2>
            </Link>
          </div>
        </div>
        <div className="item">
          <div className="itemServices3">
            <Link to={"/danhsach/Data"}>
              <p>Learn more</p>
              <h2>Data Entry</h2>
            </Link>
          </div>
        </div>
        <div className="item">
          <div className="itemServices4">
            <Link to={"/danhsach/AI"}>
              <p>Add talent</p>
              <h2>AI Artists</h2>
            </Link>
          </div>
        </div>
        <div className="item">
          <div className="itemServices5">
            <Link to={"/danhsach/Logo"}>
              <p>Build your hand</p>
              <h2>Logo Design</h2>
            </Link>
          </div>
        </div>
        <div className="item">
          <div className="itemServices6">
            <Link to={"/danhsach/Voice"}>
              <p>Share your</p>
              <h2>Voice Over</h2>
            </Link>
          </div>
        </div>

        <div className="item">
          <div className="itemServices7">
            <Link to={"/danhsach/Social"}>
              <p>Reach more customers</p>
              <h2>Social Media</h2>
            </Link>
          </div>
        </div>
      </Slider>
    </div>
  );
}
