import React from "react";
import FacebookIcon from "@material-ui/icons/Facebook";
import { Button } from "@material-ui/core";

function SocialIcon() {
  return (
    <Button
      component="a"
      href="https://www.facebook.com/Nepalese-Society-School-Texas-USA-104384784589240"
      target="_blank"
    >
      <FacebookIcon />{" "}
    </Button>
  );
}

export default SocialIcon;
