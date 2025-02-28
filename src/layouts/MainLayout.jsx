import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../componenets/shared/navbar/Navbar";
import Footer from "../componenets/shared/footer/footer";

const MainLayout = () => {
  const location = useLocation();
  const noHeaderFooter =
    location.pathname.includes("/logIn") ||
    location.pathname.includes("/signUp");
  return (
    <div>
      {noHeaderFooter || (
        <section className="w-full lg:py-2 md:py-2 fixed z-10 bg-white bg-opacity-85 left-0 right-0 shadow-lg">
          <Navbar></Navbar>
        </section>
      )}

      <section className="min-h-[calc(100vh-345px)]">
        <Outlet></Outlet>
      </section>
      {noHeaderFooter || (
        <section>
          <Footer></Footer>
        </section>
      )}
    </div>
  );
};

export default MainLayout;
