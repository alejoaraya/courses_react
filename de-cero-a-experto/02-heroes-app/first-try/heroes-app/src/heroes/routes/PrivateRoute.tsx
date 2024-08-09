import { ReactNode, useContext } from "react";
import { AuthContex } from "../../auth/context/AuthContex";
import { Navigate, useLocation } from "react-router";

interface Props {
  children: ReactNode;
}
export const PrivateRoute = ({ children }: Props) => {
  const { state } = useContext(AuthContex);
  const { pathname, search } = useLocation();
  const lastPath = pathname + search;
  localStorage.setItem("lastPath", lastPath);

  return state.logged ? children : <Navigate to={"/login"} />;
};
