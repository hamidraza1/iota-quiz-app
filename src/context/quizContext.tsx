import React from "react";

const QuizContext = React.createContext({
  name: "",
  questionsList: [],
  answersList: [],
  currentQuestionIndex: 0,
  isLoading: true,
  newUser: (newUsername: any) => {},
  fetchQuestions: () => {},
  setAnswersList: (index: any, answer: any, score: any) => {},
  setCurrentQuestionIndex: (index: any) => {},
  setIsLoading: (index: any) => {},
});

export default QuizContext;
