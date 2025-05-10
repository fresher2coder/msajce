import React from "react";
import { useStudent } from "../../context/StudentContext";
import { useNavigate } from "react-router-dom";

function StudentCard({ student }) {
  const { onEdit, onDelete } = useStudent();
  const navigate = useNavigate();
  return (
    <>
      <div className="student-card">
        <h1>Name: {student.fullName}</h1>
        <h1>RollNo: {student.rollNo}</h1>
        <h1>Dept: {student.dept}</h1>
        <h1>CGPA: {student.cgpa}</h1>
        <div className="btns">
          <button
            onClick={() => {
              onEdit(true, student);
              navigate("/register");
            }}
          >
            Edit
          </button>
          <button onClick={() => onDelete(student.id)}>Delete</button>
        </div>
      </div>
    </>
  );
}

export default StudentCard;
