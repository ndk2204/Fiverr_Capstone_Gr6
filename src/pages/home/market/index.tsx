import React from "react";

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
    <div className="listIcon">
      <div className="item">
        <div className="img">
          <img src="/Fiverr_Capstone_Gr6/src/assets/icons/icon-index/graphics-design.svg" />
        </div>
        <h4>Graphic</h4>
      </div>
    </div>
      </div>
    </div>
  );
}

export default Market;
