import React from "react";
import { Fragment } from "react";

import { useHistory } from "react-router-dom";
import {
  EuiButton,
  EuiEmptyPrompt,
  EuiPage,
  EuiPageBody,
  EuiPageContent,
  EuiTitle,
} from "@elastic/eui";

export type IindexProps = {};

const Welcome: React.FC<IindexProps> = () => {
  const router = useHistory();
  return (
    <EuiPage paddingSize="none" style={{ height: "100%" }}>
      <EuiPageBody paddingSize="l">
        <EuiPageContent
          verticalPosition="center"
          horizontalPosition="center"
          paddingSize="none"
        >
          <EuiEmptyPrompt
            iconType="nested"
            title={
              <EuiTitle size="l">
                <h1>Welcome</h1>
              </EuiTitle>
            }
            body={
              <Fragment>
                <p>
                  Welcome to the IOTA Quiz portal. Here we will present you some
                  questions to test your general knowledge.
                </p>
                <p>
                  Each question will have unlimited time and you can move back
                  and forth between questions.
                </p>
                <p>Good luck !! &#128522; &#128522;</p>
              </Fragment>
            }
            actions={
              <EuiButton
                iconType="cheer"
                color="text"
                fill
                onClick={() => {
                  router.push("/questions");
                }}
              >
                Lets get started!
              </EuiButton>
            }
          />
        </EuiPageContent>
      </EuiPageBody>
    </EuiPage>
  );
};

export { Welcome };
