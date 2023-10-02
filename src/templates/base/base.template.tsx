import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import Footer from "./footer";
import HeaderIndex from "./header/headerIndex";
import ScrollToTop from "src/components/scroll-to-top";

export function BaseTemplate() {
  return (
    <ScrollToTop>
      <Suspense fallback={<>Loading...</>}>
        <Outlet />
      </Suspense>
      <Footer />
    </ScrollToTop>
  );
}
