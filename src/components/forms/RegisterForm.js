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
  FormHelperText,
} from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { getSubjects } from "../../store/actions/subjectAction";
import { registerUser } from "../../store/actions/authAction";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";

function RegisterForm({ classes }) {
  const methods = useForm();
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
    watch,
    reset,
  } = methods;

  //Redux Hooks
  const { isLoading, userRegister } = useSelector((state) => state.auth);
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
  const [payment, setPayment] = useState(false);

  const stripe = useStripe();
  const elements = useElements();

  useEffect(() => {
    dispatch(getSubjects());

    const handlePayment = async () => {
      if (userRegister === true) {
        const payload = await stripe.createPaymentMethod({
          type: "card",
          card: elements.getElement(CardElement),
        });

        if (payload.error) {
          setError("card", {
            type: "manual",
            message: payload?.error.message,
          });
        }
      }
    };

    handlePayment();
  }, [dispatch, stripe, elements, setError, userRegister]);

  const onSubmit = async (data) => {
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

    if (errors.payment) {
      elements.getElement("card").focus();
      return;
    }

    /* formData.append("card_id", id);
    formData.append("card_brand", brand); */

    dispatch(registerUser(formData));

    /* const payload = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement),
    }); */

    /* if (payload.error) {
      setError("card", {
        type: "manual",
        message: payload?.error.message,
      });
    } else {
      const { id, card: { brand } = {} } = payload?.paymentMethod;

      formData.append("card_id", id);
      formData.append("card_brand", brand);

      dispatch(registerUser(formData));
    } */
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

  const handlePayment = (e) => {
    setPayment(e.target.checked);
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
                    message: "Phone number should be no less than 10 digit",
                  },
                  maxLength: {
                    value: 15,
                    message: "Phone number must be no more than 15 digit",
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
                              required: "Please pick atleast one subject",
                            })}
                          />
                        }
                        label={subject_name}
                        value={id}
                      />
                    ))}
                </FormGroup>
              </FormControl>
              <FormHelperText className={classes.error}>
                {errors.subjects && errors.subjects.message}
              </FormHelperText>
            </Grid>

            <Grid container item xs={12} md={6} justify="space-evenly">
              <Grid item xs={12}>
                <FormLabel htmlFor="user_img" className={classes.formLabel}>
                  Upload Photo
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
                <Grid container>
                  <Grid item xs={12}>
                    <FormControlLabel
                      control={<Checkbox />}
                      name="terms"
                      label="I accept terms and conditions"
                      inputRef={register({
                        required: "Please accept terms and conditions",
                      })}
                    />
                    <FormHelperText className={classes.error}>
                      {errors.terms && errors.terms.message}
                    </FormHelperText>
                  </Grid>
                  <Grid item xs={12}>
                    <FormControlLabel
                      control={
                        <Checkbox checked={payment} onChange={handlePayment} />
                      }
                      name="payment_method"
                      label="Pay via card"
                      inputRef={register({
                        required:
                          "Please choose pay via card inorder to process payment! ",
                      })}
                    />
                    <FormHelperText className={classes.error}>
                      {errors.payment_method && errors.payment_method.message}
                    </FormHelperText>
                  </Grid>
                  <Grid item xs={12}>
                    {payment && (
                      <fieldset>
                        <legend>Payment</legend>

                        <CardElement
                          name="card"
                          hidePostalCode={true}
                          className={classes.cardWrapper}
                          inputRef={register({ required: true })}
                        />
                      </fieldset>
                    )}
                    <FormHelperText className={classes.error}>
                      {errors.card && errors.card.message}
                    </FormHelperText>
                    {/*    <FormHelperText className={classes.cardError}>
                      {paymentError}
                    </FormHelperText> */}
                  </Grid>
                </Grid>

                <Grid container spacing={1}>
                  <Grid item xs={12} sm={6}>
                    <Button
                      type="submit"
                      fullWidth
                      variant="contained"
                      color="primary"
                    >
                      {isLoading && <CircularProgress color="secondary" />}
                      Register
                    </Button>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Button
                      type="submit"
                      fullWidth
                      variant="contained"
                      color="default"
                      onClick={reset}
                    >
                      Reset
                    </Button>
                  </Grid>
                </Grid>

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
