import React from "react";
import { Question } from "../types/types";

interface IContext {
  questionsList: Question[];
  isLoading: boolean;
  fetchQuestions: () => void;
  selectQuestion: (index: any) => any;
  selectedQuestion: () => Question | null;
  selectedQuestionId: null | number;
  updateQuestion: (id: number, data: Partial<Question>) => void;
  progress: () => number;
}

const QuizContext = React.createContext<IContext>({
  questionsList: [],
  isLoading: true,
  fetchQuestions: () => {},
  selectQuestion: (index: any) => {},
  selectedQuestion: () => null,
  selectedQuestionId: null,
  updateQuestion: () => null,
  progress: () => 0,
});

export default QuizContext;
