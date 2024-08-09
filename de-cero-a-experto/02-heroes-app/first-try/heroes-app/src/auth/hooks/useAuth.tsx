import { useState } from "react";
import { Credentials } from "../../@types/types";

export const useAuth = () => {
  const [auth, setAuth] = useState(false);

  const login = (credentials: Credentials) => {
    localStorage.setItem("auth-session", JSON.stringify(credentials));
    handleAuth();
  };

  const logout = () => {
    localStorage.removeItem("auth-session");
    handleAuth();
  };

  const handleAuth = () => {
    const auth = localStorage.getItem("auth-session");
    auth !== null && setAuth(true);
    setAuth(false);
  };

  return {
    login,
    logout,
    auth,
  };
};
