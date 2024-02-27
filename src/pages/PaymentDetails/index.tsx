import { useAuth } from "../../context/AuthContext";

export default function Payment() {
  const { user } = useAuth();

  return (
    <div>
      <p>Your name: {user?.name}</p>
      <p>Your email: {user?.email}</p>
    </div>
  );
}
