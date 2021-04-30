import {
  Backdrop,
  CircularProgress,
  createStyles,
  makeStyles,
} from "@material-ui/core";
import { useState } from "react";

const classes = makeStyles(() => 
  createStyles({
    backdrop: {
      zIndex: 9999,
      color: "#fff"
    },
  })
)

const Load = () => {
  const MyClass = classes();
  const [open] = useState<boolean>(false);
  return (
    <Backdrop open={open} className={MyClass.backdrop}>
      <CircularProgress color="inherit" />
    </Backdrop>
  );
};

export default Load;
