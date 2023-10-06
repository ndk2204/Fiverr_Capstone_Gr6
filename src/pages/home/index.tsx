import { useEffect } from "react";
import ProductFeature from "./product-feature";
import HomeCarousel from "./home-carousel";

//Các hook cần sử dụng với redux
// useSelector: lấy store từ trên redux về
// useDispatch: set lại state trên redux
import { useAppSelector } from "src/redux/config-store";

function Home() {
  const listProduct = useAppSelector((state) => {
    return state.productReducer.listProduct;
  });

  return (
    <div>
      <HomeCarousel />
      <ProductFeature />
    </div>
  );
}

export default Home;
