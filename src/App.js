import "./App.css";
import About from "./components/About";
import Users from "./components/Users";

import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Error404 from "./components/404";

function App() {
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/users">Users</Link>
          </li>
        </ul>
      </nav>
      <Switch>
        <Route path="/about" component={About} />
        <Route path="/users" component={Users} />
        <Route path="*" component={Error404} />
      </Switch>
    </Router>
  );
}

export default App;
