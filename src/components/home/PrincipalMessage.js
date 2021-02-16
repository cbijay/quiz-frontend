import React, { useState } from "react";
import { Grid, Card, CardContent, makeStyles, Typography, Button } from "@material-ui/core";

import principal from "../../images/principal_message.png";
import CommunityImage from './images/Principal Message sideImage.jpg'
import CommunityImage2 from './images/Message SideImage 2.jpg'

const useStyles = makeStyles({
  presidentImage: {
    height: 200,
    width: 200,
    objectFit: 'contain',
    borderRadius: '10px',
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  actionButton: {
    color: 'gray',
    textDecoration: 'none'
  },
  sideImage: {
    maxHeight: 500,
    maxWidth: 500,
    objectFit: 'contain'
  }
})

const PrincipalMessage = () => {
  const classes = useStyles()
  const [showMore, setShowMore] = useState(false)
  return (
    <Grid container justify="center">
      <Grid item xs={12} lg={10}>
        <Card>
          <CardContent className={classes.cardContent}>
            <Grid container spacing={2} >
              <Grid item xs={12} sm={12} md={6}>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={4}>
                    <img className={classes.presidentImage} src={principal} alt="Principal Message" />
                  </Grid>
                  <Grid item xs={12} sm={8}>
                    <Typography component="h6" variant="h6">
                      Er Bijay Raj Bhattarai (Dallas, TX)
                    </Typography>
                    <Typography component="h5" variant="subtitle1" gutterBottom>
                      Principal
                    </Typography>
                    <Typography component="h5" variant="subtitle1" gutterBottom>
                      <a href="tel:+1-682-433-3947" className={classes.actionButton}>(+1) 682-433-3947</a>
                    </Typography>
                    <Typography component="h5" variant="subtitle1" gutterBottom>
                      <a href="mailto:bijay.nst@gmail.com" className={classes.actionButton}>bijay.nst@gmail.com</a> or <a href="mailto:school@ournst.org" className={classes.actionButton}>school@ournst.org</a>.
                    </Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <Typography paragraph>
                      <b>
                        Dear Students, Volunteers, and Parents,!
                      </b>
                    </Typography>
                    <Typography paragraph>
                      Welcome to the Nepalese Society of Texas Community School. It is a tremendous honor to be named the Principal of NST School. I look forward to building positive and supportive partnerships with these great community school volunteers and parents. I am overjoyed to be able to make a positive impact on the lives of students.
                      </Typography>
                    <Typography paragraph>
                      Our commitment at NST School is to provide a healthy and intellectually challenging atmosphere that will motivate students in the twenty-first century to become critical thinkers, creative problem-solvers, and motivated learners ready to succeed.
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={6} md={6}>
                <img className={classes.sideImage} src={CommunityImage} alt="Greeting  Namaskar" />
                <Typography component="h5" variant="subtitle1" className={classes.actionButton}>
                  Photo: Living Hindu Godess.
              </Typography>
              </Grid>
              <Grid item xs={12} md={6}>
                <Typography paragraph style={{ display: `${showMore ? 'block' : 'none'}` }}>
                  We conduct academic and extracurricular activities for KG to High school kids. Our school is based on high standards and expectations for each student regarding academic performance, involvement in extracurricular activities, and responsible citizenship.
                    </Typography>
                <Typography paragraph style={{ display: `${showMore ? 'block' : 'none'}` }}>
                  It is with pride that we keep such high standards and inspire each of our students to dedicate themselves in their regular school to preserve the exceptional record of achievement. It is our students' commitment to our school community that makes NST school an outstanding community school of learning.
                    </Typography>
                <Typography paragraph style={{ display: `${showMore ? 'block' : 'none'}` }}>
                  Our current premises are in the Nepali Cultural and Spiritual Center at Irving, Texas, where kids can see our customs and cultural activities closely. The school environment helps them to build leadership and public speaking skills in their mother tongue: Nepali. We have a passionate group of teachers teaching about Nepal, Nepali reading, writing, and culture.
                  </Typography>
              </Grid>
              <Grid item xs={12} md={6} style={{ display: `${showMore ? 'block' : 'none'}` }}>
                <img className={classes.sideImage} src={CommunityImage2} alt="Greeting  Namaskar" />
                <Typography component="h5" variant="subtitle1" className={classes.actionButton}>
                  Photo: Participants in online cultural program.
              </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography paragraph style={{ display: `${showMore ? 'block' : 'none'}` }}>
                  Since March 2020, we are running an online school due to Covid -19. Currently, the school is running with 344 students and 7 teachers. I really appreciate all the parents for your trust and for giving me a historical opportunity to manage such a large number of students. We are working hard to maintain the quality. We will move to a new location after Corona to a new building of NCSC in Euless, TX.
                    </Typography>
                <Typography paragraph style={{ display: `${showMore ? 'block' : 'none'}` }}>
                  We allow parents to participate in online or classroom events. Teachers and parents can work collaboratively to support their children. I will be in the classroom to help teachers, staff, and students.
                    </Typography>
                <Typography paragraph style={{ display: `${showMore ? 'block' : 'none'}` }}>
                  Our goal is to make NST school an ideal community school to learn our language, culture, customs, and country on top of providing an enhanced education. This will only be possible if we work together. I would like to thank you for taking up this mission with me to help and encourage your child and their experience at the Nepalese Society of Texas Community School.
                    </Typography>
                <Typography paragraph style={{ display: `${showMore ? 'block' : 'none'}` }}>
                  I encourage each parent to take part in the school activities and I wish you all a wonderful school year. If I can be of any assistance, please feel free to contact me.
                    </Typography>
                <Button variant="outlined" onClick={() => setShowMore(!showMore)}>{!showMore ? 'Read more.' : 'Hide'}</Button>
              </Grid>

            </Grid>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}

export default PrincipalMessage;
