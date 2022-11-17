import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import { Outlet } from "react-router-dom";

import Home from "./pages/Home/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Outlet />,
    children: [{ path: "/", element: <Home /> }],
  },
]);

export default router;
