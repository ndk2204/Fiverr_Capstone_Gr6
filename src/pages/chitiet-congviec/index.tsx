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
    <div className="chiTietCV">
      <div className="duongDanCV">
        <a>{data?.tenLoaiCongViec} </a>
        <i class="fa-solid fa-angle-right"></i>
        <a> {data?.tenNhomChiTietLoai} </a>
        <i class="fa-solid fa-angle-right"></i>
        <a> {data?.tenChiTietLoai}</a>
      </div>
      <h2 className="tenCV">{data?.congViec.tenCongViec}</h2>
      <div className="user">
        <div className="avatar">
          <img src={data?.avatar} />
        </div>
        <h4 className="mb-0 name">{data?.tenNguoiTao}</h4>
        <h4 className="mb-0 rate-title">Top Rated Seller</h4>

        <div className="rate">
          <div>
            <i className="fa-solid fa-star"></i> {data?.congViec.saoCongViec} (
            {data?.congViec.danhGia})
          </div>
        </div>
        <p className="mb-0 order">
          {data?.congViec.maChiTietLoaiCongViec} Orders in Queue
        </p>
      </div>
      <div className="hinhAnh">
        <img src={data?.congViec.hinhAnh} />
      </div>
      <div className="information">
        <h2 className="info">About This {data?.tenChiTietLoai}</h2>
        <h3 className="seller">Top Rated Seller with all positive reviews</h3>
        <p>Hello,</p>
        <p className="motaNgan">{data?.congViec.moTaNgan}</p>
        <h3>Things I offer:</h3>
        <p className="moTaThing">{data?.congViec.moTa}</p>
      </div>
    </div>
  );
}

export default ChiTietCV;
