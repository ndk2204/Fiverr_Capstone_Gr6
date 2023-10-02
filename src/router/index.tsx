import { createBrowserRouter } from "react-router-dom";
import { BaseTemplate } from "../templates/base";
import { Suspense, lazy } from "react";
import HeaderIndex from "src/templates/base/header/headerIndex";
import HeaderDS from "src/templates/base/header/headerDS";
import HeaderDSplus from "src/templates/base/header/headerDSplus";

const Home = lazy(() => import("../pages/home"));
const Carts = lazy(() => import("../pages/carts"));
const Login = lazy(() => import("../pages/login"));
const Profile = lazy(() => import("../pages/profile"));
const Register = lazy(() => import("../pages/register"));
const Search = lazy(() => import("../pages/search"));
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
            <HeaderIndex />
            <Home />
          </>
        ),
      },
      {
        path: "detail/:productId",
        element: (
          <>
          <HeaderDS/>
            <Detail />
          </>
        ),
      },
      {
        path: "carts",
        element: (
          <>
          <HeaderDSplus/>
            <Carts />
          </>
        ),
      },
      {
        path: "login",
        element: (
          <Login />
        ),
      },
      {
        path: "profile",
        element: <Profile />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "search",
        element: <>
          <HeaderIndex />,
          <Search />,
        </>
      },

    ],
  },
]);
