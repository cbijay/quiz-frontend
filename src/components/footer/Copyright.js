import React from "react";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";

function Copyright() {
    return (
        <Typography style={{ marginTop: 40 }} variant="body2" color="#fff" align="center">
            {"Copyright © "}
            <Link color="inherit">Nepalese Society of Texas School</Link>{" "}
            {new Date().getFullYear()}
            {"."}
        </Typography>
    );
}

export default Copyright;
