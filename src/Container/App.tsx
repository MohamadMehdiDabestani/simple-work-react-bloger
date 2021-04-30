import { memo, useState } from "react";
import ScrollToTop from "../Components/ScrollToTop/ScrollToTop";
import Router from "./Router/Router";
import Rtl from "../Components/Style/Matrial/Rtl/Rtl";
import { Context } from "../Context/Context";
function App() {
  const [isErrorFormValidate, setIsErrorFormValidate] = useState<boolean>(
    false
  );
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [isLogin, setIsLogin] = useState<boolean>(false);
  console.log("render app");
  return (
    <Context.Provider
      value={{
        isErrorFormValidate,
        setIsErrorFormValidate,
        openModal,
        setOpenModal,
        isLogin,
        setIsLogin,
      }}
    >
      <Rtl>
        <Router />
        <ScrollToTop />
      </Rtl>
    </Context.Provider>
  );
}

export default memo(App);
