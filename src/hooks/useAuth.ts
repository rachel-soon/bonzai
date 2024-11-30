import { createContext, useContext } from "react";

export interface IAuthContext {
  user: null;
  token: string;
  login: (email: string, password: string) => Promise<void>;
  logOut: () => Promise<void>;
  register: (email: string, password: string) => Promise<boolean | null>;
}

export const AuthContext = createContext<IAuthContext | null>(null);

export const useAuth = () => {
  return useContext(AuthContext);
};
