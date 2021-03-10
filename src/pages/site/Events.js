import React, { useEffect } from "react";
import {
  Card,
  CardContent,
  Container,
  Grid,
  Typography,
  withStyles,
} from "@material-ui/core";
import SiteLayout from "../../layouts/SiteLayout";
import CardHeading from "../../components/card/CardHeading";
import { useDispatch, useSelector } from "react-redux";
import { getSiteEvents } from "../../store/actions/eventAction";
import ReactHtmlParser from "react-html-parser";

const styles = {
  cardContent: {
    marginBottom: 15,
  },
};
const Events = ({ classes }) => {
  const { events } = useSelector((state) => state.events);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSiteEvents());
  }, [dispatch]);

  return (
    <SiteLayout>
      <Container maxWidth="lg">
        <Grid item xs={12}>
          <Card>
            <CardHeading>Events</CardHeading>
            <CardContent className={classes.cardContent}>
              <Grid container>
                {events.map(({ title, video }, index) => (
                  <Grid key={index} item xs={12} md={6}>
                    <Typography
                      component="h4"
                      variant="h4"
                      color="textSecondary"
                    >
                      {title}
                    </Typography>
                    {ReactHtmlParser(video)}
                  </Grid>
                ))}
              </Grid>
            </CardContent>
          </Card>
        </Grid>
      </Container>
    </SiteLayout>
  );
};

export default withStyles(styles)(Events);
