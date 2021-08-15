import {
  EuiHeader,
  EuiListGroup,
  EuiListGroupItem,
  EuiPage,
  EuiPageBody,
  EuiPageSideBar,
  EuiSpacer,
} from "@elastic/eui";
import React from "react";
import css from "./index.module.scss";

export type IQuestionsProps = {};

const Questions: React.FC<IQuestionsProps> = ({}) => {
  const list = Array(10)
    .fill(0)
    .map((_, item) => item + 1);
  return (
    <EuiPage paddingSize="none" style={{ height: "100%", marginTop: "49px" }}>
      <EuiPageSideBar className={css.sidebar}>
        <EuiSpacer></EuiSpacer>
        <EuiListGroup flush={false} bordered={false}>
          {list.map((item) => (
            <>
              <EuiListGroupItem
                size="m"
                onClick={() => {
                  console.log(item);
                }}
                label={"Question " + item}
              />
              <div className={css.border}></div>
            </>
          ))}
        </EuiListGroup>
      </EuiPageSideBar>
      <EuiPageBody className="blue"></EuiPageBody>
    </EuiPage>
  );
};

export { Questions };
