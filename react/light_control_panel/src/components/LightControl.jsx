import { useState } from "react";

// Light Control Component
const LightControl = ({ onBrightnessChange }) => {
  const [brightness, setBrightness] = useState(50);

  const increaseBrightness = () => {
    if (brightness < 100) {
      const newBrightness = brightness + 10;
      setBrightness(newBrightness);
      onBrightnessChange(newBrightness);
    }
  };

  const decreaseBrightness = () => {
    if (brightness > 0) {
      const newBrightness = brightness - 10;
      setBrightness(newBrightness);
      onBrightnessChange(newBrightness);
    }
  };

  return (
    <div className="light-control">
      <p>Brightness: {brightness}%</p>
      <button onClick={increaseBrightness} className="button">
        Increase Brightness
      </button>
      <button onClick={decreaseBrightness} className="button">
        Decrease Brightness
      </button>
    </div>
  );
};

export default LightControl;
