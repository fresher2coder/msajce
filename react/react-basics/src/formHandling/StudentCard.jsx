import React from "react";

function StudentCard({ student, onDelete, onUpdate }) {
  return (
    <>
      <div className="student-card">
        <h1>Name: {student.fullName}</h1>
        <h1>RollNo: {student.rollNo}</h1>
        <h1>Dept: {student.dept}</h1>
        <h1>CGPA: {student.cgpa}</h1>
        <div className="btns">
          <button onClick={() => onUpdate(true, student)}>Update</button>
          <button onClick={() => onDelete(student.rollNo)}>Delete</button>
        </div>
      </div>
    </>
  );
}

export default StudentCard;
