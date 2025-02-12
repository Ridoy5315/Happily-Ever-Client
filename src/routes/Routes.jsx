import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/home/Home";
import SignUp from "../pages/Authentication/signUp/SignUp";
import LogIn from "../pages/Authentication/logIn/LogIn";
import Biodatas from "../pages/bioData/BioDatas";
import BiodataDetails from "../pages/biodataDetails/BiodataDetails";
import PrivateRoute from "./PrivateRoute";

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
    ],
  },
]);
