import React, { useState } from "react";
import { Button, Grid, Input } from "@material-ui/core";
import { useForm } from "react-hook-form";
import { importQuestion } from "../../store/actions/questionAction";
import usePreviousLocation from "../../hooks/usePreviousLocation";
import { useDispatch } from "react-redux";
import { Backup as BackupIcon } from "@material-ui/icons";

function QuestionImportForm({ topicId }) {
  const [questionFile, setQuestionFile] = useState();
  const { backToLocation } = usePreviousLocation();
  const { register, handleSubmit, errors, reset } = useForm();
  const dispatch = useDispatch();

  const onSubmit = (data) => {
    const formData = new FormData();
    formData.append("question_file", questionFile);

    dispatch(importQuestion(topicId, formData));
    reset();
  };

  const handleFileChange = (e) => {
    if (e.target.name === "question_file") {
      setQuestionFile(e.target.files[0]);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="question_file">
        <Input
          style={{ display: "none" }}
          id="question_file"
          name="question_file"
          type="file"
          accept=".xlsx"
          onChange={handleFileChange}
          error={!!errors.question_file}
          inputRef={register({ required: "Question File is required" })}
          helpertext={
            !!errors.question_file ? errors.question_file.message : ""
          }
        />
        <Button color="primary" variant="contained" component="span">
          <BackupIcon />
          &nbsp; Import Question Via Excel File
        </Button>{" "}
      </label>

      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Button type="submit" fullWidth variant="contained" color="primary">
            {"Import"}
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

export default QuestionImportForm;
