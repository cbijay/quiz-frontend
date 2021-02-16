import { Grid, withStyles } from "@material-ui/core";
import SiteLayout from "../../../layouts/SiteLayout";
import { useSelector } from "react-redux";
import PrincipalMessage from "../../../components/home/PrincipalMessage";
import Banner from "../../../components/home/Banner";

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
          <Banner />
          <Grid container justify="center">
            <PrincipalMessage classes={classes} />
          </Grid>
        </>
      )}
    </SiteLayout>
  );
}

export default withStyles(styles)(Home);
