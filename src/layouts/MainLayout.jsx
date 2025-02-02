import { Outlet } from "react-router-dom";
import Navbar from "../componenets/shared/navbar/Navbar";
import Footer from "../componenets/shared/footer/footer";

const MainLayout = () => {
  return (
    <div>
      <section className="w-11/12 mx-auto pt-4">
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
