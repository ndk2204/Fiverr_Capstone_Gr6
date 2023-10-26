import React, { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import { useAppSelector } from "src/redux/config-store";
import { getLocalStorage, setLocalStorage } from "src/utils";
import MostPopular from "./carousel-mostPPL";

type TParams = {
  loaiCV: string;
};

function DSLoaiCV() {
  const listMenu = useAppSelector((state) => {
    return state.productReducer.listMenu;
  });
  // console.log(listMenu);

  const [title, setTitle] = useState();
  const params = useParams<TParams>();

  useEffect(() => {
    if (!params.loaiCV) return;
    listMenu?.map((ds: any) => {
      if (params.loaiCV == ds.id) {
        setTitle(ds.tenLoaiCongViec);
        setLocalStorage("data", ds.dsNhomChiTietLoai);
      }
    });
  }, [params.loaiCV]);
  let dataNhom = getLocalStorage("data");

  // console.log(dataNhom);
  return (
    <>
      <div className="aboutLoaiCV">
        <div className="img-bg">
          <h1>{title}</h1>
          <p>Designs to make you stand out</p>
          <NavLink to={'/danhsach/design'}  type="button" className="btn btn-outline-light">
            <i className="fa-solid fa-circle-play"></i>
            How Fiverr Works
          </NavLink>
        </div>
        <div className="mostLoaiCV">
          <h2>Most popular in {title}</h2>
          <MostPopular />
        </div>
      </div>

      <div className="explorer">
        <h2>Explorer {title} </h2>
        <div className="dsNhom">
          {dataNhom?.map((item: any, index: number) => {
            return (
              <div key={index} className="item">
                <div className="img">
                  <img className="img-fluid" src={item.hinhAnh} />
                </div>
                <div>
                  <h3>{item.tenNhom}</h3>
                  {item.dsChiTietLoai.map((sub: any, index: number) => {
                    return <p key={index}>{sub.tenChiTiet}</p>;
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default DSLoaiCV;
