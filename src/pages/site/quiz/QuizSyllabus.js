import React from "react";
import SiteLayout from "../../../layouts/SiteLayout";
import { Grid, Card, CardContent, Typography } from "@material-ui/core";
import CardHeading from "../../../components/card/CardHeading";
import "../../../css/App.css";

function QuizSyllabus() {
  return (
    <SiteLayout>
      <Grid container>
        <Grid item xs={12}>
          <Card>
            <CardHeading>
              General Syllabus for NST’s Quiz Contest – 2021
            </CardHeading>
            <CardContent>
              <Typography paragraph>
                Contestants are expected to learn about the following topics as
                much as possible.
              </Typography>
              <Typography component="h5" variant="subtitle1">
                <b>1. Nepal</b>
              </Typography>
              <ul className="list">
                <li>
                  <b>Famous personalities:</b> no birth dates, etc. will be
                  asked. There may be some audio-visual rounds based on which
                  you will need to know who they are and what they are famous
                  for. The range of personalities will include celebrities and
                  social workers.{" "}
                </li>
                <li>
                  <b>Geography:</b> Basic facts about major cities like
                  Kathmandu, Pokhara, Narayan Gadh (including Chitwan as a
                  whole), Birgunj, Biratnagar, and janakpur. Some record making
                  geographically important locations and structures like the Mt
                  Everest, Rara Lake, Hanuman Dhoka, etc. You may be asked where
                  they are located at.
                </li>
                <li>
                  <b>Language, religion & Culture:</b> Some basic translation of
                  English words into Nepali, major festivals of popular ethnic
                  groups. Information about major religious and cultural
                  festivals is expected to be gained. No specific dates will be
                  asked.
                </li>
              </ul>
              <Typography component="h5" variant="subtitle1">
                <b>2. North America</b>
              </Typography>
              <ul className="list">
                <li>
                  <b>Famous personalities:</b> No birth dates, etc. will be
                  asked. There may be few audio-visual rounds based on which you
                  will need to know who they are and what they are/were famous
                  for. The range of personalities will include celebrities,
                  popular political icons and social workers.
                </li>
                <li>
                  <b>Geography:</b> Basic facts about major man-made structures
                  and natural landscapes and/or structures like Grand Canyon,
                  Mt. Rushmore, etc. You may also be asked to identify the
                  images displayed and where they are located at.
                </li>
                <li>
                  <b>Language/Literature:</b> This topic will include mainly the
                  vocabulary. You may be given options to choose the right
                  answer from. This may also include the spelling round as well.
                  Please be familiar with some all-time famous books of American
                  origin.
                </li>
              </ul>

              <Typography component="h5" variant="subtitle1">
                <b>3. World</b>
              </Typography>
              <ul className="list">
                <li>
                  <b>History:</b> This will include known world figures such as
                  Hitler, Arafat, JF Kennedy, Abraham Lincoln etc. You may be
                  asked what year the certain accident/event happened. We will
                  not ask you the specific dates though. This may also include
                  certain major milestone achievements like when the first GPS
                  and Internet were introduced. We advise you to focus on only
                  major achievements which changed the entire world to some
                  remarkable degree.
                </li>
                <li>
                  <b>Geography/Religion:</b> This section will talk about some
                  major places, structures which are popular in the world. We
                  may ask you to identify the structure and/or name the place
                  where they are located at. We may ask like if Iraq is east to
                  Iran or West to it and so on.
                </li>
                <li>
                  <b>Religion:</b> Please be familiar with basic facts about
                  world’s major religions. You may be asked where Jesus was born
                  or what Buddha’s name was. You may be asked to identify
                  religiously important structures like Ankor Wat temple of
                  Cambodia, Ka’ba of Saudi Arabia and so on.
                </li>
              </ul>

              <Typography component="h5" variant="subtitle1">
                <b>4. Sports & Entertainment</b>
              </Typography>
              <ul className="list">
                <li>
                  <b>Sports:</b> Please focus on past two World cup soccer, NBA
                  and NFL only. We may ask who the winner was and the place as
                  well. You may be asked to identify the names of the sports
                  icon, with their affiliated teams.
                </li>
                <li>
                  <b>Entertainment:</b> We may ask the affiliated country of
                  certain popular movies, name of spouse of popular
                  actors/actresses. We may ask leading stars of some popular
                  movies and the year it was produced. This section will include{" "}
                  <b>Nepal, Bollywood and Hollywood.</b> We may talk about
                  certain major achievements, like winning Oscars or Golden
                  Globe. Please focus on recent two years of data only.
                </li>
              </ul>

              <Typography component="h5" variant="subtitle1">
                <b>5. Science & Technology</b>
              </Typography>
              <ul className="list">
                <li>
                  This section will cover some questions on science which you
                  have studied in your middle/high school grades. Example may be
                  chemical formula of water is, meaning of M in famous equation
                  of relativity, E=MC2. This section may also include zoological
                  questions like if certain animal is reptile or mammal, etc.
                </li>
                <li>
                  Be familiar with the achievement of NASA and the European
                  space agency. We will have some questions on space science
                  however you need to focus just mostly on{" "}
                  <b>our solar system.</b> We expect you to learn some basic
                  facts about planets and stars. We will not ask you the
                  specific measures though.
                </li>
              </ul>

              <Typography component="h5" variant="subtitle1">
                <b>6. GK (IQ related)</b>
              </Typography>
              <ul className="list">
                <li>
                  This section will cover mostly short mathematical challenges
                  and some brain teaser trivia. This is basically for IQ test
                  which will measure your quickness on analytical thinking.
                  There is no need to study for this since it is what it is in
                  your mind and what you are accustomed to.
                </li>
              </ul>

              <Typography component="h5" variant="subtitle1">
                <b>7. News/Events</b>
              </Typography>
              <ul className="list">
                <li>
                  This will include the most recent topics{" "}
                  <b>from around the world</b> which you have been seeing on
                  news channels in recent days. This topic will mostly cover the
                  current affairs and daily/weekly news. You should keep your
                  eyes on NPR, CNN, BBC and Yahoo news.
                </li>
              </ul>

              <Typography component="h5" variant="subtitle1">
                <b>Structure of the Quiz Sessions</b>
              </Typography>
              <ul className="list">
                <li>
                  We will have 5 separate sessions (topics: 1 thru 5 above) on
                  five different days.
                </li>
                <li>
                  The sixth session will be the final one which will have
                  questions from all of the past sessions.
                </li>
                <li>
                  The pre-final rounds will collectively (5 sessions) will have
                  60% weight whereas the final round will carry 40% of the total
                  weight.
                </li>
                <li>
                  Questions from the topic 6 (GK) & topic 7 (News/Event) will
                  appear on every sessions.
                </li>
                <li>
                  Each session will run for about 3 hours, approximately 135
                  questions will be asked in total.
                </li>
                <li>
                  We will have the following rounds:
                  <ul className="list">
                    <li>
                      General Round: Open answer type, with no clue given at
                      all.
                    </li>
                    <li>Multiple Round: This will 4 multiple answers.</li>
                    <li>
                      Audio-Visual Round: This will have picture, audio or video
                      type.
                    </li>
                    <li>
                      Rapid-Fire Round: This will have maximum 10 questions in a
                      minute.
                    </li>
                  </ul>
                </li>
              </ul>
              <Typography paragraph>
                If you have any question, please feel free to call the NST
                School Principal, Bijay R. Bhattarai@682-433-3947
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </SiteLayout>
  );
}

export default QuizSyllabus;
