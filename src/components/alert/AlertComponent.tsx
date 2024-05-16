import { Snackbar, Alert, AlertTitle } from "@mui/material";
import React from "react";
import { useAppDispatch, useAppSelector } from "../../core/hooks/rtkHooks";
import { setShowAlertAction } from "../../core/store/slices/alertSlice";
import { Else, If, Then } from "react-if";

export interface IAlertProps {
  type: string;
  content: string;
}

const AlertComponent = () => {
  const { showAlert, alertProps } = useAppSelector((state) => state.alert);
  const dispatch = useAppDispatch();

  const handleClose = (
    event: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }

    dispatch(setShowAlertAction({ showAlert: false }));
  };

  return (
    <>
      <If condition={alertProps.type === "error"}>
        <Then>
          <Snackbar
            open={showAlert}
            autoHideDuration={6000}
            anchorOrigin={{ vertical: "top", horizontal: "right" }}
            onClose={handleClose}
          >
            <Alert
              severity="error"
              sx={{ width: "100%" }}
              onClose={handleClose}
            >
              <AlertTitle>Error</AlertTitle>
              {alertProps.content}
            </Alert>
          </Snackbar>
        </Then>
        <Else>
          <Snackbar
            open={showAlert}
            autoHideDuration={6000}
            anchorOrigin={{ vertical: "top", horizontal: "right" }}
            onClose={handleClose}
          >
            <Alert
              severity="success"
              sx={{ width: "100%" }}
              onClose={handleClose}
            >
              <AlertTitle>Error</AlertTitle>
              {alertProps.content}
            </Alert>
          </Snackbar>
        </Else>
      </If>
    </>
  );
};

export default AlertComponent;
