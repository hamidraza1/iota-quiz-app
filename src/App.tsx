import React from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import "./App.scss";
import QuizProvider from "./context/quizProvider";
import Quiz from "./pages/quiz/quiz";
import Welcome from "./pages/start/welcome";
import "@elastic/eui/dist/eui_theme_light.css";

function App() {
  return (
    <QuizProvider>
      <Router basename={process.env.PUBLIC_URL}>
        <Switch>
          <Route path="/" exact>
            <Redirect to="/welcome" />
          </Route>
          <Route path="/welcome" exact component={Welcome} />
          <Route path="/quiz" exact component={Quiz} />
          {/*  <Route path='/timeline' component={TimeLine} /> */}
        </Switch>
      </Router>
    </QuizProvider>
  );
}

export default App;
