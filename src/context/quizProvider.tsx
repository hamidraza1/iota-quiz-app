import { useState } from "react";
import QuizContext from "./quizContext";
import GetQuestions from "../api/apiRequests";
import { Question } from "../types/types";

const QuizProvider = (props: any) => {
  const [questionsList, setquestionsList] = useState<Question[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedQuestionId, setSelectedQuestionId] = useState(0);

  const fetchQuestionsHandler = async () => {
    setquestionsList([]);
    setIsLoading(true);
    GetQuestions("hard").then((res: Question[]) => {
      const withIds = res.map((item, index) => ({
        ...item,
        id: index,
        user_answer: null,
      }));
      setquestionsList(withIds);
      setIsLoading(false);
    });
  };

  const updateQuestion = (id: number, data: Partial<Question>): void => {
    const question = questionsList.find((item) => item.id === id);
    if (!question) return;
    const updatedQuestion = { ...question, ...data };
    const index = questionsList.findIndex((item) => item.id === id);
    const newList = [...questionsList];
    newList[index] = updatedQuestion;
    setquestionsList(newList);
    return;
  };

  const getSelectedQuestion = (): Question | null => {
    return questionsList[selectedQuestionId] ?? null;
  };

  const progress = () => {
    return questionsList.filter((item) => item.user_answer !== null).length;
  };

  const quizContext = {
    questionsList: questionsList,
    isLoading: isLoading,
    fetchQuestions: fetchQuestionsHandler,
    selectQuestion: setSelectedQuestionId,
    selectedQuestionId: selectedQuestionId,
    selectedQuestion: getSelectedQuestion,
    updateQuestion,
    progress,
  };

  return (
    <QuizContext.Provider value={quizContext}>
      {props.children}
    </QuizContext.Provider>
  );
};

export default QuizProvider;
