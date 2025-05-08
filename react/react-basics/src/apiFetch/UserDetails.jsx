import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import UserCard from "./UserCard";

function UserDetails() {
  //side effects - api call, event listeners, timers, etc
  const [users, setUsers] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(async () => {
    // promise chaining - then, catch

    // axios
    //   .get("https://jsonplaceholder.typicode.com/users")
    //   .then((response) => {
    //     setUsers(response.data);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });

    // promise chiaining - async, await

    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      setUsers(response.data);
      console.log("data fetched");
    } catch (error) {
      console.log(error);
      setError("Error in fetching users");
    } finally {
      setLoading(false);
    }
  }, []);

  if (loading) {
    return (
      <>
        <h1 className="loading">Loading...</h1>
      </>
    );
  }

  return (
    <>
      {error && <h1 className="error">{error}</h1>}
      <section className="user-details">
        {users && users.map((user) => <UserCard key={user.id} user={user} />)}
      </section>
    </>
  );
}

export default UserDetails;

// methods

// get - read
// post - write
// put - update
// patch - update
// delete - delete
