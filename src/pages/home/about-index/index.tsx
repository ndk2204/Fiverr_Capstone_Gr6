import React, { useRef } from "react";

import HeaderIndex from "src/templates/base/header/headerIndex";
import gg from "src/assets/imgs/google.png";
import mt from "src/assets/imgs/meta.png";
import nf from "src/assets/imgs/netflix.png";
import pg from "src/assets/imgs/pg.png";
import pp from "src/assets/imgs/paypal.png";

function AboutIndex() {
  return (
    <>
      <div className="headerIndex ">
        <div className="aboutIndex">
          <HeaderIndex />
          <div className="headerLeft">
            <h1 className="header-title">
              Find the perfect <i>freelance</i> service for your bussiness
            </h1>
            <form className="searchHome">
              <input type="text" placeholder="Search for any services ... " />
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
        <div className="trustBy">
          <h4 className="mb-0">Trusted by:</h4>
          <li>
            <img src={mt} />
          </li>
          <li>
            <img src={gg} />
          </li>
          <li>
            <img src={nf} />
          </li>
          <li>
            <img src={pg} />
          </li>
          <li>
            <img src={pp} />
          </li>
        </div>
      </div>
    </>
  );
}

export default AboutIndex;
