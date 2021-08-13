import { useEffect } from "react";
import AuthLayout from "../../layouts/AuthLayout";
import { useSelector } from "react-redux";
import { Typography, Card, CardContent, withStyles } from "@material-ui/core";
import AlertMessage from "../../components/alert/AlertMessage";
import RegisterForm from "../../components/forms/RegisterForm";
import { useHistory } from "react-router-dom";
import SiteHeader from "../../components/header/SiteHeader";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const styles = () => ({
  subTitle: {
    color: "#777",
    fontSize: 1.25 + "rem",
    marginBottom: 20,
  },
  formLabel: {
    display: "block",
  },
  cardWrapper: {
    margin: "15px 0",
    border: "1px solid #ddd",
    padding: "16px",
  },
  error: {
    color: "#f44336",
    fontSize: ".75rem",
    marginBottom: ".5rem",
  },
});

function Register({ classes }) {
  let { loggedIn, user: { role } = {} } = useSelector((state) => state.auth);
  const admin = role === "A" ? true : false;
  const student = role === "S" ? true : false;
  const history = useHistory();
  const { type, message } = useSelector((state) => state.alert);

  useEffect(() => {
    if (loggedIn && admin) {
      history.push("/admin");
    } else if (loggedIn && student) {
      history.push("/");
    } else {
      history.push("/register");
    }
  }, [history, admin, student, loggedIn]);

  const stripePromise = loadStripe(
    process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY
  );

  return (
    <AuthLayout>
      <SiteHeader />
      <Typography component="h3" variant="h5" className={classes.subTitle}>
        Register
      </Typography>
      <Card>
        <CardContent>
          {message && <AlertMessage type={type} message={message} />}
          <Elements stripe={stripePromise}>
            <RegisterForm classes={classes} />
          </Elements>
        </CardContent>
      </Card>
    </AuthLayout>
  );
}

export default withStyles(styles)(Register);
