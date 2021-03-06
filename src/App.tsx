import { Redirect, Route, Switch } from "react-router-dom";
import "./App.scss";
import QuizProvider from "./context/quizProvider";
import { Welcome } from "./pages/welcome";
import "@elastic/eui/dist/eui_theme_light.css";
import { Questions } from "./pages/questions";

import Header from "./components/header/Header";
import { Result } from "./pages/results";

function App() {
  return (
    <QuizProvider>
      <Header></Header>
      <Switch>
        <Route path="/" exact>
          <Redirect to="/welcome" />
        </Route>
        <Route path="/welcome" exact component={Welcome} />
        <Route path="/questions" exact component={Questions} />
        <Route path="/result" exact component={Result} />
      </Switch>
    </QuizProvider>
  );
}

export default App;
