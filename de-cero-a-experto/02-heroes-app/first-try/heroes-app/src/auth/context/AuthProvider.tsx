import { ReactNode, useReducer } from "react";
import { types } from "../types/types";
import { AuthContex } from "./AuthContex";
import { authReducer } from "./authReducer";

interface Props {
  children: ReactNode;
}

const init = () => {
  const user = JSON.parse(localStorage.getItem("auth-session"));

  return {
    logged: !!user,
  };
};

export const AuthProvider = ({ children }: Props) => {
  const [state, dispatch] = useReducer(authReducer, { logged: false }, init);

  const login = (credentials: object) => {
    localStorage.setItem("auth-session", JSON.stringify(credentials));
    const action = {
      type: types.login,
      payload: credentials,
    };
    dispatch(action);
  };

  const logout = () => {
    localStorage.removeItem("auth-session");
    const action = {
      type: types.logout,
      payload: {},
    };
    dispatch(action);
  };

  return (
    <AuthContex.Provider value={{ state, login, logout }}>
      {children}
    </AuthContex.Provider>
  );
};
