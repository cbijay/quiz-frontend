import { useEffect } from "react";
import AuthLayout from "../../layouts/AuthLayout";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import { Typography, Card, CardContent, withStyles } from "@material-ui/core";
import LoginForm from "../../components/forms/LoginForm";
import AlertMessage from "../../components/alert/AlertMessage";
import SiteHeader from "../../components/header/SiteHeader";

const styles = () => ({
  subTitle: {
    color: "#777",
    fontSize: 1.25 + "rem",
    marginBottom: 20,
  },
});

function Login({ classes }) {
  let { loggedIn, user: { role, status } = {} } = useSelector((state) => state.auth);
  const admin = role === "A" ? true : false;
  const student = role === "S" ? true : false;
  const { type, message } = useSelector((state) => state.alert);
  const history = useHistory();

  useEffect(() => {
    if (loggedIn && admin) {
      history.push("/admin");
    } else if (loggedIn && student && status === 1) {
      history.push("/");
    } else {
      history.push("/login");
    }
  }, [history, admin, student, loggedIn, status]);

  return (
    <AuthLayout>
      <SiteHeader />
      <Typography component="h3" variant="h5" className={classes.subTitle}>
        Login
      </Typography>
      <Card>
        <CardContent>
          {message && <AlertMessage type={type} message={message} />}
          <LoginForm />
        </CardContent>
      </Card>
    </AuthLayout>
  );
}

export default withStyles(styles)(Login);
