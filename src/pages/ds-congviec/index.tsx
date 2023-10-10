import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
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

  return (
    <>
      <div className="danhsachCV">
        <div className="suggest">
          <h4>Suggested</h4>
          <ul>
            <li>html</li>
            <li>css</li>
            <li>design</li>
            <li>marketing</li>
            <li>music</li>
            <li>video</li>
            <li>data</li>
          </ul>
        </div>
        <div className="result">
          <h2>Results for "{timkiem}"</h2>
          <ul>
            <li>Category</li>
            <li>Service Options</li>
            <li>Seller Detail</li>
            <li>Budget</li>
            <li>Delivery Time</li>
          </ul>
        </div>
        <ListCard list={listTimKiem} />
      </div>
    </>
  );
}

export default DSCongViec;
