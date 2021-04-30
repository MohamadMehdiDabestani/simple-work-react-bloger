import { Snackbar as Snack, SnackbarOrigin } from "@material-ui/core";
import { useContext, SyntheticEvent, FC, ReactElement } from "react";
import { Context } from "../../Context/Context";
interface Props {
  position: SnackbarOrigin;
  children: ReactElement<any, any>;
  duration: number;
}
const Snackbar: FC<Props> = (props) => {
  const { openModal, setOpenModal } = useContext(Context);
  const handleClose = (e?: SyntheticEvent, reason?: string) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenModal(false);
  };
  return (
    <Snack
      open={openModal}
      autoHideDuration={props.duration}
      anchorOrigin={props.position}
      onClose={handleClose}
    >
      {props.children}
    </Snack>
  );
};

export default Snackbar;
