import React, { useEffect, useState } from "react";
import {
  TextField,
  Button,
  Grid,
  Checkbox,
  FormControlLabel,
  Input,
  withStyles,
} from "@material-ui/core";
import { Backup as BackupIcon } from "@material-ui/icons";
import { useForm } from "react-hook-form";
import usePreviousLocation from "../../hooks/usePreviousLocation";
import { useDispatch } from "react-redux";
import {
  createStudent,
  updateStudent,
} from "../../store/actions/studentAction";

const styles = {
  formLabel: {
    display: "block",
  },
  uploadBtn: {
    marginBottom: 10,
    display: "block",
  },
};

function StudentForm({ student, mode, classes }) {
  const {
    register,
    handleSubmit,
    errors,
    setValue,
    getValues,
    reset,
  } = useForm();
  const {
    id,
    name,
    email,
    grade,
    age,
    phone_number,
    parents_name,
    city,
    address,
  } = student || "";
  const [changePassword, setChangePassword] = useState(false);
  const [userImage, setUserImage] = useState();
  const { backToLocation } = usePreviousLocation();
  const dispatch = useDispatch();

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
    formData.append("role", data.role);
    formData.append("user_img", userImage);

    if (mode === "edit") {
      dispatch(updateStudent(id, formData));
    } else {
      dispatch(createStudent(formData));
      reset();
    }
  };

  const handlePassword = (e) => {
    setChangePassword(e.target.checked);
  };

  const handleFileChange = (e) => {
    if (e.target.name === "user_img") {
      setUserImage(e.target.files[0]);
    }
  };

  useEffect(() => {
    setValue("name", name, { shouldDirty: true });
    setValue("email", email, { shouldDirty: true });
    setValue("grade", grade, { shouldDirty: true });
    setValue("age", age, { shouldDirty: true });
    setValue("phone_number", phone_number, { shouldDirty: true });
    setValue("parents_name", parents_name, { shouldDirty: true });
    setValue("city", city, { shouldDirty: true });
    setValue("address", address, { shouldDirty: true });
  }, [
    name,
    email,
    grade,
    age,
    phone_number,
    parents_name,
    city,
    address,
    setValue,
  ]);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Grid container spacing={1}>
        <Grid item xs={12} lg={6}>
          <TextField
            variant="standard"
            margin="normal"
            fullWidth
            name="name"
            label="Name"
            defaultValue={getValues("name") ? getValues("name") : ""}
            inputRef={register({ required: "Name is required" })}
            error={!!errors.name}
            helperText={!!errors.name ? errors.name.message : ""}
          />
        </Grid>
        <Grid item xs={12} lg={6}>
          <TextField
            variant="standard"
            margin="normal"
            fullWidth
            name="email"
            label="Email"
            defaultValue={getValues("email") ? getValues("email") : ""}
            inputRef={register({ required: "Email is required" })}
            error={!!errors.email}
            helperText={!!errors.email ? errors.email.message : ""}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            variant="standard"
            margin="normal"
            fullWidth
            name="grade"
            label="Grade"
            defaultValue={getValues("grade") ? getValues("grade") : ""}
            inputRef={register}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            variant="standard"
            margin="normal"
            fullWidth
            type="number"
            name="age"
            label="Age"
            defaultValue={getValues("age") ? getValues("age") : ""}
            inputRef={register}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            variant="standard"
            margin="normal"
            fullWidth
            name="phone_number"
            label="Phone Number"
            defaultValue={
              getValues("phone_number") ? getValues("phone_number") : ""
            }
            inputRef={register}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            variant="standard"
            margin="normal"
            fullWidth
            name="parents_name"
            label="Parents Name"
            defaultValue={
              getValues("parents_name") ? getValues("parents_name") : ""
            }
            inputRef={register}
          />
        </Grid>
        {mode !== "edit" ? (
          <Grid item xs={12} sm={6}>
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
          </Grid>
        ) : (
          ""
        )}
        <Grid item xs={12} sm={6}>
          <TextField
            variant="standard"
            margin="normal"
            fullWidth
            name="city"
            label="City"
            defaultValue={getValues("city") ? getValues("city") : ""}
            inputRef={register}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            multiline
            variant="standard"
            margin="normal"
            fullWidth
            name="address"
            label="Address"
            rows={4}
            defaultValue={getValues("address") ? getValues("address") : ""}
            inputRef={register}
          />
        </Grid>
      </Grid>

      <Input type="hidden" name="role" value="S" inputRef={register} />
      <label htmlFor="user_img" className={classes.uploadBtn}>
        <Input
          style={{ display: "none" }}
          id="user_img"
          name="user_img"
          type="file"
          onChange={handleFileChange}
        />
        <Button color="primary" variant="contained" component="span">
          <BackupIcon />
          &nbsp;Upload Photo
        </Button>{" "}
      </label>
      {mode === "edit" ? (
        <FormControlLabel
          className={classes.formLabel}
          control={
            <Checkbox
              name="changePassword"
              checked={changePassword}
              onChange={handlePassword}
            />
          }
          label="Change Password"
        />
      ) : (
        ""
      )}
      {changePassword ? (
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
      ) : (
        ""
      )}

      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Button type="submit" fullWidth variant="contained" color="primary">
            {mode === "edit" ? "Update" : "Submit"}
          </Button>
        </Grid>

        <Grid item xs={6}>
          <Button
            type="reset"
            fullWidth
            variant="contained"
            color="default"
            onClick={backToLocation}
          >
            Cancel
          </Button>
        </Grid>
      </Grid>
    </form>
  );
}

export default withStyles(styles)(StudentForm);
