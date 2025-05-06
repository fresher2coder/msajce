import React from "react";

function UserProfile(props) {
  const { name, age, location, occupation } = props; // destructuring props - object
  //   console.log(props.name, props["age"]);
  // props are immutable
  return (
    <>
      <section className="user-profile-card">
        <h1 className="card-title">User Profile</h1>
        {/* interpolation */}
        <h2>Name: {name}</h2>
        <p>Age: {age}</p>
        <p>Location: {location}</p>
        <p>Occupation: {occupation}</p>
      </section>
    </>
  );
}

export default UserProfile;
