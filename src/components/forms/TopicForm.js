import React, { useEffect, useState } from "react";
import {
  TextField,
  Button,
  Grid,
  FormGroup,
  FormControlLabel,
  Switch,
  Input,
} from "@material-ui/core";
import { useForm } from "react-hook-form";
import usePreviousLocation from "../../hooks/usePreviousLocation";
import { useDispatch } from "react-redux";
import { createTopic, updateTopic } from "../../store/actions/topicAction";

function TopicForm({ topic, mode }) {
  const { register, handleSubmit, errors, setValue, getValues, reset } =
    useForm();
  const { id, title, description, per_q_mark, timer, show_ans, amount } =
    topic || "";
  const { backToLocation } = usePreviousLocation();
  const dispatch = useDispatch();
  const [changePrice, setChangePrice] = useState(false);
  const [changeAnswer, setChangeAnswer] = useState(false);

  const handlePrice = (e) => {
    setChangePrice(e.target.checked);
  };

  const handleAnswer = (e) => {
    setChangeAnswer(e.target.checked);
  };

  const onSubmit = (data) => {
    if (mode === "edit") {
      dispatch(updateTopic(id, data));
    } else {
      dispatch(createTopic(data));
      reset();
    }
  };

  useEffect(() => {
    setValue("title", title, { shouldDirty: true });
    setValue("description", description, { shouldDirty: true });
    setValue("per_q_mark", per_q_mark, { shouldDirty: true });
    setValue("timer", timer, { shouldDirty: true });
    setChangeAnswer(
      Number(show_ans) !== 0 && show_ans !== undefined ? true : false
    );
    setChangePrice(amount !== null && amount !== undefined ? true : false);
    setValue("amount", amount, { shouldDirty: true });
  }, [title, description, per_q_mark, timer, show_ans, amount, setValue]);

  return (
    <form onSubmit={handleSubmit(onSubmit)} encType="">
      <TextField
        variant="standard"
        margin="normal"
        fullWidth
        name="title"
        label="Topic Title"
        defaultValue={getValues("title") ? getValues("title") : ""}
        inputRef={register({ required: "Topic Title is required" })}
        InputLabelProps={mode === "edit" && { shrink: true }}
        error={!!errors.title}
        helperText={!!errors.title ? errors.title.message : ""}
      />

      <TextField
        variant="standard"
        margin="normal"
        fullWidth
        type="number"
        name="per_q_mark"
        label="Per Question Mark"
        defaultValue={getValues("per_q_mark") ? getValues("per_q_mark") : ""}
        inputRef={register({ required: "Per Question Mark is required" })}
        InputLabelProps={mode === "edit" && { shrink: true }}
        error={!!errors.per_q_mark}
        helperText={!!errors.per_q_mark ? errors.per_q_mark.message : ""}
      />

      <TextField
        variant="standard"
        margin="normal"
        fullWidth
        name="timer"
        label="Quiz Time (in minutes)"
        defaultValue={getValues("timer") ? getValues("timer") : ""}
        inputRef={register}
        InputLabelProps={mode === "edit" && { shrink: true }}
      />

      <FormGroup row>
        <FormControlLabel
          control={
            <Switch
              name="show_ans"
              inputRef={register}
              color="primary"
              onChange={handleAnswer}
              checked={changeAnswer}
            />
          }
          label="Enable Show Answer"
        />

        <FormControlLabel
          control={
            <Switch
              name="quiz_price"
              color="primary"
              onChange={handlePrice}
              checked={changePrice}
            />
          }
          label="Quiz Price"
        />
      </FormGroup>

      {changePrice ? (
        <TextField
          variant="standard"
          margin="normal"
          fullWidth
          name="amount"
          label="Choose Quiz Price"
          defaultValue={amount || ""}
          inputRef={register}
          InputLabelProps={mode === "edit" && { shrink: true }}
        />
      ) : (
        ""
      )}

      <Input name="status" type="hidden" defaultValue="1" inputRef={register} />

      <TextField
        multiline
        variant="standard"
        margin="normal"
        fullWidth
        name="description"
        label="Description"
        rows={4}
        defaultValue={getValues("description") ? getValues("description") : ""}
        InputLabelProps={mode === "edit" && { shrink: true }}
        inputRef={register}
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

export default TopicForm;
