import React from "react";
import StudentForm from "./StudentForm";
import StudentCard from "./StudentCard";
import { useState } from "react";

function StudentDetails() {
  const [students, setStudents] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [studentToEdit, setStudentToEdit] = useState(null);

  const duplicateRollNo = (rollNo) => {
    const isDuplicate = students.some(
      (existingStudent) => existingStudent.rollNo === rollNo
    );

    return isDuplicate;
  };
  const addStudent = (student) => {
    //dulicate check
    if (duplicateRollNo(student.rollNo)) {
      alert(`Student with this ${student.rollNo} already exists`);
      return;
    }
    setStudents((prev) => [...prev, student]);
  };

  const deleteStudent = (rollNo) => {
    setStudents((prev) => prev.filter((student) => student.rollNo !== rollNo));
  };

  //[{1, name: DK}, {2, name: DD}, {3, name: DDD}] {2, name: dd}-inde:1

  const updateStudent = (rollNo, updateStudent) => {
    setStudents((prev) => {
      const studentIndex = prev.findIndex(
        (student) => student.rollNo === rollNo
      );
      const updatedStudents = [...prev];
      updatedStudents[studentIndex] = updateStudent;
      return updatedStudents;
    });
    console.log("updateStudent", rollNo, updateStudent);
    setIsEditing(false);
    setStudentToEdit(null);
  };
  // const updateStudent;
  return (
    <>
      <section className="student-details-con">
        <h1 id="title">Student Details</h1>
        <StudentForm
          addStudent={addStudent}
          students={students}
          isEditing={isEditing}
          studentToEdit={studentToEdit}
          onUpdate={updateStudent}
        />
        <div className="students-con">
          {students &&
            students.map((student) => (
              <StudentCard
                key={student.rollNo}
                student={student}
                onDelete={deleteStudent}
                onUpdate={(isEdit, currentStudent) => {
                  setIsEditing(isEdit);
                  setStudentToEdit(currentStudent);
                }}
              />
            ))}
        </div>
      </section>
    </>
  );
}

export default StudentDetails;
