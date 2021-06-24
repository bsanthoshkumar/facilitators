import "./App.css";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import Meetings from "./components/meetings/Meetings";
import Facilitators from "./components/facilitators/Facilitators";

const App = () => {

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/meetings" component={Meetings} />
        <Route path={`/:meeting/facilitators`} component={Facilitators} />
        <Route path="/">
          <Redirect to="/meetings" />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
