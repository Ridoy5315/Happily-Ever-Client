import { Navigate } from "react-router-dom";
import useAdmin from "../../hooks/useAdmin";

const DashboardRedirect = () => {
     const [isAdmin] = useAdmin();
     return isAdmin ? (
          <Navigate to="/dashboard/adminDashboard" />
        ) : (
          <Navigate to="/dashboard/editBiodata" />
        );
};

export default DashboardRedirect;