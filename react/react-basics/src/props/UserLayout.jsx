import React from "react";

function UserLayout(props) {
  const { userName, children } = props; // destructuring props - object
  return (
    <>
      <section className="user-layout">
        <h1>Hi {userName}!</h1>
        {children}
      </section>
    </>
  );
}

export default UserLayout;
