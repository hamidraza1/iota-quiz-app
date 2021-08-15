import { useState } from "react";
import QuizContext from "./quizContext";
import GetQuestions from "../api/apiRequests";

const QuizProvider = (props: any) => {
  const [username, setUsername] = useState("");
  const [questionsList, setquestionsList] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answersList, setAnswersList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const newUserHandler = (param: any) => {
    setUsername(param);
  };

  const fetchQuestionsHandler = async () => {
    setIsLoading(true);
    GetQuestions("hard").then((res) => {
      setquestionsList(res);
      setIsLoading(false);
    });
  };
  const setAnswersListHandler = (index: any, answer: any, score: any) => {
    const newAnswer = { index: index, answer: answer, score: score };
    const existingAnswerIndex = answersList
      .map((ans: any) => ans.index)
      .indexOf(index);
    if (existingAnswerIndex >= 0) {
      setAnswersList((previousList: any) => {
        previousList[existingAnswerIndex] = newAnswer;
        return previousList;
      });
    } else {
      setAnswersList((previousList: any) => {
        const list = previousList.concat(newAnswer);
        return list;
      });
    }
  };
  const setCurrentQuestionIndexHandler = (index: any) => {
    setCurrentQuestionIndex(index);
  };

  const setIsLoadingHandler = (val: any) => {
    setIsLoading(val);
  };

  const quizContext = {
    name: username,
    questionsList: questionsList,
    answersList: answersList,
    currentQuestionIndex: currentQuestionIndex,
    isLoading: isLoading,
    newUser: newUserHandler,
    fetchQuestions: fetchQuestionsHandler,
    setAnswersList: setAnswersListHandler,
    setCurrentQuestionIndex: setCurrentQuestionIndexHandler,
    setIsLoading: setIsLoadingHandler,
  };

  return (
    <QuizContext.Provider value={quizContext}>
            {props.children}
    </QuizContext.Provider>
  );
};

export default QuizProvider;
