import {
  EuiPageSideBar,
  EuiPanel,
  EuiSpacer,
  EuiListGroup,
  EuiListGroupItem,
} from "@elastic/eui";
import React, { useContext } from "react";
import QuizContext from "../../../../context/quizContext";
import { Question } from "../../../../types/types";
import css from "./Sidebar.module.scss";

export type ISidebarProps = {};

const Sidebar: React.FC<ISidebarProps> = ({}) => {
  const {
    selectQuestion,
    selectedQuestionId,
    questionsList: list,
  } = useContext(QuizContext);
  return (
    <EuiPageSideBar className={css.sidebar}>
      <EuiPanel>
        <EuiSpacer></EuiSpacer>
        <EuiListGroup flush={false} bordered={false}>
          {list.map((item) => (
            <>
              <EuiListGroupItem
                isActive={selectedQuestionId === item.id}
                size="m"
                onClick={() => {
                  selectQuestion(item.id);
                }}
                label={"Question " + (item.id! + 1)}
                key={item.id}
                extraAction={
                  item.user_answer !== null
                    ? {
                        color: "success",
                        iconType: "checkInCircleFilled",
                        iconSize: "s",
                        "aria-label": "Favorite link1",
                        alwaysShow: true,
                      }
                    : undefined
                }
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
