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
import Welcome from "./pages/welcome";
import "@elastic/eui/dist/eui_theme_light.css";
import { Questions } from "./pages/questions";
import {
  EuiHeader,
  EuiHeaderSection,
  EuiHeaderSectionItem,
  EuiIcon,
} from "@elastic/eui";

function App() {
  return (
    <QuizProvider>
      <EuiHeader position="fixed">
        <EuiHeaderSection grow={false}>
          <EuiHeaderSectionItem border="right">
            <EuiIcon type="nested" className="logo" size="xl" />
          </EuiHeaderSectionItem>
          <EuiHeaderSectionItem>
            <h1 className="title">IOTA QUIZ</h1>
          </EuiHeaderSectionItem>
        </EuiHeaderSection>
      </EuiHeader>
      <Router basename={process.env.PUBLIC_URL}>
        <Switch>
          <Route path="/" exact>
            <Redirect to="/welcome" />
          </Route>
          <Route path="/welcome" exact component={Welcome} />
          <Route path="/quiz" exact component={Quiz} />
          <Route path="/questions" exact component={Questions} />
          {/*  <Route path='/timeline' component={TimeLine} /> */}
        </Switch>
      </Router>
    </QuizProvider>
  );
}

export default App;
