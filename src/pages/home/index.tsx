import { useEffect } from "react";
import ProductFeature from "./product-feature";
import AboutIndex from "./about-index";

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
      <AboutIndex />
      <ProductFeature />
    </div>
  );
}

export default Home;
