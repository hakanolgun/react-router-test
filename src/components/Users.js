import { useState, useEffect } from "react";
import { Link, Switch, Route, useRouteMatch } from "react-router-dom";
import User from "./User";

export default function Users() {
  const [usersList, setUsersList] = useState([]);

  let { path, url } = useRouteMatch();

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsersList(data));
  }, []);

  return (
    <div>
      <h1>Users List</h1>
      {usersList.map((user) => {
        return (
          <li key={user.id}>
            <Link to={`${url}/${user.id}`}>{user.name}</Link>
          </li>
        );
      })}
      <br />
      <br />
      <Switch>
        <Route exact path={path}>
          <h3> Please select a user</h3>
        </Route>
        <Route path={`${path}/:id`}>
          <User />
        </Route>
      </Switch>
    </div>
  );
}
