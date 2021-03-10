import { useEffect } from "react";
import AuthLayout from "../../layouts/AuthLayout";
import { useSelector } from "react-redux";
import { Typography, Card, CardContent, withStyles } from "@material-ui/core";
import DismissableAlert from "../../components/alert/DismissableAlert";
import useAlertStatus from "../../hooks/useAlertStatus";
import RegisterForm from "../../components/forms/RegisterForm";
import { useHistory } from "react-router-dom";
import SiteHeader from "../../components/header/SiteHeader";

const styles = () => ({
  subTitle: {
    color: "#777",
    fontSize: 1.25 + "rem",
    marginBottom: 20,
  },
  formLabel: {
    display: "block",
  },
});

function Register({ classes }) {
  let { loggedIn, user: { role } = {} } = useSelector((state) => state.auth);
  const admin = role === "A" ? true : false;
  const student = role === "S" ? true : false;
  const history = useHistory();
  const { type, message } = useSelector((state) => state.alert);
  const { isOpen, closeAlert } = useAlertStatus();

  useEffect(() => {
    if (loggedIn && admin) {
      history.push("/admin");
    } else if (loggedIn && student) {
      history.push("/");
    } else {
      history.push("/register");
    }
  }, [history, admin, student, loggedIn]);

  return (
    <AuthLayout>
      <SiteHeader />
      <Typography component="h3" variant="h5" className={classes.subTitle}>
        Register
      </Typography>
      <Card>
        <CardContent>
          {message && (
            <DismissableAlert
              open={isOpen}
              type={type}
              message={message}
              closeAlert={closeAlert}
            />
          )}
          <RegisterForm classes={classes} />
        </CardContent>
      </Card>
    </AuthLayout>
  );
}

export default withStyles(styles)(Register);
