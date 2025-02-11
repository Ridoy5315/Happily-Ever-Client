import React from 'react';
import useAdmin from '../hooks/useAdmin';
import useAuth from '../hooks/useAuth';
import { Navigate, useLocation } from 'react-router-dom';
import LoadingSpinner from '../componenets/shared/loadingSpinner/LoadingSpinner';

const AdminRoute = ({children}) => {
     const [isAdmin, isAdminLoading] = useAdmin();
     const {user, loading} = useAuth();
     const location = useLocation();

     if(loading || isAdminLoading){
          return <LoadingSpinner></LoadingSpinner>
     }
     if(user && isAdmin){
          return children;
     }
     return <Navigate to='/logIn' state={{from: location}} replace></Navigate>
};

export default AdminRoute;