import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/home/Home";
import SignUp from "../pages/Authentication/signUp/SignUp";
import LogIn from "../pages/Authentication/logIn/LogIn";
import Biodatas from "../pages/bioData/BioDatas";
import BiodataDetails from "../pages/biodataDetails/BiodataDetails";
import PrivateRoute from "./PrivateRoute";
import Checkout from "../pages/checkout/Checkout";
import Dashboard from "../layouts/Dashboard";
import EditBiodata from "../pages/dashboard/editBiodata/EditBiodata";
import ViewBiodata from "../pages/dashboard/viewBiodata/ViewBiodata";
import MyContactRequest from "../pages/dashboard/myContactRequest/MyContactRequest";
import FavoritesBiodata from "../pages/dashboard/favoritesBiodata/FavoritesBiodata";
import AdminRoute from "./AdminRoute";
import ManageUsers from "../pages/dashboard/Admin/ManageUsers.jsx/manageUsers";
import AdminDashboard from "../pages/dashboard/Admin/AdminDashboard/adminDashboard";
import ApprovedContactRequest from "../pages/dashboard/Admin/ApprovedContactRequest/approvedContactRequest";
import ApprovedPremium from "../pages/dashboard/Admin/ApprovedPremium/approvedPremium";
import GotMarried from "../pages/dashboard/gotMarried/GotMarried";
import AboutUs from "../pages/aboutUs/AboutUs";
import ContactUs from "../pages/contactUS/ContactUs";
import DashboardRedirect from "../pages/dashboard/DashboardRedirect";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        index: true,
        element: <Home></Home>,
      },
      {
        path: "/biodatas",
        element: <Biodatas></Biodatas>,
      },
      {
        path: "/aboutUs",
        element: <AboutUs></AboutUs>,
      },
      {
        path: "/contactUS",
        element: <ContactUs></ContactUs>,
      },
      {
        path: "/signUp",
        element: <SignUp></SignUp>,
      },
      {
        path: "/logIn",
        element: <LogIn></LogIn>,
      },
      {
        path: "/bioDataDetails/:id",
        element: (
          <PrivateRoute>
            <BiodataDetails></BiodataDetails>
          </PrivateRoute>
        ),
      },
      {
        path: "/checkout/:id",
        element: (
          <PrivateRoute>
            <Checkout></Checkout>
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <Dashboard></Dashboard>
      </PrivateRoute>
    ),
    children: [
      {
        path: "/dashboard",
        element: <DashboardRedirect></DashboardRedirect>,
      },
      // normal user route
      {
        path: "/dashboard/editBiodata",
        element: <EditBiodata></EditBiodata>,
      },
      {
        path: "/dashboard/viewBiodata",
        element: <ViewBiodata></ViewBiodata>,
      },
      {
        path: "/dashboard/myContactRequest",
        element: <MyContactRequest></MyContactRequest>,
      },
      {
        path: "/dashboard/favoritesBiodata",
        element: <FavoritesBiodata></FavoritesBiodata>,
      },
      {
        path: "/dashboard/gotMarried",
        element: <GotMarried></GotMarried>,
      },

      //admin route
      {
        path: "/dashboard/adminDashboard",
        element: (
          <AdminRoute>
            <AdminDashboard></AdminDashboard>
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/manageUsers",
        element: (
          <AdminRoute>
            <ManageUsers></ManageUsers>
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/approvedPremium",
        element: (
          <AdminRoute>
            <ApprovedPremium></ApprovedPremium>
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/approvedContactRequest",
        element: (
          <AdminRoute>
            <ApprovedContactRequest></ApprovedContactRequest>
          </AdminRoute>
        ),
      },
    ],
  },
]);
