import { createContext, ReactNode, useContext, useState } from "react";
import axios from "axios";

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
  signIn: (userData: UserData) => void;
  registerUser: (userData: UserData) => void;
  logout: () => void;
}

export const AuthContext = createContext<AuthProviderData>(
  {} as AuthProviderData
);

export const AuthProvider = ({ children }: AuthProps) => {
  const [authToken, setAuthToken] = useState(
    () => localStorage.getItem("token") || ""
  );

  const signIn = (data: UserData) => {
    axios
      .post("https://kenzie-hamburgueria.herokuapp.com/login", data)
      .then((response) => {
        localStorage.setItem("token", response.data.accessToken);
        console.log(response);
      })
      .catch((error) => console.log(error));
  };

  const registerUser = (data: UserData) => {
    axios
      .post("https://kenzie-hamburgueria.herokuapp.com/users", data)
      .then((response) => {
        console.log("user created successfully");
      })
      .catch((error) => console.log(error));
  };

  const logout = () => {
    localStorage.clear();
    setAuthToken("");
  };

  return (
    <AuthContext.Provider value={{ authToken, logout, signIn, registerUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
