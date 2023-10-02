import React, { useRef } from "react";
import { Carousel } from "antd";
import { CarouselRef } from "antd/es/carousel";

import css from "./carousel.module.scss";
import { Link } from "react-router-dom";
import LogoIcon from "src/assets/icons/logo";



const HomeCarousel: React.FC = () => {
  const onChange = (currentSlide: number) => {
    // console.log(currentSlide);
  };

  /**
   * Để truy cập được những methods của component export ra thì ta dùng useRef
   */
  const refCarsousel = useRef<CarouselRef>(null);

  const handleNext = () => {
    refCarsousel.current?.next();
  };
  const handlePrev = () => {
    refCarsousel.current?.prev();
  };

  return (
    <>
      <div className={css["carousel"]}>


        {/* Đối với những props có giá trị là true (autoplay) thì chỉ cần truyền tên không cần truyền cụ thể giá trị true */}
        <div className={css["carousel-img"]}>
          <Carousel
            dotPosition="bottom"
            ref={refCarsousel}
            afterChange={onChange}
          >
            <div className={css["box-img"]}>
              {/* <img src={} /> */}
            </div>
            <div className={css["box-img"]}>
              {/* <img src={} /> */}
            </div>
            <div className={css["box-img"]}>
              {/* <img src={} /> */}
            </div>
          </Carousel>
        </div>
        <div className={css["carousel-title"]}>
          <h1 style={{ fontSize: 40, fontWeight: 300, marginBottom: 0 }}>
            Adidas Super Star
          </h1>
          <p style={{ fontSize: 20, fontWeight: 300, marginBottom: 25 }}>
            The adidas Primeknit upper wraps the foot with a supportive fit that
            enhances movement{" "}
          </p>
          <Link to="/detail/4">
            <button className={css["carousel-btn"]}>Buy now</button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default HomeCarousel;
