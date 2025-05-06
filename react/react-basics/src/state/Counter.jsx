import React, { useState } from "react";

function Counter({ initialValue, incrementValue }) {
  const [count, setCount] = useState(initialValue);
  const increment = () => {
    setCount((count) => count + incrementValue); //7 -> 7+1
    console.log(count); //7
  };
  const decrement = () => {
    setCount((count) => count - incrementValue); //7 -> 7-1
    console.log(count); //7
  };

  return (
    <>
      <section className="counter">
        <h1>Counter: {count}</h1> {/* 8 */}
        <div className="btns">
          <button onClick={increment}>Increment</button>
          <button onClick={decrement}>Decrement</button>
        </div>
      </section>
    </>
  );
}

export default Counter;
