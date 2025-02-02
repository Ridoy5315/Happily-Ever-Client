import { Outlet } from "react-router-dom";
import Navbar from "../componenets/home/Navbar";

const MainLayout = () => {
  return (
    <div>
      <section className="w-11/12 mx-auto mt-4">
        <Navbar></Navbar>
      </section>
      <Outlet></Outlet>
    </div>
  );
};

export default MainLayout;
