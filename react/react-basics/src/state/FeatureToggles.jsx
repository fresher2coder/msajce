import React, { useState } from "react";

function FeatureToggles() {
  const [features, setFeatures] = useState({
    darkMode: false,
    notifications: true,
    autoSave: false,
  });

  const toggleFeature = (key) => {
    setFeatures((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  return (
    <>
      <section className="feature-con">
        <h2>App Features</h2>
        <ul className="feature-list">
          <li className="feature-item">
            Dark Mode: {features.darkMode ? "On" : "Off"}{" "}
            <button onClick={() => toggleFeature("darkMode")}>Toggle</button>
          </li>
          <li className="feature-item">
            Notifications: {features.notifications ? "Enabled" : "Disabled"}{" "}
            <button onClick={() => toggleFeature("notifications")}>
              Toggle
            </button>
          </li>
          <li className="feature-item">
            Auto Save: {features.autoSave ? "Enabled" : "Disabled"}{" "}
            <button onClick={() => toggleFeature("autoSave")}>Toggle</button>
          </li>
        </ul>
      </section>
    </>
  );
}

export default FeatureToggles;
