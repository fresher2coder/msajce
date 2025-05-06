import React from "react";

function Child({ handleClick }) {
  return (
    <>
      <section className="child-con">
        <button onClick={() => handleClick("Hello from Child Component!")}>
          Child: Twinkle Me
        </button>
      </section>
    </>
  );
}

export default Child;
