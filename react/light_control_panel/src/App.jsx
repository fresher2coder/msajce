import React, { useState } from "react";
import "./App.css";
import LightControl from "./components/LightControl";
import LogButton from "./components/LogButton";
import Panel from "./components/Panel";

// Main App Component
const App = () => {
  const handleBrightnessLog = (brightness) => {
    console.log(`Current Brightness: ${brightness}%`);
  };

  return (
    <>
      <section className="app-container">
        <h1>Light Control Panel</h1>

        <Panel>
          <LightControl onBrightnessChange={handleBrightnessLog} />
        </Panel>
        <LogButton logMessage={() => alert("Light status logged!")} />
      </section>
    </>
  );
};

export default App;
