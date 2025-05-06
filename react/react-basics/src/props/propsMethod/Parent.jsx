import React from "react";
import Child from "./Child";

function Parent() {
  const handleClick = (msg) => {
    alert(msg);
  };
  return (
    <>
      <section className="parent-con">
        <h1>Parent Component</h1>
        <Child handleClick={handleClick} />
      </section>
    </>
  );
}

export default Parent;
