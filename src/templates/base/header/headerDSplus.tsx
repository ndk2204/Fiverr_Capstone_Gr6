import React from "react";
import css from "./headerDSplus.module.scss";

import { Link } from "react-router-dom";
import Logo from "src/assets/icons/logo";
import Search from "src/assets/icons/search"
import Global from "src/assets/icons/global"

function HeaderDSplus() {

    return (
        <>
            <header className={css.header}>
                <div className={css["header-left"]}>
                    <Link className={css.logo} to="/">
                        <Logo />
                    </Link>
                    <div className={css.navSearch}>
                        <input style={{ fontSize: 13 }} type="text" placeholder="What service are you looking for to day?" />
                        <button className={`btn btn-success ${css.btnSearch}`} type="button">
                            <Search />
                        </button>
                    </div>
                </div>
                <div className={css["header-right"]}>
                    <Link to="/">Fiverr Business</Link>
                    <Link to="/">Explore</Link>
                    <span>
                        <Global />
                        English</span>
                    <span>
                        US$ USD</span>
                    <Link to="/">Become a Seller</Link>
                    <Link to="/login">Sign In</Link>
                    <Link className={css.join} to="/register">Join</Link>
                </div>
            </header>
        </>
    );
}

export default HeaderDSplus;
