import React, { useEffect } from "react";
import { TextField, Button, Grid } from "@material-ui/core";
import { useForm } from "react-hook-form";
import usePreviousLocation from "../../hooks/usePreviousLocation";
import { useDispatch } from "react-redux";
import {
  createMessage,
  updateMessage,
} from "../../store/actions/messageAction";

function MessageForm({ message, mode }) {
  const { register, handleSubmit, errors, setValue, getValues, reset } =
    useForm();
  const { id, description } = message || "";
  const { backToLocation } = usePreviousLocation();
  const dispatch = useDispatch();

  const onSubmit = (data) => {
    if (mode === "edit") {
      dispatch(updateMessage(id, data));
    } else {
      dispatch(createMessage(data));
      reset();
    }
  };

  useEffect(() => {
    setValue("description", description, { shouldDirty: true });
  }, [description, setValue]);

  return (
    <form onSubmit={handleSubmit(onSubmit)} encType="">
      <TextField
        multiline
        variant="standard"
        margin="normal"
        fullWidth
        name="description"
        label="description"
        rows={4}
        defaultValue={getValues("description") ? getValues("description") : ""}
        inputRef={register({ required: "Description is required" })}
        InputLabelProps={mode === "edit" && { shrink: true }}
        error={!!errors.description}
        helperText={!!errors.description ? errors.description.message : ""}
      />

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

export default MessageForm;
