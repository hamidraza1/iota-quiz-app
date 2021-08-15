import { useContext, useRef } from "react";
import QuizContext from "../../context/quizContext";
import Container from "../../components/layout/container";
import LayoutBody from "../../components/layout/layoutBody";
import { useHistory } from "react-router-dom";
import { EuiPageTemplate, EuiEmptyPrompt } from "@elastic/eui";

const Welcome = () => {
  const history = useHistory();

  const user = useContext(QuizContext);

  const usernameRef: any = useRef(null);

  const onTestBeginHandler = () => {
    user.newUser(usernameRef.current.value);

    history.push("/quiz");
  };

  const content = (
    <div>
      <p>
        Welcome to the IOTA Quiz portal. Here we will present you some questions
        to test your general knowledge.{" "}
      </p>
      <p>
        Each question will have a limited time and you can move back and forth
        between questions.
      </p>
      <p>Good luck !! &#128640; &#128640;</p>
    </div>
  );

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

    <EuiPageTemplate
      template="centeredBody"
      pageContentProps={{ paddingSize: "l" }}
    >
      <EuiEmptyPrompt title={<span>Welcome</span>} body={content} />
    </EuiPageTemplate>
  );
};

export default Welcome;
