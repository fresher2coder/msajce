import React from "react";

function StudentCard({ student }) {
  return (
    <>
      <div className="student-card">
        <h1>Name: {student.fullName}</h1>
        <h1>RollNo: {student.rollNo}</h1>
        <h1>Dept: {student.dept}</h1>
        <h1>CGPA: {student.cgpa}</h1>
      </div>
    </>
  );
}

export default StudentCard;
