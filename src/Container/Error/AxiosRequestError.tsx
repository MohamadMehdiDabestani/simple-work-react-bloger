import {
  Fragment,
  useContext,
  SyntheticEvent,
} from "react";
import { Snackbar, SnackbarOrigin } from "@material-ui/core";
import Alert from "@material-ui/lab/Alert";
import { Context } from "../../Context/Context";
const positionSnack: SnackbarOrigin = {
  vertical: "top",
  horizontal: "right",
};
const AxiosRequestError = (Component: any) => {
  return function WihErrorComponent(props: any) {
    const { isRequestError, setIsRequestError } = useContext(Context);
    const handleClose = (e?: SyntheticEvent, reason?: string) => {
      if (reason === "clickaway") {
        return;
      }
      setIsRequestError(null);
    };
    return (
      <Fragment>
        <Component {...props} />
        {isRequestError && (
          <Snackbar
            onClose={handleClose}
            anchorOrigin={positionSnack}
            autoHideDuration={5000}
            open={Boolean(isRequestError)}
          >
            <Alert variant="filled" severity="error">
              {isRequestError.message}
            </Alert>
          </Snackbar>
        )}
      </Fragment>
    );
  };
};

export default AxiosRequestError;
