import React from "react";
import { Question } from "../../../../types/types";

export type IQuestionCardProps = {
  data: Question;
};

const QuestionCard: React.FC<IQuestionCardProps> = ({ data }) => {
  return <div>{data.category}</div>;
};

export { QuestionCard };
