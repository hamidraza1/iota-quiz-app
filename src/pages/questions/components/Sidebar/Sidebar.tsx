import {
  EuiButton,
  EuiListGroup,
  EuiListGroupItem,
  EuiPageSideBar,
  EuiPanel,
  EuiSpacer,
} from "@elastic/eui";
import React, { Fragment, useContext, useState } from "react";
import QuizContext from "../../../../context/quizContext";
import { ConfirmationModal } from "../ConfirmationModal/ConfirmationModal";
import css from "./Sidebar.module.scss";

export type ISidebarProps = {};

const Sidebar: React.FC<ISidebarProps> = () => {
  const { progress, questionsList } = useContext(QuizContext);
  const [showModal, setshowModal] = useState(false);
  const closeModal = (): void => {
    setshowModal(false);
  };
  const openConfirmationModal = (): void => {
    setshowModal(true);
  };

  const {
    selectQuestion,
    selectedQuestionId,
    questionsList: list,
  } = useContext(QuizContext);
  return (
    <EuiPageSideBar className={css.sidebar}>
      <EuiPanel className={css.panel}>
        <EuiSpacer></EuiSpacer>
        <EuiListGroup flush={false} bordered={false} className={css.group}>
          {list.map((item) => (
            <Fragment key={item.id}>
              <EuiListGroupItem
                isActive={selectedQuestionId === item.id}
                size="m"
                onClick={() => {
                  selectQuestion(item.id);
                }}
                label={"Question " + (item.id! + 1)}
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
            </Fragment>
          ))}
        </EuiListGroup>
        <EuiButton
          className={css["submit-btn"]}
          color="accent"
          fill
          onClick={openConfirmationModal}
          disabled={progress() >= questionsList.length ? false : true}
        >
          Submit
        </EuiButton>
      </EuiPanel>
      {showModal ? <ConfirmationModal onModalClose={closeModal} /> : null}
    </EuiPageSideBar>
  );
};

export { Sidebar };
