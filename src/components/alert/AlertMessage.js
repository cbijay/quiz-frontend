import React, { useEffect, useState } from "react";
import { Collapse, Snackbar } from "@material-ui/core";
import { Alert, AlertTitle } from "@material-ui/lab";

const AlertMessage = ({ type, message }) => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (message !== undefined || "") setOpen(true);
  }, [message]);

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Collapse in={open}>
        <Snackbar
          anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
          open={message ? true : false}
          autoHideDuration={2000}
          onClose={handleClose}
        >
          <Alert severity={type}>
            <AlertTitle>{type.toUpperCase()}</AlertTitle>
            {message}
          </Alert>
        </Snackbar>
      </Collapse>
    </>
  );
};

export default AlertMessage;
