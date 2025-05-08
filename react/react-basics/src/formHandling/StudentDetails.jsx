import React from "react";
import StudentForm from "./StudentForm";
import StudentCard from "./StudentCard";
import { useState } from "react";

function StudentDetails() {
  const [students, setStudents] = useState([]);

  const addStudent = (student) => {
    setStudents((prev) => [...prev, student]);
  };
  return (
    <>
      <section className="student-details-con">
        <h1 id="title">Student Details</h1>
        <StudentForm addStudent={addStudent} />
        <div className="students-con">
          {students &&
            students.map((student) => <StudentCard student={student} />)}
        </div>
      </section>
    </>
  );
}

export default StudentDetails;
