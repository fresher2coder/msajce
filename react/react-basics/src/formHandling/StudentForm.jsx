import React from "react";
import { useState } from "react";

function StudentForm({ addStudent }) {
  const [formData, setFormData] = useState({
    fullName: "",
    rollNo: "",
    dept: "",
    cgpa: "",
  });

  const handleChange = (event) => {
    // console.log(event.target.name, event.target.value);

    setFormData((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  const handleReset = () => {
    setFormData({
      fullName: "",
      rollNo: "",
      dept: "",
      cgpa: "",
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (
      formData.fullName === "" ||
      formData.dept === "" ||
      formData.rollNo === "" ||
      formData.cgpa === ""
    ) {
      console.log("All fields are required");
    } else {
      console.log(formData);
      addStudent(formData);
      handleReset();
    }
  };
  return (
    <>
      <div className="student-form-con">
        <form className="student-form" onSubmit={handleSubmit}>
          <section className="input-items">
            <label>Name:</label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
            />
          </section>
          <section className="input-items">
            <label>RollNo:</label>
            <input
              type="text"
              name="rollNo"
              value={formData.rollNo}
              onChange={handleChange}
            />
          </section>
          <section className="input-items">
            <label>Deparment:</label>
            <input
              type="text"
              name="dept"
              value={formData.dept}
              onChange={handleChange}
            />
          </section>
          <section className="input-items">
            <label>CGPA:</label>
            <input
              type="text"
              name="cgpa"
              value={formData.cgpa}
              onChange={handleChange}
            />
          </section>

          <div className="btns">
            <button type="submit">Add Student</button>
            <button onClick={handleReset}>Reset</button>
          </div>
        </form>
      </div>
    </>
  );
}

export default StudentForm;
