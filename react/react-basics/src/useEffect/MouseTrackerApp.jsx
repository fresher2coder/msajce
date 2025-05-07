import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import MouseTracker from "./MouseTracker";

function MouseTrackerApp() {
  const [count, setCount] = useState(null);
  const [showTracker, setShowTracker] = useState(false);
  const [coordinates, setCoordinates] = useState({ x: 0, y: 0 });
  useEffect(() => {
    console.log("Always: Mounting and Updating");
  });

  useEffect(() => {
    //side effects - api fetch
    console.log("Mounting");
    setCount(0);

    return () => {
      console.log("Unmounting");
    };
  }, []);

  useEffect(() => {
    console.log("Count state is updated");
  }, [count]);

  return (
    <>
      <section className="mouse-tracker-app">
        <button onClick={() => setCount(count + 1)}>Count: {count}</button>
        <h1>MouseTrackerApp</h1>

        <div className="coordinates">
          <p>X: {coordinates.x}</p>
          <p>Y: {coordinates.y}</p>
        </div>

        <div className="tracker">
          <button onClick={() => setShowTracker((prev) => !prev)}>
            {showTracker ? "Remove Tracker" : "Show Tracker"}
          </button>
          {showTracker && <MouseTracker onChange={setCoordinates} />}
        </div>
      </section>
    </>
  );
}

export default MouseTrackerApp;
