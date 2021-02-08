import React, { useRef } from "react";
import { TextField, Button, Grid, CircularProgress } from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { registerUser } from "../../store/actions/authAction";
import { Link } from "react-router-dom";

function RegisterForm() {
  const { isLoading } = useSelector((state) => state.auth);
  const methods = useForm();
  const { register, handleSubmit, errors, watch, reset } = methods;
  const dispatch = useDispatch();
  const password = useRef({});
  password.current = watch("password", "");

  const onSubmit = (data) => {
    dispatch(registerUser(data));
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate>
      <TextField
        variant="standard"
        margin="normal"
        fullWidth
        name="name"
        label="Name"
        inputRef={register({ required: "Name is required" })}
        error={!!errors.name}
        helperText={!!errors.username ? errors.name.message : ""}
      />
      <TextField
        variant="standard"
        margin="normal"
        fullWidth
        name="email"
        label="Email"
        type="email"
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
        inputRef={register({
          required: "Password is required",
          minLength: {
            value: 6,
            message: "Password must have at least 6 characters",
          },
        })}
        error={!!errors.password}
        helperText={!!errors.password ? errors.password.message : ""}
      />
      <TextField
        variant="standard"
        margin="normal"
        fullWidth
        type="password"
        name="confirmPassword"
        label="Confirm Password"
        inputRef={register({
          required: "Confirm password is required",
          minLength: {
            value: 6,
            message: "Password must have at least 6 characters",
          },
          validate: (value) =>
            value === password.current || "The passwords do not match",
        })}
        error={!!errors.confirmPassword}
        helperText={
          !!errors.confirmPassword ? errors.confirmPassword.message : ""
        }
      />
      <Button type="submit" fullWidth variant="contained" color="primary">
        {isLoading && <CircularProgress color="secondary" />}
        Register
      </Button>
      <Grid container justify="space-between">
        <Grid item>
          <Button component={Link} to="login" color="inherit">
            {"Already have an account? Login"}
          </Button>
        </Grid>
      </Grid>
    </form>
  );
}

export default RegisterForm;
