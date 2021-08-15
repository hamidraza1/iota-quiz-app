import React from "react";
import { Question } from "../types/types";

interface IContext {
  name: string;
  questionsList: Question[];
  answersList: any;
  isLoading: boolean;
  newUser: (newUsername: any) => any;
  fetchQuestions: () => any;
  setAnswersList: (index: any, answer: any, score: any) => any;
  setIsLoading: (index: any) => any;
  selectQuestion: (index: any) => any;
  selectedQuestion: () => Question | null;
  selectedQuestionId: null | number;
}

const QuizContext = React.createContext<IContext>({
  name: "",
  questionsList: [],
  answersList: [],
  isLoading: true,
  newUser: (newUsername: any) => {},
  fetchQuestions: () => {},
  setAnswersList: (index: any, answer: any, score: any) => {},
  setIsLoading: (index: any) => {},
  selectQuestion: (index: any) => {},
  selectedQuestion: () => null,
  selectedQuestionId: null,
});

export default QuizContext;
