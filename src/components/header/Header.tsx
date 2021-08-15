import {
  EuiHeader,
  EuiHeaderSection,
  EuiHeaderSectionItem,
  EuiIcon,
} from "@elastic/eui";
import React from "react";
import { useHistory, withRouter } from "react-router-dom";

export type IHeaderProps = {};

const Header: React.FC<IHeaderProps> = ({}) => {
  const router = useHistory();
  return (
    <EuiHeader position="fixed">
      <EuiHeaderSection grow={false}>
        <EuiHeaderSectionItem border="right">
          <EuiIcon
            type="nested"
            className="logo"
            size="xl"
            onClick={() => {
              router.push("/welcome");
            }}
          />
        </EuiHeaderSectionItem>
        <EuiHeaderSectionItem>
          <h1 className="title">IOTA QUIZ</h1>
        </EuiHeaderSectionItem>
      </EuiHeaderSection>
    </EuiHeader>
  );
};

export default withRouter(Header);
