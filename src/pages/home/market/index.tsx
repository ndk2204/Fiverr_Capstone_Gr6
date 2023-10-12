import React from "react";
import { Link } from "react-router-dom";

function Market() {
  return (
    <div className="market">
      <div className="intro">
        <div className="market-left">
          <video className="orca-video" controls>
            <source
              src="https://fiverr-res.cloudinary.com/video/upload/t_fiverr_hd/yja2ld5fnolhsixj3xxw"
              type="video/mp4"
            />
          </video>
        </div>
        <div className="market-right">
          <div className="text-content">
            <h4 className="mb-0">Kay Kim, Co-Founder </h4>
            <p className="mb-0">rooted</p>
          </div>
          <i>
            "It's extremely exciting that Fiverr has freelancers from all over
            the world — it broadens the talent pool. One of the best things
            about Fiverr is that while we're sleeping, someone's working."
          </i>
        </div>
      </div>
      <div className="exploreMarket">
        <h1>Explorer the marketplace</h1>
        <div className="listIcon container">
          <Link to={'/loaiCV/1'} className="item">
            <div className="img">
              <img src="/src/assets/icons/icon-index/graphics-design.svg" />
            </div>
            <h4>Graphics & Design</h4>
          </Link>
          <Link to={'loaiCV/2'} className="item">
            <div className="img">
              <img src="/src/assets/icons/icon-index/marketing.svg" />
            </div>
            <h4>Digital Marketing</h4>
          </Link>
          <Link to={'loaiCV/3'} className="item">
            <div className="img">
              <img src="/src/assets/icons/icon-index//writing.svg" />
            </div>
            <h4>Writing & Translation</h4>
          </Link>
          <Link to={'loaiCV/4'} className="item">
            <div className="img">
              <img src="/src/assets/icons/icon-index/video-animation.svg" />
            </div>
            <h4>Video & Animation</h4>
          </Link>
          <Link to={'loaiCV/5'} className="item">
            <div className="img">
              <img src="/src/assets/icons/icon-index/music-audio.svg" />
            </div>
            <h4>Music & Audio</h4>
          </Link>
          <Link to={'loaiCV/6'} className="item">
            <div className="img">
              <img src="/src/assets/icons/icon-index/programming.svg" />
            </div>
            <h4>Programming & Tech</h4>
          </Link>
          <Link to={'loaiCV/7'} className="item">
            <div className="img">
              <img src="/src/assets/icons/icon-index/lifestyle.svg" />
            </div>
            <h4>Lifestyle</h4>
          </Link>
          <Link to={'loaiCV/8'} className="item">
            <div className="img">
              <img src="/src/assets/icons/icon-index/data.svg" />
            </div>
            <h4>Data</h4>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Market;
