import { createBrowserRouter } from "react-router-dom";
import { BaseTemplate } from "../templates/base";
import { Suspense, lazy } from "react";
import HeaderDS from "src/templates/base/header/headerDS";
import HeaderDSplus from "src/templates/base/header/headerDSplus";

const Home = lazy(() => import("../pages/home"));
const DSCongViec = lazy(() => import("../pages/ds-congviec"));
const DSLoaiCV = lazy(() => import("../pages/loai-congviec"));
const ChiTietCV = lazy(() => import("../pages/chitiet-congviec"));
const Login = lazy(() => import("../pages/login"));
const Profile = lazy(() => import("../pages/profile"));
const Register = lazy(() => import("../pages/register"));
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
        path: "danhsach/:search",
        element: (
          <>
            <HeaderDS />
            <DSCongViec />
          </>
        ),
      },
      {
        path: "danhsach/",
        element: (
          <>
            <HeaderDS />
            <DSCongViec />
          </>
        ),
      },
      {
        path: "chitiet/:maso",
        element: (
          <>
            <HeaderDSplus />
            <ChiTietCV />
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
