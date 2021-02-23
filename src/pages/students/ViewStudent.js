import React, { useEffect } from "react";
import {
  Card,
  CardContent,
  Grid,
  Typography,
  Divider,
  withStyles,
  Avatar,
} from "@material-ui/core";
import clsx from "clsx";
import { useDispatch, useSelector } from "react-redux";
import { getStudent } from "../../store/actions/studentAction";
import AppLayout from "../../layouts/AppLayout";

const imageBaseUrl = process.env.REACT_APP_BASE_IMAGE_URL;

const styles = {
  divider: {
    marginBottom: 10,
  },
  avatar: {
    width: 200,
    height: 200,
  },
  dark: {
    background: "#777",
    "&:hover": {
      background: "#333",
    },
  },
  primary: {
    background: "#e64a19",
    color: "#fff",
    "&:hover": {
      background: "#d84315",
    },
  },
  success: {
    background: "#2e7d32",
    color: "#fff",
    "&:hover": {
      background: "#205723",
    },
  },
};
function ViewStudent({ match, classes }) {
  const avatarColor = [
    `${classes.success}`,
    `${classes.primary}`,
    `${classes.dark}`,
    `${classes.secondary}`,
  ];

  const {
    student: {
      name,
      email,
      age,
      grade,
      parents_name,
      address,
      phone_number,
      city,
      image,
    } = {},
  } = useSelector((state) => state.students);
  const dispatch = useDispatch();
  const studentId = match.params.id;

  useEffect(() => {
    dispatch(getStudent(studentId));
  }, [dispatch, studentId]);

  return (
    <AppLayout>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Card>
            <CardContent>
              <Typography
                component="h5"
                variant="h6"
                color="textSecondary"
                gutterBottom
              >
                Student Details
              </Typography>
              <Divider className={classes.divider} />

              <Grid container spacing={2} justify="space-between">
                <Grid item xs={12} lg={9}>
                  <Grid container spacing={2}>
                    <Grid item xs={12} lg={6}>
                      <Typography component="h6" variant="h6">
                        Name
                      </Typography>
                    </Grid>
                    <Grid item xs={12} lg={6}>
                      <Typography paragraph>{name}</Typography>
                    </Grid>
                  </Grid>

                  <Divider className={classes.divider} />

                  <Grid container spacing={2}>
                    <Grid item xs={12} lg={6}>
                      <Typography component="h6" variant="h6">
                        Email
                      </Typography>
                    </Grid>
                    <Grid item xs={12} lg={6}>
                      <Typography paragraph>{email}</Typography>
                    </Grid>
                  </Grid>

                  <Divider className={classes.divider} />

                  <Grid container spacing={2}>
                    <Grid item xs={12} lg={6}>
                      <Typography component="h6" variant="h6">
                        Phone Number
                      </Typography>
                    </Grid>
                    <Grid item xs={12} lg={6}>
                      <Typography paragraph>{phone_number}</Typography>
                    </Grid>
                  </Grid>

                  <Divider className={classes.divider} />

                  <Grid container spacing={2}>
                    <Grid item xs={12} lg={6}>
                      <Typography component="h6" variant="h6">
                        Grade
                      </Typography>
                    </Grid>
                    <Grid item xs={12} lg={6}>
                      <Typography paragraph>{grade}</Typography>
                    </Grid>
                  </Grid>

                  <Divider className={classes.divider} />

                  <Grid container spacing={2}>
                    <Grid item xs={12} lg={6}>
                      <Typography component="h6" variant="h6">
                        Age
                      </Typography>
                    </Grid>
                    <Grid item xs={12} lg={6}>
                      <Typography paragraph>{age}</Typography>
                    </Grid>
                  </Grid>

                  <Divider className={classes.divider} />

                  <Grid container spacing={2}>
                    <Grid item xs={12} lg={6}>
                      <Typography component="h6" variant="h6">
                        Parent's Name
                      </Typography>
                    </Grid>
                    <Grid item xs={12} lg={6}>
                      <Typography paragraph>{parents_name}</Typography>
                    </Grid>
                  </Grid>

                  <Divider className={classes.divider} />

                  <Grid container spacing={2}>
                    <Grid item xs={12} lg={6}>
                      <Typography component="h6" variant="h6">
                        City
                      </Typography>
                    </Grid>
                    <Grid item xs={12} lg={6}>
                      <Typography paragraph>{city}</Typography>
                    </Grid>
                  </Grid>

                  <Divider className={classes.divider} />

                  <Grid container spacing={2}>
                    <Grid item xs={12} lg={6}>
                      <Typography component="h6" variant="h6">
                        Address
                      </Typography>
                    </Grid>
                    <Grid item xs={12} lg={6}>
                      <Typography paragraph>{address}</Typography>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={12} lg={3}>
                  {image === "undefined" || image === "Null" ? (
                    <Avatar
                      className={clsx(
                        classes.avatar,
                        avatarColor[
                          Math.floor(Math.random() * avatarColor.length)
                        ]
                      )}
                    >
                      {name.charAt(0)}
                    </Avatar>
                  ) : (
                    <Avatar
                      className={classes.avatar}
                      src={`${imageBaseUrl}/users/${image}`}
                      alt={name}
                    />
                  )}
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </AppLayout>
  );
}

export default withStyles(styles)(ViewStudent);
