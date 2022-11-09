import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./styles/reset.css";
import "./styles/layout.css";
import "./styles/typo.css";
import "./styles/util.css";
import Experience from "./pages/Experience/Experience";
import Home from "./pages/Home";
import Introduce from "./pages/introduce/Introduce";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills/Skill";

import Root from "./Root";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/introduce", element: <Introduce /> },
      { path: "/skills", element: <Skills /> },
      { path: "/experience", element: <Experience /> },
      { path: "/projects", element: <Projects /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <RouterProvider router={router}></RouterProvider>
);
