import { Grid, Typography, withStyles } from "@material-ui/core";
import SiteLayout from "../../../layouts/SiteLayout";
import { useSelector } from "react-redux";
import PrincipalMessage from "../../../components/home/PrincipalMessage";

const styles = {
  title: {
    color: "#636b6f",
    textTransform: "uppercase",
    letterSpacing: 5,
    marginTop: 30,
  },
  cardContent: {
    "&:last-child": {
      paddingBottom: 16,
    },
  },
};

function Home({ classes }) {
  const { user } = useSelector((state) => state.auth);

  return (
    <SiteLayout>
      {!user && (
        <>
          <Grid container justify="center">
            <Grid item xs={12} lg={8}>
              <Typography
                component="h3"
                variant="h3"
                color="inherit"
                align="center"
                className={classes.title}
                gutterBottom
              >
                Nepalese Society of Texas School
              </Typography>

              <Typography
                component="h4"
                variant="h4"
                color="textSecondary"
                align="center"
                display="block"
              >
                NST - 1998
              </Typography>
              <Typography
                component="h6"
                variant="h6"
                color="textSecondary"
                align="center"
                display="block"
                gutterBottom
              >
                QUIZ CONTEST PROGRAM
              </Typography>
            </Grid>

            <PrincipalMessage classes={classes} />
          </Grid>
        </>
      )}
    </SiteLayout>
  );
}

export default withStyles(styles)(Home);
