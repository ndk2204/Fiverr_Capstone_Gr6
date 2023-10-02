import React from "react";
import css from "./footer.module.scss";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <div className={css["footer"]}>
        <div className={css["list"]}>
          <h2>Categories</h2>
          <Link to='#'>Graphics & Design</Link>
          <Link to='#'>Digital Marketing</Link>
          <Link to='#'>Writing & Translation</Link>
          <Link to='#'>Video & Animation</Link>
          <Link to='#'>Music & Audio</Link>
          <Link to='#'>Programming & Tech</Link>
          <Link to='#'>Data</Link>
          <Link to='#'>Business</Link>
          <Link to='#'>Lifestyle</Link>
          <Link to='#'>Sitemap</Link>

        </div>
        <div className={css["list"]}>
          <h2>About</h2>
          <Link to='#'>Careers</Link>
          <Link to='#'>Press & News</Link>
          <Link to='#'>Partnerships</Link>
          <Link to='#'>Privacy Policy</Link>
          <Link to='#'>Terms of Service</Link>
          <Link to='#'>Intellectual Property Claims</Link>
          <Link to='#'>Investor Relations</Link>
        </div>
        <div className={css["list"]}>
          <h2>Support</h2>
          <Link to='#'>Help & Support</Link>
          <Link to='#'>Trust & Safety</Link>
          <Link to='#'>Selling on Fiverr</Link>
          <Link to='#'>Buying on Fiverr</Link>
        </div>
        <div className={css["list"]}>
          <h2>Community</h2>
          <Link to='#'>Customer Success Stories</Link>
          <Link to='#'>Community Hub</Link>
          <Link to='#'>Forum</Link>
          <Link to='#'>Events</Link>
          <Link to='#'>Blog</Link>
          <Link to='#'>Influencers</Link>
          <Link to='#'>Affiliates</Link>
          <Link to='#'>Podcast</Link>
          <Link to='#'>Become a Seller</Link>
          <Link to='#'>Invite a Friend</Link>
        </div>
        <div className={css["list"]}>
          <h2>Business Solutions</h2>
          <Link to='#'>About Business Solutions</Link>
          <Link to='#'>Fiverr Pro</Link>
          <Link to='#'>Fiverr Certified</Link>
          <Link to='#'>Fiverr Enterprise</Link>
          <Link to='#'>Working Not Working</Link>
          <Link to='#'>Contact Sales</Link>
        </div>
      </div>
      <div className={css["copyright"]}>
        <p> © 2023 Cybersoft All Rights Reserved - Fiverr | Design by Khanh Nguyen & Dao Ngo.</p>
      </div>


    </>
  );
}

export default Footer;
