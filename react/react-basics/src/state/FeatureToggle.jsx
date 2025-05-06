import React, { useState } from "react";

function FeatureToggle() {
  const [features, setFeatures] = useState({
    darkMode: true,
    notification: true,
    autoSave: false,
  });

  const handleToggle = (key) => {
    console.log(key, features[key]);

    setFeatures((prevFeatures) => ({
      ...prevFeatures,
      [key]: !prevFeatures[key],
    }));
  };

  console.log("features", features);

  return (
    <>
      <section className="feature-con">
        <h2>App Features</h2>
        <ul className="feature-list">
          <li className="feature-item">
            Dark Mode: {features.darkMode ? "ON" : "OFF"}
            <button onClick={() => handleToggle("darkMode")}>Toggle</button>
          </li>
          <li className="feature-item">
            Notification: {features.notification ? "Enabled" : "Disabled"}
            <button onClick={() => handleToggle("notification")}>Toggle</button>
          </li>
          <li className="feature-item">
            Auto Save: {features.autoSave ? "Enabled" : "Disabled"}
            <button onClick={() => handleToggle("autoSave")}>Toggle</button>
          </li>
        </ul>
      </section>
    </>
  );
}

export default FeatureToggle;
