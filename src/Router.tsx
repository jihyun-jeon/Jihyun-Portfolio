import { createBrowserRouter } from "react-router-dom";
// import "./styles/reset.css";
// import "./styles/layout.css";
// import "./styles/typo.css";
// import "./styles/util.css";
// import Experience from "./pages/Experience/Experience";
// import Home from "./pages/Home";
// import About from "./pages/about/About";
// import Projects from "./pages/Projects/Projects";
// import Skills from "./pages/Skills/Skill";

// import Mars from "./pages/Projects/Project-pages/Mars/Mars";
// import AccountApp from "./pages/Projects/Project-pages/AccountApp";
// import AirbnbApp from "./pages/Projects/Project-pages/AirbnbApp";
// import Instargram from "./pages/Projects/Project-pages/Instargram";
// import Threppa from "./pages/Projects/Project-pages/Threppa";

import Root from "./Root";
import Home from "./pages2/home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { path: "/", element: <Home /> },
      // { path: "/about", element: <About /> },
      // { path: "/skills", element: <Skills /> },
      // { path: "/experience", element: <Experience /> },
      // { path: "/projects", element: <Projects /> },
      // { path: "/projects/Mars", element: <Mars /> },
      // { path: "/projects/account", element: <AccountApp /> },
      // { path: "/projects/airbnb", element: <AirbnbApp /> },
      // { path: "/projects/threppa", element: <Threppa /> },
      // { path: "/projects/instargram", element: <Instargram /> },
    ],
  },
]);

export default router;
