import { useEffect, useState } from "react";
import Button from "../../../components/common/Button";
import { Cake } from "../../Home/Components";
import "./login.css";
import { useAuth } from "../../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { HOME } from "../../../routes/routing.routes";

export interface User {
  id: number;
  name: string;
  password: string;
  email: string;
  cart: Cake[];
}

// const usersURL = "http://localhost:3000/users";
export default function LogIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { login, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    if (email && password) login(email, password);
  }

  useEffect(
    function () {
      if (isAuthenticated) navigate(HOME, {replace:true});
    },
    [isAuthenticated, navigate]
  );

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <p>Best cakes in town</p>
      <input
        type="text"
        placeholder="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button className="login-submit">Log in</Button>
    </form>
  );
}
