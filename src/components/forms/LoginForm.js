import React from "react";
import { TextField, Button, Grid, CircularProgress } from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { login } from "../../store/actions/authAction";
import { Link } from "react-router-dom";

function LoginForm() {
  const { isLoading } = useSelector((state) => state.auth);
  const methods = useForm();
  const { register, handleSubmit, errors } = methods;
  const dispatch = useDispatch();

  const onSubmit = (data) => {
    dispatch(login(data));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate>
      <TextField
        variant="standard"
        margin="normal"
        fullWidth
        name="email"
        label="Email"
        inputRef={register({ required: "Email is required" })}
        error={!!errors.email}
        helperText={!!errors.email ? errors.email.message : ""}
      />
      <TextField
        variant="standard"
        margin="normal"
        fullWidth
        type="password"
        name="password"
        label="Password"
        inputRef={register({ required: "Password is required" })}
        error={!!errors.password}
        helperText={!!errors.password ? errors.password.message : ""}
      />
      <Button type="submit" fullWidth variant="contained" color="primary">
        {isLoading && <CircularProgress color="secondary" />}
          Sign In
        </Button>
      <Grid container>
        <Grid item xs>
          <Button href="#" color="inherit">
            Forgot password?
            </Button>
        </Grid>
        <Grid item>
          <Button
            component={Link}
            to="register"
            href="/register"
            color="inherit"
          >
            {"Don't have an account? Sign Up"}
          </Button>
        </Grid>
      </Grid>
    </form>
  );
}

export default LoginForm;
