import { makeStyles } from "@material-ui/core/styles";

const AppStyle = makeStyles((theme) => ({
  pageHeading: {
    marginBottom: 20,
  },
  stat: {
    marginBottom: 10,
  },
  paper: {
    padding: theme.spacing(2),
    display: "flex",
    overflow: "auto",
    flexDirection: "column",
  },
  fixedHeight: {
    height: 160,
  },
  button: {
    minWidth: "2em",
    height: "2em",
  },
  divider: {
    marginTop: 15,
  },
  noDivider: {
    margin: theme.spacing(1, 0),
    border: 0,
    height: 0,
  },
  circularButton: {
    borderRadius: `50% !important`,
    height: `3em`,
  },
  editButton: {
    background: theme.palette.primary.main,
    //background: "#1976d2",
    "&:hover": {
      background: theme.palette.primary.dark,
      //background: "#115293",
    },
  },
  greenButton: {
    background: "#4caf50",
    "&:hover": {
      background: "#357a38",
    },
  },
  buttonIcon: {
    fontSize: 16,
  },
}));

export default AppStyle;
