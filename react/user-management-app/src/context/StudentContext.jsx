//context - createContext, consumer - useContext, provider

import { createContext, useState, useContext, useEffect } from "react";

import { useNavigate } from "react-router-dom";
import axios from "axios";

export const StudentContext = createContext();

export const StudentProvider = ({ children }) => {
  const navigate = useNavigate();
  const [students, setStudents] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [studentToEdit, setStudentToEdit] = useState(null);
  const duplicateRollNo = (rollNo) => {
    const isDuplicate = students.some(
      (existingStudent) => existingStudent.rollNo === rollNo
    );

    return isDuplicate;
  };
  const fetchStudents = async () => {
    try {
      const response = await axios.get(
        "https://json-server-9c4h.onrender.com/users"
      );

      setStudents(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  const postStudent = async (student) => {
    try {
      const response = await axios.post(
        "https://json-server-9c4h.onrender.com/users",
        student
      );
      console.log("response", response);
    } catch (err) {
      console.log(err);
    }
  };

  const deleteStu = async (id) => {
    try {
      const response = await axios.delete(
        `https://json-server-9c4h.onrender.com/users/${id}`
      );
      console.log("response", response);
    } catch (err) {
      console.log(err);
    }
  };

  const putstudent = async (student) => {
    try {
      const response = await axios.put(
        `https://json-server-9c4h.onrender.com/users/${student.id}`,
        student
      );
      console.log("response", response);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchStudents();
  });

  const addStudent = (student) => {
    //dulicate check
    if (duplicateRollNo(student.rollNo)) {
      alert(`Student with this ${student.rollNo} already exists`);
      return;
    }

    postStudent(student);

    navigate("/students");
  };

  const deleteStudent = (id) => {
    deleteStu(id);
  };

  //[{1, name: DK}, {2, name: DD}, {3, name: DDD}] {2, name: dd}-inde:1

  const editStudent = (isEditing, student) => {
    setIsEditing(isEditing);
    setStudentToEdit(student);
  };

  const updateStudent = (rollNo, updateStudent) => {
    putstudent(updateStudent);

    setIsEditing(false);
    setStudentToEdit(null);

    navigate("/students");
  };
  // const updateStudent;
  return (
    <>
      <StudentContext.Provider
        value={{
          students,
          isEditing,
          addStudent,
          onUpdate: updateStudent,
          studentToEdit,
          onEdit: editStudent,
          onDelete: deleteStudent,
        }}
      >
        {children}
      </StudentContext.Provider>
    </>
  );
};

export const useStudent = () => useContext(StudentContext);
