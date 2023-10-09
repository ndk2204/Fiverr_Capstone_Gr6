import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ListCard from "src/components/list-card";
import { useAppSelector } from "src/redux/config-store";
import { getLocalStorage, setLocalStorage } from "src/utils";

function DSCongViec() {
  const listTimKiem = useAppSelector((state) => {
    return state.productReducer.listTimKiem;
  });
  console.log(listTimKiem);
  let timkiem = getLocalStorage("timkiem");
  console.log(timkiem);
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
