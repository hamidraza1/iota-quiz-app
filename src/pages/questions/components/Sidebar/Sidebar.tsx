import {
  EuiPageSideBar,
  EuiPanel,
  EuiSpacer,
  EuiListGroup,
  EuiListGroupItem,
} from "@elastic/eui";
import React, { useContext } from "react";
import QuizContext from "../../../../context/quizContext";
import css from "./Sidebar.module.scss";

export type ISidebarProps = {};

const list = Array(10)
  .fill(0)
  .map((_, item) => item);

const Sidebar: React.FC<ISidebarProps> = ({}) => {
  const { selectQuestion, selectedQuestionId } = useContext(QuizContext);
  return (
    <EuiPageSideBar className={css.sidebar}>
      <EuiPanel>
        <EuiSpacer></EuiSpacer>
        <EuiListGroup flush={false} bordered={false}>
          {list.map((item) => (
            <>
              <EuiListGroupItem
                isActive={selectedQuestionId === item}
                size="m"
                onClick={() => {
                  selectQuestion(item);
                }}
                label={"Question " + (item + 1)}
              />
              <div className={css.border}></div>
            </>
          ))}
        </EuiListGroup>
      </EuiPanel>
    </EuiPageSideBar>
  );
};

export { Sidebar };
