import React from "react";
import { useStudent } from "../context/StudentContext";

function PlacementDepartment() {
  const { student1, student2 } = useStudent();
  return (
    <>
      <h1>PlacementDepartment</h1>
      <h3>{student1.name}</h3>
      <h3>{student2.name}</h3>
    </>
  );
}

export default PlacementDepartment;
