import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useAppSelector } from "src/redux/config-store";

type TParams = {
  maso: string;
};

function ChiTietCV() {
  const listTimKiem = useAppSelector((state) => {
    return state.productReducer.listTimKiem;
  });
  const params = useParams<TParams>();
  console.log(listTimKiem);
  console.log(params.maso);
  const [data, setData] = useState();
  useEffect(() => {
    listTimKiem.map((item: any) => {
      if (item.id == params.maso) {
        setData(item);
      }
    });
  }),
    [params.maso];
  console.log(data);
  return (
    <div>
      <div className="duongDanCV">
        <a>
          {data?.tenLoaiCongViec} {` > `}
        </a>
        <a>
          {" "}
          {data?.tenNhomChiTietLoai} {` > `}{" "}
        </a>
        <a> {data?.tenChiTietLoai}</a>
      </div>
      <h2 className="tenCV">{data?.congViec.tenCongViec}</h2>
    <div className="user">
        
    </div>
    </div>
  );
}

export default ChiTietCV;
