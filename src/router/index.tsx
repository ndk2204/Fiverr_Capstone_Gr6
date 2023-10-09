import { createBrowserRouter } from "react-router-dom";
import { BaseTemplate } from "../templates/base";
import { Suspense, lazy } from "react";
import HeaderDS from "src/templates/base/header/headerDS";
import HeaderDSplus from "src/templates/base/header/headerDSplus";
import DSCongViec from "src/pages/ds-congviec";

const Home = lazy(() => import("../pages/home"));

const DSLoaiCV = lazy(() => import("../pages/ds-loaiCV"));
const Login = lazy(() => import("../pages/login"));
const Profile = lazy(() => import("../pages/profile"));
const Register = lazy(() => import("../pages/register"));
const Detail = lazy(() => import("../pages/detail"));
export const router = createBrowserRouter([
  {
    element: <BaseTemplate />,
    children: [
      {
        index: true,
        path: "/",
        element: (
          <>
            <Home />
          </>
        ),
      },

      {
        path: "detail/:productId",
        element: (
          <>
            <HeaderDS />
            <Detail />
          </>
        ),
      },
      {
        path: "danhsach",
        element: (
          <>
            <HeaderDS />
            <DSCongViec />
          </>
        ),
      },
      {
        path: "loaicv/:loaiCV",
        element: (
          <>
            <HeaderDSplus />
            <DSLoaiCV />
          </>
        ),
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "profile",
        element: <Profile />,
      },
      {
        path: "register",
        element: <Register />,
      },
    ],
  },
]);
