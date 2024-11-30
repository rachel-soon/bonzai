import { Navigate, Outlet } from "react-router";
import { useAuth } from "./hooks/useAuth";

const Protected = () => {
  const user = useAuth();

  if (!user!.token) return <Navigate to="/login" />;
  return <Outlet />;
};

export default Protected;
