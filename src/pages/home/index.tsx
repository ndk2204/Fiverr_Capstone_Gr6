import AboutIndex from "./about-index";
import Market from "./market";
import MoreServices from "./more-services";
import PopularServices from "./popular-services";

function Home() {
  return (
    <div>
      <AboutIndex />
      <PopularServices />
      <MoreServices />
      <Market />
    </div>
  );
}

export default Home;
