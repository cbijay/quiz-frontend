import { useEffect } from "react";
import AuthLayout from "../../layouts/AuthLayout";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import { Typography, Card, CardContent, withStyles } from "@material-ui/core";
import LoginForm from "../../components/forms/LoginForm";
import DismissableAlert from "../../components/alert/DismissableAlert";
import useAlertStatus from "../../hooks/useAlertStatus";
import SiteHeader from "../../components/header/SiteHeader";

const styles = () => ({
  subTitle: {
    color: "#777",
    fontSize: 1.25 + "rem",
    marginBottom: 20,
  },
});

function Login({ classes }) {
  let { loggedIn, user: { role } = {} } = useSelector((state) => state.auth);
  const admin = role === "A" ? true : false;
  const student = role === "S" ? true : false;
  const { type, message } = useSelector((state) => state.alert);
  const history = useHistory();
  const { isOpen, closeAlert } = useAlertStatus();

  useEffect(() => {
    if (loggedIn && admin) {
      history.push("/admin");
    } else if (loggedIn && student) {
      history.push("/");
    } else {
      history.push("/login");
    }
  }, [history, admin, student, loggedIn]);

  return (
    <AuthLayout>
      <SiteHeader />
      <Typography component="h3" variant="h5" className={classes.subTitle}>
        Login
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
          <LoginForm />
        </CardContent>
      </Card>
    </AuthLayout>
  );
}

export default withStyles(styles)(Login);
