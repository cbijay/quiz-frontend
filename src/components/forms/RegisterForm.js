import React, { useRef, useState } from "react";
import { TextField, Button, Grid, CircularProgress, FormControl, FormLabel, FormGroup, FormControlLabel, Checkbox, FormHelperText, Typography, useMediaQuery } from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { registerUser } from "../../store/actions/authAction";
import { Link } from "react-router-dom";

function RegisterForm() {
  //Returns true if screen size is less than 1024px
  const small = useMediaQuery('(max-width:1024px)');
  const [acceptTerms, setAcceptTerms] = useState(true);
  const { isLoading } = useSelector((state) => state.auth);
  const [price, setPrice] = useState(0)
  const methods = useForm();
  const { register, handleSubmit, errors, watch, reset } = methods;
  const dispatch = useDispatch();
  const password = useRef({});
  const subjects = [
    { label: 'Quiz ($50)', price: 50 },
    { label: 'Nepali & Moral Science (Basic)', price: 20 },
    { label: 'Nepali & Moral Science (Intermediate)', price: 20 },
    { label: 'Website Design & Development', price: 20 },
    { label: 'Public Speaking & Leadership', price: 20 },
    { label: 'Extra Curriculum Activities & Entertainment', price: 20 },
    { label: 'Yoga for kids', price: 20 },
    { label: 'Spiritual Camp', price: 20 },

  ]
  password.current = watch("password", "");

  const onSubmit = (data) => {
    dispatch(registerUser(data));
    const {
      ApplicantName, email, grade, age, parentName, address, MailAddress, phone, password, confirmPassword
    } = data
    console.log(ApplicantName, email, grade, age, parentName, address, MailAddress, phone, password, confirmPassword)
    reset();
  };

  const calculatePrice = (e, perCost) => {
    e.target.checked ? setPrice(price + perCost) : setPrice(price - perCost)
  }

  const handleFileChange = (e) => {
    if (e.target.name === "user_img") {
      // setImage(e.target.files[0]);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate>
      <Grid container>
        <Grid container item xs={12} spacing={2}>

          <Grid item xs={12} md={3}>
            <TextField
              variant="standard"
              margin="normal"
              fullWidth
              name="ApplicantName"
              label="Applicant's Full Name"
              inputRef={register({ required: "Applicant name is required" })}
              error={!!errors.ApplicantName}
              helperText={!!errors.ApplicantName ? errors.ApplicantName.message : ""}
            />
          </Grid>

          <Grid item xs={12} md={4}>
            <TextField
              variant="standard"
              margin="normal"
              fullWidth
              name="email"
              label="Applicant's Email"
              type="email"
              inputRef={register({ required: "Applicant's email is required" })}
              error={!!errors.email}
              helperText={!!errors.email ? errors.email.message : ""}
            />
          </Grid>

          <Grid item xs={12} md={2}>
            <TextField
              variant="standard"
              margin="normal"
              fullWidth
              name="grade"
              label="Applicant's Grade"
              type="text"
              inputRef={register({ required: "Applicant's grade is required" })}
              error={!!errors.grade}
              helperText={!!errors.grade ? errors.grade.message : ""}
            />
          </Grid>

          <Grid item xs={12} md={3}>
            <TextField
              variant="standard"
              margin="normal"
              fullWidth
              name="age"
              label="Applicant's Age"
              type="number"
              inputRef={register({ required: "Applicant's age is required" })}
              error={!!errors.age}
              helperText={!!errors.age ? errors.age.message : ""}
            />
          </Grid>

          <Grid item xs={12} md={3}>
            <TextField
              variant="standard"
              margin="normal"
              fullWidth
              name="parentName"
              label="Parent's Name"
              type="text"
              inputRef={register({ required: "Parent name is required" })}
              error={!!errors.parentName}
              helperText={!!errors.parentName ? errors.parentName.message : ""}
            />
          </Grid>

          <Grid item xs={12} md={3}>
            <TextField
              variant="standard"
              margin="normal"
              fullWidth
              name="address"
              label="Address (City & State)"
              type="text"
              inputRef={register({ required: "Address is required" })}
              error={!!errors.address}
              helperText={!!errors.address ? errors.address.message : ""}
            />
          </Grid>

          <Grid item xs={12} md={3}>
            <TextField
              variant="standard"
              margin="normal"
              fullWidth
              name="MailAddress"
              label="Mailing Address"
              type="text"
              inputRef={register({ required: "Mail address is required" })}
              error={!!errors.MailAddress}
              helperText={!!errors.MailAddress ? errors.MailAddress.message : ""}
            />
          </Grid>

          <Grid item xs={12} md={3}>
            <TextField
              variant="standard"
              margin="normal"
              fullWidth
              name="phone"
              label="Phone Number"
              type="number"
              inputRef={register({ required: "Phone number is required" })}
              error={!!errors.phone}
              helperText={!!errors.phone ? errors.phone.message : ""}
            />
          </Grid>

          <Grid item xs={12} md={3}>
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
          </Grid>

          <Grid item xs={12} md={3}>
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
          </Grid>

          <Grid item xs={12} md={6}></Grid>

          <Grid item xs={12} md={6}>
            <FormControl component="fieldset" className={'formControl'}>
              <FormLabel component="legend">Choose Subject (USD 20.00 Each)</FormLabel>
              <FormGroup>
                {
                  subjects.map(subject => (
                    <FormControlLabel
                      control={<Checkbox onChange={(e) => calculatePrice(e, subject.price)} name='subjects[]' />}
                      label={subject.label} value={subject.price}
                    />
                  ))
                }
              </FormGroup>
              <FormHelperText>Each Subject cost $20.00 except Quiz for $50.00</FormHelperText>
            </FormControl>
          </Grid>

          <Grid container item xs={12} md={6} justify='space-evenly'>
            <Grid item xs={12}>
              <Button
                variant="contained"
                component="label"
                color="primary"
              >
                Upload Photo
                <input
                  type="file"
                  hidden
                  onChange={(e) => handleFileChange(e)}
                />
              </Button>

              <Typography variant={small ? 'subtitle1' : 'h4'} style={{ color: 'grey' }}>Total cost: ${price}.00</Typography>
            </Grid>

            <Grid item xs={12}>
              <FormControlLabel
                control={
                  <Checkbox
                    name="acceptTerms"
                    checked={acceptTerms}
                    onChange={() => setAcceptTerms(!acceptTerms)}
                  />
                }
                label="I accept terms and conditions"
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
            </Grid>
          </Grid>

        </Grid>
      </Grid>

    </form>
  );
}

export default RegisterForm;
