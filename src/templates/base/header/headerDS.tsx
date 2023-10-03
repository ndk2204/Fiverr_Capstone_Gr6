import React from "react";
import css from "./headerDS.module.scss";

import { Link } from "react-router-dom";
import Logo from "src/assets/icons/logo";
import Search from "src/assets/icons/search"
import MenuNav from "src/components/nav/nav";
function HeaderDS() {

    return (
        <>
            <header className={css.header}>
                <div className={css["header-left"]}>
                    <Link className={css.logo} to="/">
                        <Logo />
                    </Link>
                    <div className={css.navSearch}>
                        <div className={css.searchIcon}>
                        <Search/>
                        </div>
                        <input style={{fontSize:13}} type="text" placeholder="Are you looking ... ?" />
                        <button className={`btn btn-success ${css.btnSearch}`} type="button">Search</button>
                    </div>
                </div>
                <div className={css["header-right"]}>
                    <Link to="/">Become a Seller</Link>
                    <Link to="/register">Sign In</Link>
                    <Link className={css.join} to="/login">Join</Link>
                </div>
            </header>
            <MenuNav/>
        </>
    );
}

export default HeaderDS;
