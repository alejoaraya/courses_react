import { ReactNode, useContext } from "react";
import { AuthContex } from "../../auth/context/AuthContex";
import { Navigate } from "react-router";

interface Props {
  children: ReactNode;
}
export const PublicRoute = ({ children }: Props) => {
  const { state } = useContext(AuthContex);

  return !state.logged ? children : <Navigate to={"/"} />;
};
