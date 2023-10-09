import { useEffect } from "react";
import AboutIndex from "./about-index";

//Các hook cần sử dụng với redux
// useSelector: lấy store từ trên redux về
// useDispatch: set lại state trên redux
import { useAppSelector } from "src/redux/config-store";
import PopularServices from "./popular-services";

function Home() {
  const listProduct = useAppSelector((state) => {
    return state.productReducer.listProduct;
  });

  return (
    <div>
      <AboutIndex />
      <PopularServices/>
    </div>
  );
}

export default Home;
