import { EuiHeader, EuiPage, EuiPageBody, EuiPageSideBar } from "@elastic/eui";
import React from "react";

export type IQuestionsProps = {};

const Questions: React.FC<IQuestionsProps> = ({}) => {
  return (
    <EuiPage paddingSize="none" style={{ height: "100%" }}>
      <EuiPageSideBar className="red"></EuiPageSideBar>
      <EuiPageBody className="blue"></EuiPageBody>
    </EuiPage>
  );
};

export { Questions };
