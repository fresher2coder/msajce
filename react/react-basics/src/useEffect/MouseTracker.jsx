import React from "react";
import { useEffect } from "react";

function MouseTracker({ onChange }) {
  useEffect(() => {
    console.log("Mouse Tracker Mounted");

    const handleMouseMove = (event) => {
      onChange({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      console.log("Mouse Tracker UnMounted");
      onChange({ x: 0, y: 0 });
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);
  return (
    <>
      <section className="mouse-tracker">
        <div>MouseTracker</div>
      </section>
    </>
  );
}

export default MouseTracker;
