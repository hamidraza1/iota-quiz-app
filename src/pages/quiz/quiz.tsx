import { useContext, useEffect } from "react";
import QuizContext from "../../context/quizContext";
import Container from "../../components/layout/container";
import LayoutBody from "../../components/layout/layoutBody";
import style from "./quiz.module.css";
import AnswerButton from "../../components/ui/answerButton";
import { useHistory } from "react-router-dom";

const Quiz = () => {
  let getData = [];
  const user = useContext(QuizContext);
  const activeIndex = user.currentQuestionIndex;
  const maxQuestions = user.questionsList.length;
  const totalAnswered = user.answersList.length;
  const answersList: any = [...user.answersList];
  const questionsList: any = [...user.questionsList];
  const loading = user.isLoading;
  let heading: any;

  const entities: any = {
    "&#039;": "'",
    "&quot;": '"',
    // add more if needed
  };
  const stringDecoder = (str: any) => {
    const transformedString = str.question.replace(
      /&#?\w+;/g,
      (match: any) => entities[match]
    );
    return transformedString;
  };

  useEffect(() => {
    user.fetchQuestions();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const nextClickHandler = () => {
    if (user.currentQuestionIndex < maxQuestions - 1) {
      //should be added && prop , otherwise  it will be keep
      user.setCurrentQuestionIndex(user.currentQuestionIndex + 1);
    }
  };

  const backClickHandler = () => {
    if (user.currentQuestionIndex > 0) {
      user.setCurrentQuestionIndex(user.currentQuestionIndex - 1);
    }
  };

  const trueClickHandler = () => {
    const score = checkAnswerHandler("True");
    user.setAnswersList(activeIndex, "True", score);
    nextClickHandler();
  };

  const falseClickHandler = () => {
    const score = checkAnswerHandler("False");
    user.setAnswersList(activeIndex, "False", score);
    nextClickHandler();
  };

  const checkAnswerHandler = (newAnswer: any) => {
    const actualAnswer: any = questionsList[activeIndex].correct_answer;
    if (actualAnswer === newAnswer) {
      return 1;
    } else {
      return 0;
    }
  };

  if (loading === false) {
    getData = user.questionsList[activeIndex];
    getData = stringDecoder(getData);
    heading = questionsList[activeIndex].category;
  } else {
    getData = [];
  }

  const isAnswered = () => {
    const isQuestionAnswered: any = answersList.find(
      (ans: any) => ans.index === activeIndex
    );

    return isQuestionAnswered?.answer;
  };

  return (
    <Container heading={heading}>
      <LayoutBody>
        {!loading ? (
          <div>
            <div>{totalAnswered} Answered </div>
            <div>{getData}</div>

            <AnswerButton
              className={isAnswered() === "True" ? style.active : ""}
              ClickHandler={trueClickHandler}
            >
              True
            </AnswerButton>

            <AnswerButton
              className={isAnswered() === "False" ? style.active : ""}
              ClickHandler={falseClickHandler}
            >
              False
            </AnswerButton>

            <button onClick={nextClickHandler}>Next</button>
            <button onClick={backClickHandler}>Back</button>
            <div>
              {activeIndex + 1}/ {maxQuestions}
            </div>
          </div>
        ) : (
          <div>Loading Spinner</div>
        )}
        {answersList.length === 10 ? <button>Finish Quiz</button> : ""}
      </LayoutBody>
    </Container>
  );
};

export default Quiz;
