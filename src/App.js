import './App.css';
import Login from './Auth/Login';
import Register from './Auth/Register';

import {
  Switch,
  Route,
  // Link,
} from 'react-router-dom';

function App() {
  return (
    <Switch>
      <div className="App">
        <Route exact path='/'component={Login}/>
        <Route  exact path="/Register" component={Register}></Route>
        <Route exact path="/Login" component={Login}></Route>

      </div>
    </Switch>
  );
}

export default App;
