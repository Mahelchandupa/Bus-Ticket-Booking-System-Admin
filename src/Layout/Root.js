import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";
import Sidebar from "../components/Sidebar/Sidebar";

const Root = () => {
  return (
    <>
      <Header />
      <main>
        <div className=" flex">
          <Sidebar />
          <div className="h-screen flex-1 p-9 pt-24">
            <Outlet />
          </div>
        </div>
      </main>
    </>
  );
};

export default Root;
