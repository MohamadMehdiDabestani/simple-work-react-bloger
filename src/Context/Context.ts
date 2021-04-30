import { createContext } from "react";
export interface ContextType {
  isErrorFormValidate: boolean;
  setIsErrorFormValidate: (error: boolean) => void;
  setOpenModal: (open: boolean) => void;
  openModal: boolean;
  isLogin: boolean;
  setIsLogin: (login: boolean) => void;
}
export const Context = createContext<ContextType>({
  isErrorFormValidate: false,
  setIsErrorFormValidate: () => {},
  openModal: false,
  setOpenModal: () => {},
  isLogin: false,
  setIsLogin: () => {},
});
