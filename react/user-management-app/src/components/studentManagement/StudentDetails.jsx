import React from "react";
import StudentForm from "./StudentForm";
import StudentCard from "./StudentCard";
import { useState } from "react";
import { useStudent } from "../../context/StudentContext";

function StudentDetails() {
  const { students } = useStudent();
  return (
    <>
      <section className="student-details-con">
        <h1 id="title">Student Details</h1>

        <div className="students-con">
          {students &&
            students.map((student) => (
              <StudentCard key={student.rollNo} student={student} />
            ))}
        </div>
      </section>
    </>
  );
}

export default StudentDetails;
