import Login from "./Auth/Login";
import Register from "./Auth/Register";
import Home from "./Pages/Home";
import Profile from "./Pages/Profile";

import { Switch, Route } from "react-router-dom";
import ErrorPage from "./Pages/404";
import Protected from "./Auth/Protected";

function App() {
  return (
    <div className="relative App ">
      <Switch>
        <Route exact path="/" component={Login} />

        <Route exact path="/Login" component={Login} />

        <Route exact path="/Register" component={Register}></Route>
        <Protected exact path="/Home" component={Home} />
        <Protected exact path="/Profile" component={Profile} />

        <Route component={ErrorPage} />
      </Switch>
    </div>
  );
}

export default App;
