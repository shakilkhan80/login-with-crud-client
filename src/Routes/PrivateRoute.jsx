import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

// eslint-disable-next-line react/prop-types
const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);

  if (loading) {
    return (
      <progress className="progress w-56 flex items-center justify-center"></progress>
    );
  }
  if (user?.email) {
    return children;
  }

  return <Navigate to={"/login"} replace></Navigate>;
};

export default PrivateRoute;
