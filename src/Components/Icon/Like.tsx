import { IconButton } from "@material-ui/core";
import { Style } from "./Style";
import { useState } from "react";

const Like = () => {
  const [active, setActive] = useState<boolean>(false);
  const toggle = () => {
    setActive(!active);
  };
  return (
    <Style
      as={IconButton}
      onClick={toggle}
      className={` ${active && "redLike"}`}
    >
      <i className="fi-rr-heart"></i>
    </Style>
  );
};

export default Like;
