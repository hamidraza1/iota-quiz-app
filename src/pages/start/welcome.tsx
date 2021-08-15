import { Fragment, useContext, useRef } from "react";
import QuizContext from "../../context/quizContext";
import Container from "../../components/layout/container";
import LayoutBody from "../../components/layout/layoutBody";
import { useHistory } from "react-router-dom";
import {
  EuiButton,
  EuiEmptyPrompt,
  EuiPage,
  EuiPageBody,
  EuiPageContent,
  EuiTitle,
} from "@elastic/eui";

const Welcome = () => {
  return (
    // <Container heading="Welcome to Trivia Challenge">
    //   <EuiButton>send</EuiButton>
    //   <LayoutBody>
    //     You will be presented with 10 true of false questions
    //   </LayoutBody>
    //   <input ref={usernameRef} type="text"></input>
    //   <div>
    //     <button onClick={onTestBeginHandler}>Begin</button>
    //   </div>
    // </Container>

    <EuiPage paddingSize="none" style={{ height: "100%" }}>
      <EuiPageBody paddingSize="l">
        <EuiPageContent
          verticalPosition="center"
          horizontalPosition="center"
          paddingSize="none"
        >
          <EuiEmptyPrompt
            iconType="package"
            title={
              <EuiTitle size="l">
                <h1>Welcome.</h1>
              </EuiTitle>
            }
            body={
              <Fragment>
                <p>
                  Welcome to the IOTA Quiz portal. Here we will present you some
                  questions to test your general knowledge.
                </p>
                <p>
                  Each question will have a limited time and you can move back
                  and forth between questions.
                </p>
                <p>Good luck !! &#128522; &#128522;</p>
              </Fragment>
            }
            actions={
              <EuiButton iconType="cheer" color="text" fill>
                Lets get started!
              </EuiButton>
            }
          />
        </EuiPageContent>
      </EuiPageBody>
    </EuiPage>
  );
};

export default Welcome;
