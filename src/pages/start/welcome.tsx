import { useContext, useRef } from "react";
import QuizContext from "../../context/quizContext";
import Container from "../../components/layout/container";
import LayoutBody from "../../components/layout/layoutBody";
import { useHistory } from "react-router-dom";

const Welcome = () => {
  const history = useHistory();

  const user = useContext(QuizContext);

  const usernameRef: any = useRef(null);

  const onTestBeginHandler = () => {
    user.newUser(usernameRef.current.value);

    history.push("/quiz");
  };

  return (
    <Container heading="Welcome to Trivia Challenge">
      <LayoutBody>
        You will be presented with 10 true of false questions
      </LayoutBody>
      <input ref={usernameRef} type="text"></input>
      <div>
        <button onClick={onTestBeginHandler}>Begin</button>
      </div>
    </Container>
  );
};

export default Welcome;
