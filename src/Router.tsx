import "twin.macro";
import { createBrowserRouter } from "react-router-dom";
import { Outlet } from "react-router-dom";

import Home from "./pages/Home";
import Mars from "./pages/Projects/Mars";
import AccountApp from "./pages/Projects/AccountApp";
import AirbnbApp from "./pages/Projects/AirbnbApp";
import Threppa from "./pages/Projects/Threppa";
import tw, { styled } from "twin.macro";
import ScrollToTop from "./components/ScrollToTop";

const ProjectWrapper = styled.div`
  ${tw`py-24 overflow-x-hidden`}
`;

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: (
        <>
          <ScrollToTop />
          <Outlet />
        </>
      ),
      children: [
        { path: "/", element: <Home /> },
        {
          path: "/Mars",
          element: (
            <ProjectWrapper>
              <Mars />
            </ProjectWrapper>
          ),
        },
        {
          path: "/account",
          element: (
            <ProjectWrapper>
              <AccountApp />
            </ProjectWrapper>
          ),
        },
        {
          path: "/airbnb",
          element: (
            <ProjectWrapper>
              <AirbnbApp />
            </ProjectWrapper>
          ),
        },
        {
          path: "/threppa",
          element: (
            <ProjectWrapper>
              <Threppa />
            </ProjectWrapper>
          ),
        },
      ],
    },
  ],
  { basename: "/portfolio/" }
);

export default router;
