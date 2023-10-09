import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { axiosWithAuth } from "src/services/config.service";
import { useAppSelector } from "src/redux/config-store";
import { useDispatch } from "react-redux";
import { setListMenu } from "src/redux/slices/product.slice";

function MenuNav() {
  const listMenu = useAppSelector((state) => {
    return state.productReducer.listMenu;
  });
  // console.log(listMenu);
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      const resp = await axiosWithAuth({
        // method: "get",
        headers: {
          tokenCybersoft: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCA1MDA4IiwiSGV0SGFuU3RyaW5nIjoiMjgvMDEvMjAyNCIsIkhldEhhblRpbWUiOiIxNzA2NDAwMDAwMDAwIiwibmJmIjoxNjc3NDMwODAwLCJleHAiOjE3MDY1NDc2MDB9.eo3y0MmcjE8Jl4fRzUJLBoZzylEeFDcUTfWXvtb1hdc`,
        },
      });
      const action = setListMenu(resp.data.content);
      dispatch(action);
    })();
  }, []);

  const [isActive, setIsActive] = useState(false);

  return (
    <ul className="nav">
      {listMenu.map((item: any, index: number) => {
        return (
          <div
            key={index}
            // onMouseEnter={() => {
            //   setIsActive(true);
            // }}
            // onMouseLeave={() => {
            //   setIsActive(false);
            // }}
            className={isActive ? `menu active ` : "menu"}
          >
            <Link to={`/loaicv/${item.id}`} className="loaiCV">
              {item.tenLoaiCongViec}
            </Link>
            {item.dsNhomChiTietLoai.map((sub: any, number: number) => {
              return (
                <div className="menuDrop" key={number}>
                  <a>{sub.tenNhom}</a>

                  {sub.dsChiTietLoai.map((subMenu: any, stt: number) => {
                    return (
                      <p key={stt} className="sub">
                        {subMenu.tenChiTiet}
                      </p>
                    );
                  })}
                </div>
              );
            })}
          </div>
        );
      })}
    </ul>
  );
}

export default MenuNav;
