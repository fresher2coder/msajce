//Context-createContext, Provider, and Consumer-useContext

import { createContext, useContext } from "react";

// Create a context
export const StudentContext = createContext();

// Create a provider component
export const StudentProvider = ({ children }) => {
  const student1 = {
    name: "John Doe",
    age: 20,
    major: "Computer Science",
  };
  const student2 = {
    name: "Jane Smith",
    age: 22,
    major: "Mathematics",
  };

  return (
    <StudentContext.Provider value={{ student1, student2 }}>
      {children}
    </StudentContext.Provider>
  );
};

// Create a consumer component
export const useStudent = () => useContext(StudentContext);
