import React from "react";
import { useEffect, useState } from "react";
import AdminCard from "./AdminCard";

function Admin() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("/users", {
      withCredentials: "include",
    })
      .then((res) => res.json())
      .then((res) => setUsers(res));
  }, []);

  return (
    <div class="container p-5">
      {users.map((user) => (
        <div>
          <h5>
            {user.last_name}, {user.first_name}, {user.email}, {user.address},{" "}
            {user.phone}
          </h5>
          <AdminCard rsvps={user.rsvps} />
        </div>
      ))}
    </div>
  );
}

export default Admin;
