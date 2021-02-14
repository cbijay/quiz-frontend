import React from "react";
import SiteLayout from "../../layouts/SiteLayout";
import { Card, CardContent, Grid, Typography } from "@material-ui/core";
import CardHeading from "../../components/card/CardHeading";

function About() {
  return (
    <SiteLayout>
      <Grid container>
        <Grid item xs={12}>
          <Card>
            <CardHeading>About</CardHeading>
            <CardContent>
              <Grid container spacing={1}>
                <Grid item xs={12}>
                  <Typography paragraph>
                    Aiming to promote Nepalese culture and heritage, Nepalese
                    Society, Texas (NST) has been involved in different
                    community programs. One of them is the school, KG thru 12
                    grade. The school also includes a separate class (Bal Bikas)
                    especially to teach just the Nepali language. The main
                    purpose of the school is to promote and preserve Nepali
                    language &amp; culture, help kids with their regular classes
                    and assist kids to build on their critical thinking.
                  </Typography>
                  <Typography paragraph>
                    Our course package includes moral science, Nepali language,
                    school math, science as well as SAT program. We teach all
                    courses in our state-of-the-art classrooms. Apart from
                    teaching, essay writing competition, Quiz Contest,
                    educational debates, and poem competition are some of the
                    other areas that we touch upon every year.
                  </Typography>
                  <Typography paragraph>
                    In addition to the School program, NST also organizes 2
                    weeks long summer camp each year. The camp provides children
                    with the opportunity to learn about religion, Nepalese
                    culture, history, and geography as well. It is a fun-filled
                    and highly interactive camp. The program has been rated as
                    one of the most successful programs that NST has been
                    organizing for the past couple of years.
                  </Typography>
                  <Typography paragraph>
                    In 2010, the school added one more program that was quiz
                    contest. There were 50 participants in the first quiz
                    contest. We conducted three contests at NST. This contest
                    was not for one day. It’s a 7 to 10 weeks series of quiz
                    event for one group.
                  </Typography>
                  <Typography paragraph>
                    Our team conducted a one-day quiz contest at the ANA
                    National convention 2012 organized in Dallas, Texas. The
                    kids from out of state also participated in this quiz
                    contest.
                  </Typography>
                  <Typography paragraph>
                    The quiz team has three members, Bijay Raj Bhattarai, Samir
                    Gnwali, and a team led by Mr. Binay Aryal. This program was
                    one of the best and popular programs of NST but we were
                    unable to continue due to space management at that time.
                  </Typography>
                  <Typography paragraph>
                    We are planning to start an online quiz using our own
                    software. The team will lead by school Principal Er. Bijay
                    Raj Bhattarai with team member NST General Secretary Bhanu
                    Kharel and School Parent's committee coordinator Samir
                    Gyawali.
                  </Typography>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </SiteLayout>
  );
}

export default About;
