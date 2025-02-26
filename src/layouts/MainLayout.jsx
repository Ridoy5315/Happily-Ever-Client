import { Outlet } from "react-router-dom";
import Navbar from "../componenets/shared/navbar/Navbar";
import Footer from "../componenets/shared/footer/footer";

const MainLayout = () => {
  return (
    <div>
      <section className="w-full py-2 fixed z-10 bg-white bg-opacity-75 left-0 right-0">
        <Navbar></Navbar>
      </section>

      <section className="min-h-[calc(100vh-345px)]">
        <Outlet></Outlet>
      </section>
      <section>
        <Footer></Footer>
      </section>
    </div>
  );
};

export default MainLayout;
