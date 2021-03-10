import React, { useEffect, useRef, useState } from "react";
import {
  TextField,
  Button,
  Grid,
  CircularProgress,
  FormControl,
  FormLabel,
  FormGroup,
  FormControlLabel,
  Checkbox,
  Typography,
  useMediaQuery,
  Input,
} from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { getSubjects } from "../../store/actions/subjectAction";
import { registerUser } from "../../store/actions/authAction";
//import PayPal from "../payment/Paypal";

function RegisterForm({ classes }) {
  const methods = useForm();
  const { register, handleSubmit, errors, watch } = methods;

  //Redux Hooks
  const { isLoading } = useSelector((state) => state.auth);
  const { subjects } = useSelector((state) => state.subjects);
  const dispatch = useDispatch();

  //Returns true if screen size is less than 1024px
  const small = useMediaQuery("(max-width:1024px)");

  //Price, password, image and checkout variable
  const [price, setPrice] = useState(0);
  const password = useRef({});
  password.current = watch("password", "");
  const [subject, setSubject] = useState([]);
  const [image, setImage] = useState();
  //const [checkout, setCheckout] = useState(false);
  //const [userData, setUserData] = useState();

  useEffect(() => {
    dispatch(getSubjects());
  }, [dispatch]);

  const onSubmit = (data) => {
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("email", data.email);
    formData.append("grade", data.grade);
    formData.append("age", data.age);
    formData.append("phone_number", data.phone_number);
    formData.append("parents_name", data.parents_name);
    formData.append("password", data.password);
    formData.append("city", data.city);
    formData.append("address", data.address);
    formData.append("subjects", subject);
    formData.append("price", price);
    formData.append("terms", data.terms);
    formData.append("user_img", image);

    dispatch(registerUser(formData));
    /* const user = {
      ...data,
      user_img: image,
    };

    setCheckout(true);
    setUserData(user); */
    //reset();
    //setPrice(0);
  };

  const calculatePrice = (e, perCost) => {
    setSubject([...subject, e.target.value]);
    e.target.checked ? setPrice(price + perCost) : setPrice(price - perCost);
  };

  const handleFileChange = (e) => {
    if (e.target.name === "user_img") {
      setImage(e.target.files[0]);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <Grid container>
          <Grid container item xs={12} spacing={2}>
            <Grid item xs={12} md={3}>
              <TextField
                variant="standard"
                margin="normal"
                fullWidth
                name="name"
                label="Applicant's Full Name"
                inputRef={register({
                  required: "Applicant name is required",
                })}
                error={!!errors.name}
                helperText={!!errors.name ? errors.name.message : ""}
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
                inputRef={register({
                  required: "Applicant's email is required",
                })}
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
                inputRef={register({
                  required: "Applicant's grade is required",
                })}
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
                inputRef={register({
                  required: "Applicant's age is required",
                })}
                error={!!errors.age}
                helperText={!!errors.age ? errors.age.message : ""}
              />
            </Grid>

            <Grid item xs={12} md={3}>
              <TextField
                variant="standard"
                margin="normal"
                fullWidth
                name="parents_name"
                label="Parent's Full Name"
                type="text"
                inputRef={register({
                  required: "Parent's full name is required",
                })}
                error={!!errors.parents_name}
                helperText={
                  !!errors.parents_name ? errors.parents_name.message : ""
                }
              />
            </Grid>

            <Grid item xs={12} md={3}>
              <TextField
                variant="standard"
                margin="normal"
                fullWidth
                name="city"
                label="City"
                type="text"
                inputRef={register({ required: "City is required" })}
                error={!!errors.city}
                helperText={!!errors.city ? errors.city.message : ""}
              />
            </Grid>

            <Grid item xs={12} md={3}>
              <TextField
                variant="standard"
                margin="normal"
                fullWidth
                name="address"
                label="Mailing Address"
                type="text"
                inputRef={register({
                  required: "Mailing address is required",
                })}
                error={!!errors.address}
                helperText={!!errors.address ? errors.address.message : ""}
              />
            </Grid>

            <Grid item xs={12} md={3}>
              <TextField
                variant="standard"
                margin="normal"
                fullWidth
                name="phone_number"
                label="Phone Number"
                type="number"
                inputRef={register({
                  required: "Phone number is required",
                  minLength: {
                    value: 10,
                    message: "Phone number must be of 10 digit",
                  },
                })}
                error={!!errors.phone_number}
                helperText={
                  !!errors.phone_number ? errors.phone_number.message : ""
                }
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
              <FormControl component="fieldset" className={"formControl"}>
                <FormLabel component="legend">
                  Choose Subject (USD 20.00 Each)
                </FormLabel>
                <FormGroup>
                  {subjects &&
                    subjects.map(({ id, subject_name, price }, index) => (
                      <FormControlLabel
                        key={index}
                        control={
                          <Checkbox
                            onChange={(e) => calculatePrice(e, price)}
                            name="subjects"
                            inputRef={register({
                              required: "Subject is required",
                            })}
                          />
                        }
                        label={subject_name}
                        value={id}
                      />
                    ))}
                </FormGroup>
                {/* <FormHelperText>
                  Each Subject cost $20.00 except Quiz for $50.00
                </FormHelperText> */}
              </FormControl>
            </Grid>

            <Grid container item xs={12} md={6} justify="space-evenly">
              <Grid item xs={12}>
                <FormLabel htmlFor="user_img" className={classes.formLabel}>
                  Upload Photo
                  {/* <Button
                      color="primary"
                      variant="contained"
                      component="span"
                    >
                      &nbsp; Upload Photo
                    </Button>{" "} */}
                </FormLabel>
                <Input
                  id="user_img"
                  name="user_img"
                  type="file"
                  onChange={handleFileChange}
                />

                <Typography
                  variant={small ? "subtitle1" : "h4"}
                  style={{ color: "grey" }}
                >
                  Total cost: ${price}.00
                </Typography>
              </Grid>

              <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox />}
                  name="terms"
                  label="I accept terms and conditions"
                  inputRef={register({
                    required: "Please accept terms and conditions",
                  })}
                />
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                >
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
    </>
  );
}

export default RegisterForm;
