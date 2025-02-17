import { NavLink, Outlet } from "react-router-dom";
import Footer from "../componenets/shared/footer/footer";
import Navbar from "../componenets/shared/navbar/Navbar";

import useAdmin from "../hooks/useAdmin";
import { FaStreetView, FaUserEdit } from "react-icons/fa";
import { MdFavoriteBorder, MdOutlineContactPhone } from "react-icons/md";
import { FiLogOut } from "react-icons/fi";
const Dashboard = () => {
  const [isAdmin] = useAdmin();
  return (
    <div>
      <section className="w-11/12 mx-auto pt-4">
        <Navbar></Navbar>
      </section>
      <section className="min-h-[calc(100vh-345px)]">
        <div className="grid grid-cols-4 gap-10">
          {/* side menu */}
          <div className="min-h-screen col-span-1 bg-gold2-color mt-10 mb-24">
            <ul className="space-y-8 ml-6">
              <li className="flex items-center gap-3 text-xl">
               <FaUserEdit className="text-2xl"></FaUserEdit>
                <NavLink to='editBiodata'>Edit Biodata</NavLink>
              </li>
              <li className="flex items-center gap-3 text-xl">
               <FaStreetView className="2xl"></FaStreetView>
                <NavLink to='viewBiodata'>View Biodata</NavLink>
              </li>
              <li className="flex items-center gap-3 text-xl">
               <MdOutlineContactPhone className="text-2xl"></MdOutlineContactPhone>
                <NavLink to='myContactRequest'>My Contact Request</NavLink>
              </li>
              <li className="flex items-center gap-3 text-xl">
               <MdFavoriteBorder className="text-2xl"></MdFavoriteBorder>
                <NavLink to='favoritesBiodata'>Favorites Biodata</NavLink>
              </li>
              <li className="flex items-center gap-3 text-xl">
               <FiLogOut className="text-2xl"></FiLogOut>
                <NavLink>Logout</NavLink>
              </li>
            </ul>
          </div>
          {/* dashboard content */}
          <div className="col-span-3">
               <Outlet></Outlet>
          </div>
        </div>
      </section>
      <section>
        <Footer></Footer>
      </section>
    </div>
  );
};

export default Dashboard;
