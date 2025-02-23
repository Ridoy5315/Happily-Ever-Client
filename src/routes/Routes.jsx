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
        path: '/dashboard',
        element: <EditBiodata></EditBiodata>
      },
      {
        path: '/dashboard/viewBiodata',
        element: <ViewBiodata></ViewBiodata>
      },
      {
        path: '/dashboard/myContactRequest',
        element: <MyContactRequest></MyContactRequest>
      },
      {
        path: '/dashboard/favoritesBiodata',
        element: <FavoritesBiodata></FavoritesBiodata>
      },
    ]
  },
]);
