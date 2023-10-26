import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useParams } from "react-router-dom";
import ListCard from "src/components/list-card";
import { useAppSelector } from "src/redux/config-store";
import { setListTimKiem } from "src/redux/slices/product.slice";
import { axiosFiver } from "src/services/config.service";

type TParams = {
  search: string;
};

function DSCongViec() {
  const listTimKiem = useAppSelector((state) => {
    return state.productReducer.listTimKiem;
  });
  const params = useParams<TParams>();
  const dispatch = useDispatch();

  let timkiem = params.search;
  useEffect(() => {
    (async () => {
      const resp = await axiosFiver({
        url: `/lay-danh-sach-cong-viec-theo-ten/${timkiem}`,
        headers: {
          tokenCybersoft: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCA1MDA4IiwiSGV0SGFuU3RyaW5nIjoiMjgvMDEvMjAyNCIsIkhldEhhblRpbWUiOiIxNzA2NDAwMDAwMDAwIiwibmJmIjoxNjc3NDMwODAwLCJleHAiOjE3MDY1NDc2MDB9.eo3y0MmcjE8Jl4fRzUJLBoZzylEeFDcUTfWXvtb1hdc`,
        },
      });
      const action = setListTimKiem(resp.data.content);
      dispatch(action);
    })();
  }, [params.search]);
  const handleDrop = () => {
    setDrop(drop === "off" ? "on" : "off");
  };
  const [drop, setDrop] = useState("off");

  return (
    <>
      <div className="danhsachCV">
        <div className="suggest">
          <h4 className="mb-0">Suggested</h4>
          <ul>
            <Link to={"/danhsach/html"}>html</Link>
            <Link to={"/danhsach/css"}>css</Link>
            <Link to={"/danhsach/design"}>design</Link>
            <Link to={"/danhsach/marketing"}>marketing</Link>
            <Link to={"/danhsach/video"}>video</Link>
            <Link to={"/danhsach/music"}>music</Link>
            <Link to={"/danhsach/data"}>data</Link>
            <Link to={"/danhsach/animation"}>animation</Link>
            <Link to={"/danhsach/digital"}>digital</Link>
          </ul>
        </div>
        <div className="result">
          <h2>Results for "{timkiem}"</h2>
          <ul>
            <li onClick={handleDrop}>
              Category
              <i className="fa-solid fa-angle-down"></i>
            </li>
            <li onClick={handleDrop}>
              Service Options
              <i className="fa-solid fa-angle-down"></i>
            </li>
            <li onClick={handleDrop}>
              Seller Detail
              <i className="fa-solid fa-angle-down"></i>
            </li>
            <li onClick={handleDrop}>
              Budget
              <i className="fa-solid fa-angle-down"></i>
            </li>
            <li onClick={handleDrop}>
              Delivery Time
              <i className="fa-solid fa-angle-down"></i>
            </li>
            {drop === "on" ? (
              <div className="dropResult">
                <p>Options</p>
                <p>Category</p>
                <p>Detail</p>
              </div>
            ) : (
              <div></div>
            )}
          </ul>
        </div>
        <ListCard list={listTimKiem} />
      </div>
    </>
  );
}

export default DSCongViec;
