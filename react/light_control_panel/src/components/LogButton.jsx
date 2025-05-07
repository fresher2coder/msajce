// Log Button Component
const LogButton = ({ logMessage }) => {
  return (
    <button onClick={logMessage} className="log-button">
      Log Light Status
    </button>
  );
};

export default LogButton;
