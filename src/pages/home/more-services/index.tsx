import React from "react";

function MoreServices() {
  return (
    <div className="moreServices">
      <div className="services-left">
        <h1>A whole world of freelance talent at your fingertips</h1>
        <ul>
          <li>
            <div className="title">
              <i className="fa-regular fa-circle-check"></i>
              <h4>Stick to your budget</h4>
            </div>
            <p>
              Find the right service for every price point. No hourly rates,
              just project-based pricing.
            </p>
          </li>
          <li>
            <div className="title">
              <i className="fa-regular fa-circle-check"></i>
              <h4>Get quality work done quickly</h4>
            </div>
            <p>
              Hand your project over to a talented freelancer in minutes, get
              long-lasting results.
            </p>
          </li>
          <li>
            {" "}
            <div className="title">
              <i className="fa-regular fa-circle-check"></i>
              <h4>Pay when you're happy</h4>
            </div>
            <p>
              Upfront quotes mean no surprises. Payments only get released when
              you approve.
            </p>
          </li>
          <li>
            {" "}
            <div className="title">
              <i className="fa-regular fa-circle-check"></i>
              <h4>Count on 24/7 support</h4>
            </div>
            <p>
              Our round-the-clock support team is available to help anytime,
              anywhere.
            </p>
          </li>
        </ul>
      </div>
      <div className="services-right">
        <video
          className="orca-video"
          controls
        >
          <source
            src="https://fiverr-res.cloudinary.com/video/upload/t_fiverr_hd/vmvv3czyk2ifedefkau7"
            type="video/mp4"
          />
        </video>
      </div>
    </div>
  );
}

export default MoreServices;
