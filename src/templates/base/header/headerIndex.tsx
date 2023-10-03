import React from "react";
import css from "./headerIndex.module.scss";

import { Link } from "react-router-dom";
import Logo from "src/assets/icons/logo";
function HeaderIndex() {

  return (
    <>
      <header className={css.header}>
        <Link to="/">
          <Logo />
        </Link>
        <div className={css["header-right"]}>
          <Link to="/">Become a Seller</Link>
          <Link to="/register">Sign In</Link>
          <Link className={css.join} to="/login">Join</Link>
        </div>
      </header>
    </>
  );
}

export default HeaderIndex;
