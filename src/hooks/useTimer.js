import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getActiveQuestion,
  openQuestion,
  resetTimerStatus,
} from "../store/actions/questionAction";
import { participantAnswer } from "../store/actions/studentAction";

function useTimer(userAnswer) {
  //Redux hooks
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const { question } = useSelector((state) => state.questions);
  const admin = user?.role === "A" ? true : false;
  const participant = user?.role === "S" && user?.status === 1 ? true : false;

  //Timer Variable
  let initialSeconds = 0;
  let [minutes, setMinutes] = useState();
  let [seconds, setSeconds] = useState(initialSeconds);

  useEffect(() => {
    dispatch(getActiveQuestion());
  }, [dispatch]);

  useEffect(() => {
    let oldMinutes = Number(localStorage.getItem("minutes"));
    let oldSeconds = Number(localStorage.getItem("seconds"));

    if (question) {
      setMinutes(
        question && question.status === 1 && question.hasOwnProperty("timer")
          ? Number(question.timer)
          : 0
      );
      setSeconds(0);
    }

    if (userAnswer) {
      setMinutes(0);
      setSeconds(0);
    } else if (question?.status === 2) {
      setMinutes(0);
      setSeconds(0);
    } else if (oldSeconds) {
      if (question) {
        dispatch(resetTimerStatus(question.id, 0));
      }

      if (question && question.reset === 1) {
        setMinutes(
          question && question.hasOwnProperty("timer") && Number(question.timer)
        );
        /* setMinutes(
          question && question.hasOwnProperty("timer")
            ? Number(question.timer)
            : 0
        ); */
        setSeconds(initialSeconds);
      } else {
        setMinutes(oldMinutes);
        setSeconds(oldSeconds);
      }
    } else {
      setMinutes(
        question && question.status === 1 && question.hasOwnProperty("timer")
          ? Number(question.timer)
          : 0
      );
    }
  }, [question, userAnswer, dispatch, initialSeconds]);

  useEffect(() => {
    let interval = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      }

      if (seconds === 0) {
        if (minutes === 0) {
          clearInterval(interval);

          if (admin) {
            if (question && question.status === 1) {
              dispatch(openQuestion(question.id, 2));
            }
          }

          if (participant) {
            if (question !== "undefined" && question && !userAnswer) {
              const answerData = {
                topic_id: question.topic_id,
                user_id: user.id,
                question_id: question.id,
                user_answer: 0,
                answer: question.answer,
              };

              dispatch(participantAnswer(answerData, true));
            }
          }
        } else {
          setMinutes(minutes - 1);
          setSeconds(59);
        }
      }

      localStorage.setItem("minutes", minutes);
      localStorage.setItem("seconds", seconds);
    }, 2000);
    return () => {
      clearInterval(interval);
    };
  }, [
    minutes,
    seconds,
    admin,
    participant,
    dispatch,
    question,
    user,
    userAnswer,
    initialSeconds,
  ]);

  return { minutes, seconds };
}

export default useTimer;
