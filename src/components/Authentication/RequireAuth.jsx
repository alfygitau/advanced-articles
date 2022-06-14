import { Navigate, Outlet, useLocation } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const RequireAuth = () => {
  const location = useLocation();
  const { auth } = useAuth();
  const user2 = JSON.parse(localStorage.getItem("user"));
  
  return user2 ? (
    <Outlet />
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
};
export default RequireAuth;
