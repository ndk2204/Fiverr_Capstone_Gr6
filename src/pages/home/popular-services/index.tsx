import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

export default function PopularServices() {
  var settings = {
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    initialSlide: 1,
    responsive: [
      {
        breakpoint: 1240,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
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
          slidesToShow: 2,
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
    <div className="services">
      <h1>Popular professional services</h1>
      <Slider {...settings} className="listServices">
        <div className="item">
          <div className="itemServices1">
            <p>Color your dream</p>
            <h2>Illustration</h2>
          </div>
        </div>
        <div className="item">
          <div className="itemServices2">
            <p>Unlock growth online</p>
            <h2>SEO</h2>
          </div>
        </div>
        <div className="item">
          <div className="itemServices3">
            <p>Learn more</p>
            <h2>Data Entry</h2>
          </div>
        </div>
        <div className="item">
          <div className="itemServices4">
            <p>Add talent</p>
            <h2>AI Artists</h2>
          </div>
        </div>
        <div className="item">
          <div className="itemServices5">
            <p>Build your hand</p>
            <h2>Logo Design</h2>
          </div>
        </div>
        <div className="item">
          <div className="itemServices6">
            <p>Share your</p>
            <h2>Voice Over</h2>
          </div>
        </div>
        <div className="item">
          <div className="itemServices7">
            <p>Reach more customers</p>
            <h2>Social Media</h2>
          </div>
        </div>
      </Slider>
    </div>
  );
}
