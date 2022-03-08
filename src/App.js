import { Route, Switch } from "react-router-dom";
import Home from "./Home";
import NavBar from "./NavBar";
import About from "./About";
import Login from "./Login";

function App() {
  return (
    <div>
      <NavBar />
      <Switch>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default App