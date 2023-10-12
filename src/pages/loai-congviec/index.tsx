import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useAppSelector } from "src/redux/config-store";
import { getLocalStorage, setLocalStorage } from "src/utils";

type TParams = {
  loaiCV: string;
};

function DSLoaiCV() {
  const listMenu = useAppSelector((state) => {
    return state.productReducer.listMenu;
  });

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
  console.log(dataNhom);
  return (
    <>
      <div className="aboutLoaiCV">
        <div className="img-bg">
          <h1>{title}</h1>
          <p>{title} to make you stand out</p>
          <button type="button" className="btn btn-outline-dark">
            Dark
          </button>
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
