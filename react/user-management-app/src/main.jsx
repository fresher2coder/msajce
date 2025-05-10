import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { StudentProvider } from "./context/StudentContext.jsx";
import { BrowserRouter as Router } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Router>
      <StudentProvider>
        <App />
      </StudentProvider>
    </Router>
  </StrictMode>
);
