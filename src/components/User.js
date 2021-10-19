import { useParams } from "react-router";
import { useState, useEffect } from "react";

export default function User() {
  const { id } = useParams();

  const [singleUser, setSingleUser] = useState({});

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((res) => res.json())
      .then((data) => setSingleUser(data));
  }, [id]);

  return (
    <div>
      <h1>User Detail Page</h1>
      <div>
        <p>{singleUser.name}</p>
        <p>{singleUser.id}</p>
      </div>
    </div>
  );
}
