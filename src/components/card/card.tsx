import React from "react";
import css from "./card.module.scss";
import { Link, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";

export type TCard = {
  id: number;
  avatar: string;
  congViec: any;
  tenChiTietLoai: string;
  tenLoaiCongViec: string;
  tenNguoiTao: string;
  tenNhomChiTietLoai: string;
};

type Props = {
  data: TCard;
};

export function Card(props: Props) {
  const { data } = props;
  console.log(data);
  return (
    <div className={css["card"]}>
      <Link to={`/chitiet/${data.id}`} className={css["img"]}>
        <img src={data.congViec.hinhAnh} />
      </Link>
      <div className={css["content"]}>
        <div className={css["user"]}>
          <div className={css["avatar"]}>
            <img src={data.avatar} />
          </div>
          <div className={css["name"]}>
            <h4>{data.tenNguoiTao}</h4>
            <h5>Level {data.congViec.maChiTietLoaiCongViec} Seller</h5>
          </div>
        </div>
        <p className={css["namecv"]}>{data.congViec.tenCongViec}</p>
        <div className={css["rate"]}>
          <i className="fa-solid fa-star"></i>{" "}
          <span>
            {data.congViec.saoCongViec}{" "}
            <span className={css["view"]}>({data.congViec.danhGia})</span>
          </span>
        </div>
      </div>
      <div className={css["footer"]}>
        <i className="fa-solid fa-heart"></i>
        <Link to={`/chitiet/${data.id}`}>
          <div className={css["at"]}>
            STARTING AT
            <span> {data.congViec.giaTien}$</span>
          </div>
        </Link>
      </div>
    </div>
  );
}
