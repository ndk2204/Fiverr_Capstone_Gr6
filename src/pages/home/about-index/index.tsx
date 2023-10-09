import React, { useState } from "react";

import HeaderIndex from "src/templates/base/header/headerIndex";
import gg from "src/assets/imgs/google.png";
import mt from "src/assets/imgs/meta.png";
import nf from "src/assets/imgs/netflix.png";
import pg from "src/assets/imgs/pg.png";
import pp from "src/assets/imgs/paypal.png";
import { axiosFiver } from "src/services/config.service";
import { useAppSelector } from "src/redux/config-store";
import { setListTimKiem } from "src/redux/slices/product.slice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setLocalStorage } from "src/utils";

function AboutIndex() {
  const [timkiem, setTimKiem] = useState();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e: any) => {
    setTimKiem(e.target.value);
  };

  const handleClick = () => {
    setLocalStorage("timkiem", timkiem);
    (async () => {
      const resp = await axiosFiver({
        url: `/lay-danh-sach-cong-viec-theo-ten/${timkiem}`,
        headers: {
          tokenCybersoft: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCA1MDA4IiwiSGV0SGFuU3RyaW5nIjoiMjgvMDEvMjAyNCIsIkhldEhhblRpbWUiOiIxNzA2NDAwMDAwMDAwIiwibmJmIjoxNjc3NDMwODAwLCJleHAiOjE3MDY1NDc2MDB9.eo3y0MmcjE8Jl4fRzUJLBoZzylEeFDcUTfWXvtb1hdc`,
        },
      });
      const action = setListTimKiem(resp.data.content);
      let data = resp.data.content;
      dispatch(action);
      if (data.length > 0) {
        navigate("/danhsach");
      }
    })();
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
