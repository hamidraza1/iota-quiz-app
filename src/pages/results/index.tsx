import {
  EuiButton,
  EuiEmptyPrompt,
  EuiFlexGroup,
  EuiFlexItem,
  EuiIcon,
  EuiPage,
  EuiPageBody,
  EuiPageContent,
  EuiTitle,
} from "@elastic/eui";
import React from "react";
import { useContext } from "react";
import { useHistory } from "react-router-dom";
import QuizContext from "../../context/quizContext";
import { Question } from "../../types/types";
import css from "./index.module.scss";

export type IindexProps = {};

const Result: React.FC<IindexProps> = () => {
  const { questionsList } = useContext(QuizContext);
  const router = useHistory();
  const finalResultArray: Array<{
    question: string;
    score: number;
    id: number;
  }> = [];

  const finalScoreCalculation = () => {
    let count = 0;
    if (questionsList.length === 0) {
      router.replace("/welcome");
    }
    questionsList.forEach((question: Question) => {
      if (
        question.user_answer !== null &&
        question.correct_answer.toLocaleLowerCase() ===
          question.user_answer.toString().toLocaleLowerCase()
      ) {
        finalResultArray.push({
          question: question.question,
          score: 1,
          id: question.id,
        });
        count++;
      } else {
        finalResultArray.push({
          question: question.question,
          score: 0,
          id: question.id,
        });
      }
    });
    return count;
  };
  const finalScore = finalScoreCalculation();

  return (
    <EuiPage paddingSize="none" style={{ height: "100%" }}>
      <EuiPageBody>
        <EuiPageContent
          verticalPosition="center"
          horizontalPosition="center"
          paddingSize="none"
          className={css.pageBody}
        >
          <EuiEmptyPrompt
            iconType="apmTrace"
            className={css.prompt}
            title={
              <EuiTitle size="l">
                {finalScore >= 5 ? (
                  <h1>Congratz &#128522;! you got {finalScore}/10 </h1>
                ) : (
                  <h1>
                    Better Luck next time you got {finalScore}/10 &#128524;
                  </h1>
                )}
              </EuiTitle>
            }
            body={finalResultArray.map((question: any) => {
              return (
                <EuiFlexGroup
                  direction="column"
                  alignItems="flexStart"
                  key={question.id}
                >
                  <EuiFlexItem className={css["question-wrapper"]}>
                    <EuiIcon
                      type={question.score ? "plus" : "minus"}
                      size="l"
                    />
                    <span className={css.question}>{question.question}</span>
                  </EuiFlexItem>
                </EuiFlexGroup>
              );
            })}
            actions={
              <EuiButton iconType="play" color="text" fill onClick={() => {}}>
                Start again?
              </EuiButton>
            }
          />
        </EuiPageContent>
      </EuiPageBody>
    </EuiPage>
  );
};

export { Result };
