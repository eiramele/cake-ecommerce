import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useEffect } from "react";
import { LOGIN } from "./routing.routes";

export default function PrivateRoute({ children }) {
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();

  useEffect(
    function () {
      if (!isAuthenticated) navigate(LOGIN);
    },
    [isAuthenticated, navigate]
  );
  return isAuthenticated ? children : null;
}
