import React, { useState } from "react";

import HeaderIndex from "src/templates/base/header/headerIndex";
import gg from "src/assets/imgs/google.png";
import mt from "src/assets/imgs/meta.png";
import nf from "src/assets/imgs/netflix.png";
import pg from "src/assets/imgs/pg.png";
import pp from "src/assets/imgs/paypal.png";
import { Link, useNavigate } from "react-router-dom";

function AboutIndex() {
  const [timkiem, setTimKiem] = useState();
  const navigate = useNavigate();

  const handleChange = (e: any) => {
    setTimKiem(e.target.value);
  };
  const handleClick = () => {
    if (timkiem == null) {
      alert("Vui lòng nhập lại");
    } else {
      navigate(`/danhsach/${timkiem}`);
    }
  };

  return (
    <>
      <div className="headerIndex ">
        <div className="aboutIndex">
          <HeaderIndex />
          <div className="headerLeft">
            <h1 className="header-title">
              Find the perfect <i>freelance</i> service for your bussiness
            </h1>

            <form
              onSubmit={() => {
                event?.preventDefault();
              }}
              className="searchHome"
            >
              <input
                onChange={handleChange}
                type="text"
                placeholder="Search for any services ... "
              />
              <button
                onClick={handleClick}
                className="btn btn-success btnSearch"
                type="button"
              >
                Search
              </button>
            </form>

            <div className="popular">
              Popular:
              <ul>
                <li>
                  <Link to={"/danhsach/Website"}>Website</Link>
                </li>
                <li>
                  <Link to={"/danhsach/Marketing"}>Marketing</Link>
                </li>
                <li>
                  <Link to={"/danhsach/Design"}> Design</Link>
                </li>
                <li>
                  <Link to={"/danhsach/instagram"}> Instagram</Link>
                </li>
                <li>
                  <Link to={"/danhsach/Dropshipping"}>Dropshipping</Link>
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
