import "./style/App.css"
import Main from "./components/block/seach-card/main";
import Signup from "./components/block/auth/signup/signup";
import Signin from "./components/block/auth/signin/signin";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"


function App() {

  return (
    <div className="app">
      <Router>
        <Switch>
          <Route exact path="/">
            <Main/>
          </Route>
          <Route exact path="/signup">
            <Signup/>
          </Route>
          <Route exact path="/signin">
            <Signin/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
