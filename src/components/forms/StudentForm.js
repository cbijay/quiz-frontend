import React, { useEffect, useState } from "react";
import {
  TextField,
  Button,
  Grid,
  Checkbox,
  FormControlLabel,
  Input,
} from "@material-ui/core";
import { Backup as BackupIcon } from "@material-ui/icons";
import { useForm } from "react-hook-form";
import usePreviousLocation from "../../hooks/usePreviousLocation";
import { useDispatch } from "react-redux";
import {
  createStudent,
  updateStudent,
} from "../../store/actions/studentAction";

function StudentForm({ student, mode }) {
  const {
    register,
    handleSubmit,
    errors,
    setValue,
    getValues,
    reset,
  } = useForm();
  const { id, name, email, mobile, city, address } = student || "";
  const [changePassword, setChangePassword] = useState(false);
  const [userImage, setUserImage] = useState();
  const { backToLocation } = usePreviousLocation();
  const dispatch = useDispatch();

  const onSubmit = (data) => {
    const formData = new FormData();

    formData.append("name", data.name);
    formData.append("email", data.email);
    formData.append("mobile", data.mobile);
    formData.append("password", data.password);
    formData.append("city", data.city);
    formData.append("address", data.address);
    formData.append("role", data.role);
    formData.append("user_img", userImage);

    console.log(data);

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
    setValue("mobile", mobile, { shouldDirty: true });
    setValue("city", city, { shouldDirty: true });
    setValue("address", address, { shouldDirty: true });
  }, [name, email, mobile, city, address, setValue]);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
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
      <TextField
        variant="standard"
        margin="normal"
        fullWidth
        name="mobile"
        label="Mobile No."
        defaultValue={getValues("mobile") ? getValues("mobile") : ""}
        inputRef={register}
      />
      {mode !== "edit" ? (
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
      <TextField
        variant="standard"
        margin="normal"
        fullWidth
        name="city"
        label="City"
        defaultValue={getValues("city") ? getValues("city") : ""}
        inputRef={register}
      />
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
      <Input type="hidden" name="role" value="S" inputRef={register} />
      <label htmlFor="user_img">
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

export default StudentForm;
