import { createContext } from "react";
import {CustomAxiosError} from "../util/Util"
export interface ContextType {
  isRequestError: CustomAxiosError | null;
  setIsRequestError: (error: CustomAxiosError | null) => void;
  setOpenModal: (open: boolean) => void;
  openModal: boolean;
  isLogin: boolean;
  setIsLogin: (login: boolean) => void;
}
export const Context = createContext<ContextType>({
  openModal: false,
  setOpenModal: () => {},
  isLogin: false,
  setIsLogin: () => {},
  isRequestError: null,
  setIsRequestError: () => {}
});
