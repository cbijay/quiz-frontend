import React, { forwardRef } from "react";
import { Collapse, IconButton } from "@material-ui/core";
import { Alert } from "@material-ui/lab";
import { Close as CloseIcon } from "@material-ui/icons";

const DismissableAlert = forwardRef(
  ({ open, type, message, closeAlert }, ref) => (
    <>
      <Collapse in={open}>
        <Alert
          severity={type}
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={closeAlert}
              ref={ref}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
        >
          {message}
        </Alert>
      </Collapse>
    </>
  )
);

export default DismissableAlert;
