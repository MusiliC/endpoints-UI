import Data from "./components/Data";
import Log from "./components/Log";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Taskbar from "./components/Taskbar";

function App() {

  return (
    <Router>
      <div className="app">
        <Taskbar />
        <div className="main">
          <Switch>
            <Route exact path={"/"}>
              <Log />
            </Route>
            <Route path={"/users"}>
              <Data />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
