import React, { useEffect, useState } from "react";
import {
  TextField,
  Button,
  Grid,
  Input,
  FormControl,
  InputLabel,
  NativeSelect,
} from "@material-ui/core";
import { useForm } from "react-hook-form";
import usePreviousLocation from "../../hooks/usePreviousLocation";
import { useDispatch, useSelector } from "react-redux";
import {
  createQuestion,
  updateQuestion,
} from "../../store/actions/questionAction";

function QuestionForm({ topicId, formQuestion, mode }) {
  const { register, handleSubmit, errors, setValue, getValues, reset } =
    useForm();
  const {
    id,
    question,
    a,
    b,
    c,
    d,
    answer,
    code_snippet,
    answer_exp,
    status,
    question_video_link,
    question_order,
  } = formQuestion || "";
  const [questionImage, setQuestionImage] = useState();
  const { backToLocation } = usePreviousLocation();
  const [changeOption, setChangeOption] = useState({ answer: "", status: "" });
  const dispatch = useDispatch();
  const alert = useSelector((state) => state.alert);

  const questionStatus = [
    { status_name: "Active", status_value: 1 },
    { status_name: "Inactive", status_value: 0 },
  ];

  const answerOption = [
    { option_name: "A", option_value: "A" },
    { option_name: "B", option_value: "B" },
    { option_name: "C", option_value: "C" },
    { option_name: "D", option_value: "D" },
  ];

  console.log(alert?.type);

  const handleOption = (e) => {
    setChangeOption({ ...changeOption, [e.target.name]: e.target.value });
  };

  const onSubmit = (data) => {
    const formData = new FormData();

    formData.append("question", data.question);
    formData.append("a", data.a);
    formData.append("b", data.b);
    formData.append("c", data.c);
    formData.append("d", data.d);
    formData.append("answer", data.answer);
    formData.append("question_order", data.question_order);
    formData.append("code_snippet", data.code_snippet);
    formData.append("answer_exp", data.answer_exp);
    formData.append("question_video_link", data.question_video_link);
    formData.append("status", data.status);
    formData.append("question_img", questionImage);
    formData.append("method_field", "PUT");

    if (mode === "edit") {
      dispatch(updateQuestion(id, formData));
    } else {
      dispatch(createQuestion(topicId, formData));
      reset();
    }
  };

  const handleFileChange = (e) => {
    if (e.target.name === "question_img") {
      setQuestionImage(e.target.files[0]);
    }
  };

  useEffect(() => {
    setValue("question", question, { shouldDirty: true });
    setValue("a", a, { shouldDirty: true });
    setValue("b", b, { shouldDirty: true });
    setValue("c", c, { shouldDirty: true });
    setValue("d", d, { shouldDirty: true });
    setValue("answer", answer, { shouldDirty: true });
    setValue("question_order", question_order, { shouldDirty: true });
    setValue("code_snippet", code_snippet, { shouldDirty: true });
    setValue("answer_exp", answer_exp, { shouldDirty: true });
    setValue("question_video_link", question_video_link, { shouldDirty: true });
    setValue("status", status, { shouldDirty: true });
  }, [
    question,
    a,
    b,
    c,
    d,
    answer,
    question_order,
    code_snippet,
    answer_exp,
    question_video_link,
    status,
    setValue,
  ]);

  return (
    <form onSubmit={handleSubmit(onSubmit)} method="post">
      <TextField
        variant="standard"
        margin="normal"
        fullWidth
        multiline
        rows={4}
        name="question"
        label="Question Title"
        defaultValue={getValues("question") ? getValues("question") : ""}
        inputRef={register({ required: "Question Title is required" })}
        InputLabelProps={mode === "edit" && { shrink: true }}
        error={!!errors.question}
        helperText={!!errors.question ? errors.question.message : ""}
      />

      <TextField
        variant="standard"
        margin="normal"
        fullWidth
        name="a"
        label=" A - Option"
        defaultValue={getValues("a") ? getValues("a") : ""}
        inputRef={register({ required: "A - Option is required" })}
        InputLabelProps={mode === "edit" && { shrink: true }}
        error={!!errors.a}
        helperText={!!errors.a ? errors.a.message : ""}
      />

      <TextField
        variant="standard"
        margin="normal"
        fullWidth
        name="b"
        label="B - Option"
        defaultValue={getValues("b") ? getValues("b") : ""}
        inputRef={register({ required: "B - Option is required" })}
        InputLabelProps={mode === "edit" && { shrink: true }}
        error={!!errors.b}
        helperText={!!errors.b ? errors.b.message : ""}
      />

      <TextField
        variant="standard"
        margin="normal"
        fullWidth
        name="c"
        label="C - Option"
        defaultValue={getValues("c") ? getValues("c") : ""}
        inputRef={register({ required: "C - Option is required" })}
        InputLabelProps={mode === "edit" && { shrink: true }}
        error={!!errors.c}
        helperText={!!errors.c ? errors.c.message : ""}
      />

      <TextField
        variant="standard"
        margin="normal"
        fullWidth
        name="d"
        label="D - Option"
        defaultValue={getValues("d") ? getValues("d") : ""}
        inputRef={register({ required: "D - Option is required" })}
        InputLabelProps={mode === "edit" && { shrink: true }}
        error={!!errors.d}
        helperText={!!errors.d ? errors.d.message : ""}
      />

      <FormControl margin="normal" size="small" variant="standard" fullWidth>
        <InputLabel htmlFor="answer-label" shrink={mode === "edit"}>
          Correct Answer
        </InputLabel>

        <NativeSelect
          defaultValue={getValues("answer") || ""}
          onChange={handleOption}
          inputProps={{
            name: "answer",
            id: "answer-label",
          }}
          inputRef={register}
          InputLabelProps={mode === "edit" && { shrink: true }}
        >
          {answerOption &&
            answerOption.map(({ option_name, option_value }, index) => (
              <option key={index} aria-label={option_name} value={option_value}>
                {option_name}
              </option>
            ))}
        </NativeSelect>
      </FormControl>

      <TextField
        variant="standard"
        margin="normal"
        fullWidth
        name="question_order"
        label="Question Order"
        type="number"
        defaultValue={
          getValues("question_order") ? getValues("question_order") : ""
        }
        inputRef={register({ required: "Question Order is required" })}
        InputLabelProps={mode === "edit" && { shrink: true }}
      />

      <TextField
        variant="standard"
        margin="normal"
        fullWidth
        multiline
        rows={4}
        name="code_snippet"
        label="Code Snippet"
        defaultValue={
          getValues("code_snippet") ? getValues("code_snippet") : ""
        }
        inputRef={register}
        InputLabelProps={mode === "edit" && { shrink: true }}
      />

      <TextField
        multiline
        variant="standard"
        margin="normal"
        fullWidth
        name="answer_exp"
        label="Answer Explanation"
        rows={4}
        defaultValue={getValues("answer_exp") ? getValues("answer_exp") : ""}
        inputRef={register}
        InputLabelProps={mode === "edit" && { shrink: true }}
      />

      <TextField
        variant="standard"
        margin="normal"
        fullWidth
        name="question_video_link"
        label="Add Video To Question"
        defaultValue={
          getValues("question_video_link")
            ? getValues("question_video_link")
            : ""
        }
        inputRef={register}
        InputLabelProps={mode === "edit" && { shrink: true }}
      />

      <label htmlFor="question_img">
        Upload Question Image
        <Input
          id="question_img"
          name="question_img"
          type="file"
          onChange={handleFileChange}
        />
      </label>

      <FormControl margin="normal" size="small" variant="standard" fullWidth>
        <InputLabel htmlFor="status-label" shrink={mode === "edit"}>
          Status
        </InputLabel>

        <NativeSelect
          defaultValue={getValues("status") || ""}
          onChange={handleOption}
          inputProps={{
            name: "status",
            id: "status-label",
          }}
          inputRef={register}
        >
          {questionStatus &&
            questionStatus.map(({ status_name, status_value }, index) => (
              <option key={index} aria-label={status_name} value={status_value}>
                {status_name}
              </option>
            ))}
        </NativeSelect>
      </FormControl>

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

export default QuestionForm;
