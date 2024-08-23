import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoutes = () => {
  const { state } = useContext(UserContext);

  return state.isLogged ? <Outlet /> : <Navigate to={"/"} />;
};

export default PrivateRoutes;
