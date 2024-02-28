import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { ReactNode, useEffect } from "react";
import { LOGIN } from "./routing.routes";

interface PrivateRouteProps {
  children: ReactNode;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ children }) => {
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();

  useEffect(
    function () {
      if (!isAuthenticated) navigate(LOGIN);
    },
    [isAuthenticated, navigate]
  );
  return isAuthenticated ? children : null;
};

export default PrivateRoute;
