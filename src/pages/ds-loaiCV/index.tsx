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

  return (
    <>
      <div className="explorer">
        <h2>Explorer {title} </h2>
        <div className="dsNhom">
          {dataNhom?.map((item: any) => {
            return (
              <div className="item">
                <div className="img">
                  <img className="img-fluid" src={item.hinhAnh} />
                </div>
                <div>
                  <h3>{item.tenNhom}</h3>
                  {item.dsChiTietLoai.map((sub: any) => {
                    return <p>{sub.tenChiTiet}</p>;
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
