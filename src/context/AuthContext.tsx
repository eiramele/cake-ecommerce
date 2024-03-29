import {
  FunctionComponent,
  ReactNode,
  createContext,
  useContext,
  useReducer,
} from "react";
import { getData } from "../services";
import { User } from "../pages/LogIn/Components";

interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
}

interface AuthContextType extends AuthState {
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
}

interface AuthProviderProps {
  children: ReactNode;
}

interface LoginAction {
  type: "login";
  payload: User;
}

interface LogoutAction {
  type: "logout";
}

type AuthAction = LoginAction | LogoutAction;

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const initialState: AuthState = {
  user: null,
  isAuthenticated: false,
};

function reducer(state: AuthState, action: AuthAction): AuthState {
  switch (action.type) {
    case "login":
      return { ...state, user: action.payload, isAuthenticated: true };
    case "logout":
      return { ...state, user: null, isAuthenticated: false };
    default:
      throw new Error("Unknown action");
  }
}

const AuthProvider: FunctionComponent<AuthProviderProps> = ({ children }) => {
  const [{ user, isAuthenticated }, dispatch] = useReducer(
    reducer,
    initialState
  );

  async function login(email: string, password: string) {
    const url = "http://localhost:3000/users";
    try {
      const users: User[] | null = await getData<User[]>(url);
      const user: User | undefined = users?.find(
        (user) => user.email === email && user.password === password
      );

      if (user) {
        dispatch({ type: "login", payload: user });
      } else {
        alert("User not found");
      }
    } catch (error) {
      console.error("Error fetching users");
    }
  }

  function logout() {
    dispatch({ type: "logout" });
  }

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined)
    throw new Error("AuthContext was used outside AuthProvider");
  return context;
}

export { AuthProvider, useAuth };
