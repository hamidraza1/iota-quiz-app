import { useState } from "react";
import QuizContext from "./quizContext";
import GetQuestions from "../api/apiRequests";
import { Question } from "../types/types";

const QuizProvider = (props: any) => {
  const [username, setUsername] = useState("");
  const [questionsList, setquestionsList] = useState<Question[]>([]);
  const [answersList, setAnswersList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedQuestionId, setSelectedQuestionId] = useState(0);

  const newUserHandler = (param: any) => {
    setUsername(param);
  };

  const fetchQuestionsHandler = async () => {
    setIsLoading(true);
    GetQuestions("hard").then((res: Question[]) => {
      const withIds = res.map((item, index) => ({ ...item, id: index }));
      setquestionsList(withIds);
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

  const setIsLoadingHandler = (val: any) => {
    setIsLoading(val);
  };

  const getSelectedQuestion = (): Question | null => {
    return questionsList[selectedQuestionId] ?? null;
  };
  const quizContext = {
    name: username,
    questionsList: questionsList,
    answersList: answersList,
    isLoading: isLoading,
    newUser: newUserHandler,
    fetchQuestions: fetchQuestionsHandler,
    setAnswersList: setAnswersListHandler,
    setIsLoading: setIsLoadingHandler,
    selectQuestion: setSelectedQuestionId,
    selectedQuestionId: selectedQuestionId,
    selectedQuestion: getSelectedQuestion,
  };

  return (
    <QuizContext.Provider value={quizContext}>
      {props.children}
    </QuizContext.Provider>
  );
};

export default QuizProvider;
