import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import LoadingSpinner from "../componenets/shared/loadingSpinner/LoadingSpinner";


const PrivateRoute = ({children}) => {
     const {user, loading} = useAuth();
     const location = useLocation();

     if(loading){
          return <LoadingSpinner></LoadingSpinner>
     }

     if(user) {
          return children;
     }

     return <Navigate to='/logIn' state={{from: location}} replace></Navigate>
};

export default PrivateRoute;