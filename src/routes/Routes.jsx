import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/home/Home";
import BioData from "../pages/bioData/BioData";
import SignUp from "../pages/Authentication/signUp/SignUp";
import LogIn from "../pages/Authentication/logIn/LogIn";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        index: true,
        element: <Home></Home>
      },
      {
        path: 'bioData',
        element: <BioData></BioData>
      },
      {
        path: 'signUp',
        element: <SignUp></SignUp>
      },
      {
        path: 'logIn',
        element: <LogIn></LogIn>
      }
    ]
  },
]);
