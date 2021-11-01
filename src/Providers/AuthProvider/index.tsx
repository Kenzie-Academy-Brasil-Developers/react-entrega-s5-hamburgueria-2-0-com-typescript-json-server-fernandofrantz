import { createContext, ReactNode, useContext, useState } from "react";
import axios from "axios";
import { useHistory } from "react-router";

interface AuthProps {
  children: ReactNode;
}

interface UserData {
  username: string;
  email: string;
  password: string;
  age: number;
}

interface AuthProviderData {
  authToken: string;
  signIn: (userData: FormLoginData) => void;
  registerUser: (userData: UserData) => void;
  logout: () => void;
}

interface FormLoginData {
  email: string;
  password: string;
}

export const AuthContext = createContext<AuthProviderData>(
  {} as AuthProviderData
);

export const AuthProvider = ({ children }: AuthProps) => {
  const history = useHistory();
  const [authToken, setAuthToken] = useState(
    () => localStorage.getItem("token") || ""
  );

  const signIn = (data: FormLoginData) => {
    axios
      .post("https://kenzie-hamburgueria.herokuapp.com/login", data)
      .then((response) => {
        localStorage.setItem("token", response.data.accessToken);
        history.push("/home");
        console.log(response);
      })
      .catch((error) => console.log(error));
  };

  const registerUser = (data: UserData) => {
    axios
      .post("https://kenzie-hamburgueria.herokuapp.com/users", data)
      .then((response) => {
        console.log("user created successfully");
        history.push("/");
      })
      .catch((error) => console.log(error));
  };

  const logout = () => {
    localStorage.clear();
    history.push("/");
    setAuthToken("");
  };

  return (
    <AuthContext.Provider value={{ authToken, logout, signIn, registerUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
