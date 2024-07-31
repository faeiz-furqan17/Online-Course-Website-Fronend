import { Outlet, Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

const ProtectedRoutes = () => {
  debugger;
  const user = useSelector((state) => state.user);

  return user.data.token ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoutes;
