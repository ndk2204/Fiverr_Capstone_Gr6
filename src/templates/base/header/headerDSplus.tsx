import React, { useState } from "react";
import css from "./headerDSplus.module.scss";

import { Link, useNavigate } from "react-router-dom";
import Logo from "src/assets/icons/logo";
import Search from "src/assets/icons/search";
import Global from "src/assets/icons/global";
import MenuNav from "src/components/nav/nav";

function HeaderDSplus() {
  const [timkiem, setTimKiem] = useState();
  const navigate = useNavigate();

  const handleChange = (e: any) => {
    setTimKiem(e.target.value);
  };
  const handleClick = () => {
    if (timkiem == null) {
      alert("Vui lòng nhập lại");
    } else {
      navigate(`/danhsach/${timkiem}`);
    }
  };

  return (
    <>
      <header className={css.header}>
        <div className={css["header-left"]}>
          <Link className={css.logo} to="/">
            <Logo />
          </Link>
          <div className={css.navSearch}>
            <input
              onChange={handleChange}
              style={{ fontSize: 13 }}
              type="text"
              placeholder="What service are you looking for to day?"
            />
            <button
              onClick={handleClick}
              className={`btn btn-success ${css.btnSearch}`}
              type="button"
            >
              <Search />
            </button>
          </div>
        </div>
        <div className={css["header-right"]}>
          <Link to="/">Fiverr Business</Link>
          <Link to="/">Explore</Link>
          <span>
            <Global />
            English
          </span>
          <span>US$ USD</span>
          <Link to="/danhsach/marketing">Become a Seller</Link>
          <Link to="/register">Sign In</Link>
          <Link className={css.join} to="/login">
            Join
          </Link>
        </div>
      </header>
      <MenuNav />
    </>
  );
}

export default HeaderDSplus;
