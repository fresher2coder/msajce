import React, { useEffect } from "react";
import { useState } from "react";

function StudentForm({
  addStudent,
  students,
  isEditing,
  studentToEdit,
  onUpdate,
}) {
  const [formData, setFormData] = useState({
    fullName: "",
    rollNo: "",
    dept: "",
    cgpa: "",
  });

  useEffect(() => {
    if (isEditing) {
      setFormData(studentToEdit);
    }
  }, [isEditing]);

  const [errors, setErrors] = useState({
    fullName: "",
    rollNo: "",
    dept: "",
    cgpa: "",
  });

  const regexValidators = {
    fullName: /^[A-Za-z\s]{3,50}$/, // Only letters and spaces, 3 to 50 chars
    rollNo: /^[A-Z0-9]{5,15}$/, // Alphanumeric (capital letters), 5 to 15 chars
    dept: /^[A-Za-z\s]{2,30}$/, // Letters and spaces, 2 to 30 chars
    cgpa: /^(?:[0-9](?:\.\d{1,2})?|10(?:\.0{1,2})?)$/, // 0.00 to 10.00 (2 decimal places max)
  };

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

  const validate = () => {
    // console.log(formData);
    if (formData.fullName === "") {
      setErrors((prev) => ({ ...prev, fullName: "* Name is required" }));
      return false;
    }
    //regex.test(data)
    if (!regexValidators.fullName.test(formData.fullName)) {
      setErrors((prev) => ({ ...prev, fullName: "* Name is invalid" }));
      return false;
    }
    if (formData.rollNo === "") {
      setErrors((prev) => ({ ...prev, rollNo: "* RollNo is required" }));
      return false;
    }
    if (!regexValidators.rollNo.test(formData.rollNo)) {
      setErrors((prev) => ({ ...prev, rollNo: "* RollNo is invalid" }));
      return false;
    }
    // [1, 2, 3].includes(3)

    if (formData.dept === "") {
      setErrors((prev) => ({ ...prev, dept: "* Dept is required" }));
      return false;
    }
    if (!regexValidators.dept.test(formData.dept)) {
      setErrors((prev) => ({ ...prev, dept: "* Dept is invalid" }));
      return false;
    }

    if (formData.cgpa === "") {
      setErrors((prev) => ({ ...prev, cgpa: "* CGPA is required" }));
      return false;
    }
    if (!regexValidators.cgpa.test(formData.cgpa)) {
      setErrors((prev) => ({ ...prev, cgpa: "* CGPA is invalid" }));
      return false;
    }

    return true;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setErrors({
      fullName: "",
      rollNo: "",
      dept: "",
      cgpa: "",
    });
    if (!validate()) {
      console.log("Form is not valid");
      return;
    }

    if (isEditing) onUpdate(studentToEdit.rollNo, formData);
    else addStudent(formData);
    handleReset();
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
            {errors.fullName && <p className="errors">{errors.fullName}</p>}
          </section>
          <section className="input-items">
            <label>RollNo:</label>
            <input
              type="text"
              name="rollNo"
              value={formData.rollNo}
              onChange={handleChange}
              disabled={isEditing}
            />
            {errors.rollNo && <p className="errors">{errors.rollNo}</p>}
          </section>
          <section className="input-items">
            <label>Deparment:</label>
            <input
              type="text"
              name="dept"
              value={formData.dept}
              onChange={handleChange}
            />
            {errors.dept && <p className="errors">{errors.dept}</p>}
          </section>
          <section className="input-items">
            <label>CGPA:</label>
            <input
              type="number"
              name="cgpa"
              value={formData.cgpa}
              onChange={handleChange}
            />
            {errors.cgpa && <p className="errors">{errors.cgpa}</p>}
          </section>

          <div className="btns">
            <button type="submit">
              {isEditing ? "Update Student" : "Add Student"}
            </button>
            <button onClick={handleReset}>Reset</button>
          </div>
        </form>
      </div>
    </>
  );
}

export default StudentForm;
