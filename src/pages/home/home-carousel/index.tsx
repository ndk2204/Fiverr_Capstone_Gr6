import React, { useRef } from "react";
// import { Carousel } from "antd";
// import { CarouselRef } from "antd/es/carousel";

import css from "./carousel.module.scss";
import HeaderIndex from "src/templates/base/header/headerIndex";

function HomeCarousel() {
  return (
    <>
      <div className="headerIndex ">
        <div className="carousel">
          <HeaderIndex />
          <div className="headerLeft">
            <h1 className="header-title">
              Find the perfect <i>freelance</i> service for your bussiness
            </h1>
            <form className="searchHome">
              <input
                type="text"
                placeholder="Search for any services ... "
              />
              <button className="btn btn-success btnSearch" type="button">
                Search
              </button>
            </form>
            <div className="popular">
              Popular:  
              <ul>
                <li>
                  <a href="">Website Design</a>
                </li>
                <li>
                  <a href="">WordPress</a>
                </li>
                <li>
                  <a href="">Logo Design</a>
                </li>
                <li>
                  <a href="">Dropshipping</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomeCarousel;
