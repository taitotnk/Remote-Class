import { useContext } from "react";
import { AuthContext } from "./Auth";

export const useAuth = () => {
  return useContext(AuthContext);
};
