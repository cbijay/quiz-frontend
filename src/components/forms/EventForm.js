import React, { useEffect } from "react";
import { TextField, Button, Grid } from "@material-ui/core";
import { useForm } from "react-hook-form";
import usePreviousLocation from "../../hooks/usePreviousLocation";
import { useDispatch } from "react-redux";
import { createEvent, updateEvent } from "../../store/actions/eventAction";

function EventForm({ event, mode }) {
  const { register, handleSubmit, errors, setValue, getValues, reset } =
    useForm();
  const { id, title, video } = event || "";
  const { backToLocation } = usePreviousLocation();
  const dispatch = useDispatch();

  const onSubmit = (data) => {
    if (mode === "edit") {
      dispatch(updateEvent(id, data));
    } else {
      dispatch(createEvent(data));
      reset();
    }
  };

  useEffect(() => {
    setValue("title", title, { shouldDirty: true });
    setValue("video", video, { shouldDirty: true });
  }, [title, video, setValue]);

  return (
    <form onSubmit={handleSubmit(onSubmit)} encType="">
      <TextField
        variant="standard"
        margin="normal"
        fullWidth
        name="title"
        label="Title"
        defaultValue={getValues("title") ? getValues("title") : ""}
        inputRef={register({ required: "Title is required" })}
        InputLabelProps={mode === "edit" && { shrink: true }}
        error={!!errors.title}
        helperText={!!errors.title ? errors.title.message : ""}
      />

      <TextField
        multiline
        variant="standard"
        margin="normal"
        fullWidth
        name="video"
        label="video"
        rows={4}
        defaultValue={getValues("video") ? getValues("video") : ""}
        inputRef={register({ required: "Video is required" })}
        InputLabelProps={mode === "edit" && { shrink: true }}
        error={!!errors.video}
        helperText={!!errors.video ? errors.video.message : ""}
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

export default EventForm;
