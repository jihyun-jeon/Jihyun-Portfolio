import { Outlet } from "react-router-dom";
import Header from "./components/Header";

function Root() {
  return (
    <>
      <Header />
      <main>
        <div className="mainWrapper">
          <Outlet />
        </div>
      </main>
    </>
  );
}

export default Root;
