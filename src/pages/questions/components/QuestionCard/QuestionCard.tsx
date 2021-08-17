import {
  EuiButton,
  EuiFlexGroup,
  EuiFlexItem,
  EuiPanel,
  EuiSpacer,
  EuiText,
} from "@elastic/eui";
import React, { useContext } from "react";
import QuizContext from "../../../../context/quizContext";
import { Question } from "../../../../types/types";
import css from "./QuestionCard.module.scss";
export type IQuestionCardProps = {
  data: Question;
};

const QuestionCard: React.FC<IQuestionCardProps> = ({ data }) => {
  const { selectQuestion, updateQuestion, questionsList } =
    useContext(QuizContext);
  const btnHandler = (value: boolean) => {
    if (typeof data.id === "undefined") return;
    updateQuestion(data.id, { user_answer: value });
    if (data.id < questionsList.length - 1) {
      selectQuestion(data.id + 1);
    }
  };

  return (
    <EuiFlexGroup
      gutterSize="none"
      direction="column"
      alignItems="center"
      className={css["card-block"]}
    >
      <EuiSpacer size="xxl" />
      <EuiFlexItem grow={false}>
        <h1 className={css.title}>{data.category}</h1>
      </EuiFlexItem>
      <EuiSpacer />
      <EuiFlexItem className={css["panel-block"]}>
        <EuiPanel paddingSize="l" grow={false}>
          <EuiSpacer />
          <EuiText size="m">
            <p className={css["question-text"]}>{data.question}</p>
          </EuiText>
          <EuiSpacer />

          <div className={css["btn-block"]}>
            <EuiButton
              color="danger"
              className={css.btn}
              onClick={() => {
                btnHandler(false);
              }}
              fill={data.user_answer === false}
            >
              False
            </EuiButton>
            <EuiButton
              color="success"
              className={css.btn}
              onClick={() => {
                btnHandler(true);
              }}
              fill={data.user_answer === true}
            >
              True
            </EuiButton>
          </div>
          <EuiSpacer />
        </EuiPanel>
      </EuiFlexItem>
    </EuiFlexGroup>
  );
};

export { QuestionCard };
