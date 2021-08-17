import {
  EuiFlexGroup,
  EuiLoadingLogo,
  EuiPage,
  EuiPageBody,
  EuiProgress,
} from "@elastic/eui";
import React, { useContext, useEffect } from "react";
import QuizContext from "../../context/quizContext";
import { QuestionCard } from "./components/QuestionCard/QuestionCard";
import { Sidebar } from "./components/Sidebar/Sidebar";

export type IQuestionsProps = {};

const Questions: React.FC<IQuestionsProps> = () => {
  const {
    isLoading,
    fetchQuestions,
    selectQuestion,
    selectedQuestion,
    progress,
  } = useContext(QuizContext);
  const question = selectedQuestion();
  useEffect(() => {
    fetchQuestions();
    selectQuestion(0);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const content = () => {
    if (isLoading)
      return (
        <EuiFlexGroup justifyContent="center" alignItems="center">
          <EuiLoadingLogo logo="nested" size="xl" />
        </EuiFlexGroup>
      );
    if (question) return <QuestionCard data={question}></QuestionCard>;
    return <div></div>;
  };
  return (
    <EuiPage
      paddingSize="none"
      style={{ height: "calc(100% - 49px)", marginTop: "49px" }}
    >
      <Sidebar></Sidebar>
      <EuiPageBody>
        <EuiProgress size="xs" color="accent" value={progress()} max={10} />
        {content()}
      </EuiPageBody>
    </EuiPage>
  );
};

export { Questions };
