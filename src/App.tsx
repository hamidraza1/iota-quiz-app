import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import QuizProvider from "./context/quizProvider";
import Container from "./components/layout/container";
import Quiz from "./pages/quiz/quiz";
import Welcome from "./pages/start/welcome";

function App() {
  return (
    <QuizProvider>
      <Router basename={process.env.PUBLIC_URL}>
        <Switch>
          <Route path="/" exact component={Container} />
          <Route path="/Welcome" exact component={Welcome} />
          <Route path="/quiz" exact component={Quiz} />
          {/*  <Route path='/timeline' component={TimeLine} /> */}
        </Switch>
      </Router>
    </QuizProvider>
  );
}

export default App;
