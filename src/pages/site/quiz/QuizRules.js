import React from "react";
import SiteLayout from "../../../layouts/SiteLayout";
import { Grid, Card, CardContent, Typography } from "@material-ui/core";
import CardHeading from "../../../components/card/CardHeading";
import "../../../css/App.css";

function QuizRules() {
  return (
    <SiteLayout>
      <Grid container>
        <Grid item xs={12}>
          <Card>
            <CardHeading>
              NST’s Quiz Contest – 2021(Rules & Regulations)
            </CardHeading>
            <CardContent>
              <Typography paragraph>
                The Quiz Committee has made all the necessary preparation for
                the contest. Please be informed about the following rules. The
                rules my change without prior notice and the quiz committee will
                communicate about the changes/updates with all the teams as soon
                as possible.
              </Typography>
              <ol className="list">
                <li>
                  <b>Team Formation:</b> Only individual application will be
                  accepted. Based on the number of qualified applications, the
                  contesting teams will be by lottery. The lottery will be drawn
                  from different age buckets in order to have a balanced team.
                </li>
                <li>
                  <b>Fee:</b> Each applicant must submit the application form
                  with applicable fee by the deadline. The fee can be paid
                  online.
                </li>
                <li>
                  <b>On-Time:</b> Each contestant is expected to be on-time and
                  without absence in any sessions until there is an emergency.
                  In case of emergency, please contact the Quiz Committee as
                  soon as possible for necessary arrangements.
                </li>
                <li>
                  <b>Quietness:</b> Please maintain quiet environment and DO NOT
                  talk loudly while the session is in the progress however you
                  can discuss with your team mates, if necessary.
                </li>
                <li>
                  <b>Penalty:</b> If you violate any rules and behave
                  in-appropriately, your team will be penalized with certain
                  points. The rule is: 3 Violations=10 Point from cumulative
                  (including final).
                </li>
                <li>
                  <b>No Cheating:</b> If you are found with any kind of
                  cheating, you will be expelled immediately. Please make sure
                  you do not have any written papers, except the notebook we
                  provide, with you. You can write notes only after we give you
                  the notebooks. You should not bring any of your papers with
                  you to the quiz area. ZERO TOLERANCE ON CHEATING.
                </li>
                <li>
                  <b>Debate on questions:</b> If you find any questions/answers
                  wrong, please raise your hand before you speak. You must write
                  down the question number. We will review the question/answer
                  during the break.
                </li>
                <li>
                  <b>Break:</b> You will be given breaks for lunch during
                  pre-final sessions and 2 breaks during final sessions. We will
                  provide you with the lunch for all of the present people
                  (participants and guests in the audience).
                </li>
                <li>
                  <b>Start time:</b> The first question will pop-up at 11:00
                  sharp. We will not delay at all. If you cannot be present on
                  time, you will probably miss questions. Please be there at
                  about 10:30.
                </li>
                <li>
                  <b>Guests:</b> You can bring any number of quests but please
                  make sure you don't ask anyone to come with kids under 6 years
                  old.
                </li>
                <li>
                  <b>Issue:</b> If there is any issue raised, the quiz
                  coordinating team will have discussions. It may have
                  discussions with the quiz participating team, if necessary and
                  give its final verdict. Each team must accept the decisions
                  made by the NST’s quiz team.
                </li>
                <li>
                  <b>Prizes:</b> NST will award the winning team members with
                  brand new laptops, trophies and other items in the Nepali New
                  Year program. There are so many other prizes for other teams
                  as well. Please be informed that the prize items are subject
                  to change. Also please be informed that the prize distribution
                  date is also subject to change.
                </li>
              </ol>
              <Typography component="h6" variant="h6" align="center">
                <b>Suggestions:</b>
              </Typography>
              <ol className="list">
                <li>
                  <b>Proper Rest:</b> You should sleep at least for 8 hours at
                  night before the quiz day. This will increase the energy level
                  of your brain and you can properly think and/or judge while
                  answering questions.
                </li>
                <li>
                  <b>Team Work:</b> Always talk to your team mates prior to
                  making final decision.
                </li>
                <li>
                  <b>Timing:</b> Take maximum allowed time to answer. You should
                  not hurry.
                </li>
                <li>
                  <b>Listening to other teams:</b> There are so many related
                  questions that you can get answers for if you carefully
                  listening to questions to other teams and how/what they
                  answer.
                </li>
              </ol>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </SiteLayout>
  );
}

export default QuizRules;
