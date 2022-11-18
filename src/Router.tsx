import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import { Outlet } from "react-router-dom";

import Home from "./pages/Home/Home";
import Mars from "./pages/Projects/Mars/Mars";
import AccountApp from "./pages/Projects/AccountApp";
import AirbnbApp from "./pages/Projects/AirbnbApp";
import Threppa from "./pages/Projects/Threppa";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Outlet />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/Mars", element: <Mars /> },
      { path: "/account", element: <AccountApp /> },
      { path: "/airbnb", element: <AirbnbApp /> },
      { path: "/threppa", element: <Threppa /> },
    ],
  },
]);

export default router;
