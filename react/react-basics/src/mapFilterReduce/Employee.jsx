import React from "react";
//data-db -> backend(resp api) -> frontend(ui)

const employees = [
  {
    id: 1,
    fullname: "Aarav Sharma",
    dept: "HR",
    role: "Manager",
    salary: 75000,
  },
  {
    id: 2,
    fullname: "Isha Verma",
    dept: "Engineering",
    role: "Engineer",
    salary: 82000,
  },
  {
    id: 3,
    fullname: "Rohan Gupta",
    dept: "Sales",
    role: "Executive",
    salary: 60000,
  },
  {
    id: 4,
    fullname: "Kavya Reddy",
    dept: "Marketing",
    role: "Coordinator",
    salary: 55000,
  },
  {
    id: 5,
    fullname: "Neha Iyer",
    dept: "Finance",
    role: "Analyst",
    salary: 65000,
  },
  {
    id: 6,
    fullname: "Dev Patel",
    dept: "Operations",
    role: "Consultant",
    salary: 70000,
  },
  {
    id: 7,
    fullname: "Simran Kaur",
    dept: "HR",
    role: "Executive",
    salary: 58000,
  },
  {
    id: 8,
    fullname: "Raj Mehta",
    dept: "Engineering",
    role: "Manager",
    salary: 87000,
  },
  {
    id: 9,
    fullname: "Sneha Nair",
    dept: "Sales",
    role: "Coordinator",
    salary: 52000,
  },
  {
    id: 10,
    fullname: "Yash Joshi",
    dept: "Marketing",
    role: "Analyst",
    salary: 63000,
  },
  {
    id: 11,
    fullname: "Ananya Das",
    dept: "Finance",
    role: "Consultant",
    salary: 68000,
  },
  {
    id: 12,
    fullname: "Arjun Rao",
    dept: "Operations",
    role: "Engineer",
    salary: 79000,
  },
  {
    id: 13,
    fullname: "Pooja Pillai",
    dept: "HR",
    role: "Manager",
    salary: 76000,
  },
  {
    id: 14,
    fullname: "Manish Kulkarni",
    dept: "Engineering",
    role: "Engineer",
    salary: 81000,
  },
  {
    id: 15,
    fullname: "Tanvi Malhotra",
    dept: "Sales",
    role: "Executive",
    salary: 61000,
  },
  {
    id: 16,
    fullname: "Siddharth Sengupta",
    dept: "Marketing",
    role: "Coordinator",
    salary: 53000,
  },
  {
    id: 17,
    fullname: "Divya Bhatia",
    dept: "Finance",
    role: "Analyst",
    salary: 67000,
  },
  {
    id: 18,
    fullname: "Karan Sinha",
    dept: "Operations",
    role: "Consultant",
    salary: 72000,
  },
  {
    id: 19,
    fullname: "Ritika Chatterjee",
    dept: "HR",
    role: "Executive",
    salary: 59000,
  },
  {
    id: 20,
    fullname: "Vikram Desai",
    dept: "Engineering",
    role: "Manager",
    salary: 88000,
  },
  {
    id: 21,
    fullname: "Meera Ghosh",
    dept: "Sales",
    role: "Coordinator",
    salary: 54000,
  },
  {
    id: 22,
    fullname: "Nikhil Ahuja",
    dept: "Marketing",
    role: "Analyst",
    salary: 62000,
  },
  {
    id: 23,
    fullname: "Shruti Menon",
    dept: "Finance",
    role: "Consultant",
    salary: 69000,
  },
  {
    id: 24,
    fullname: "Tanishq Jain",
    dept: "Operations",
    role: "Engineer",
    salary: 80000,
  },
  {
    id: 25,
    fullname: "Aisha Chauhan",
    dept: "HR",
    role: "Manager",
    salary: 77000,
  },
  {
    id: 26,
    fullname: "Rajat Bhargava",
    dept: "Engineering",
    role: "Engineer",
    salary: 83000,
  },
  {
    id: 27,
    fullname: "Priya Kapoor",
    dept: "Sales",
    role: "Executive",
    salary: 62000,
  },
  {
    id: 28,
    fullname: "Abhay Trivedi",
    dept: "Marketing",
    role: "Coordinator",
    salary: 56000,
  },
  {
    id: 29,
    fullname: "Sanya Dey",
    dept: "Finance",
    role: "Analyst",
    salary: 66000,
  },
  {
    id: 30,
    fullname: "Harsh Vora",
    dept: "Operations",
    role: "Consultant",
    salary: 71000,
  },
  {
    id: 31,
    fullname: "Anika Bhatt",
    dept: "HR",
    role: "Executive",
    salary: 60000,
  },
  {
    id: 32,
    fullname: "Parth Agarwal",
    dept: "Engineering",
    role: "Manager",
    salary: 89000,
  },
  {
    id: 33,
    fullname: "Rhea Mahajan",
    dept: "Sales",
    role: "Coordinator",
    salary: 55000,
  },
  {
    id: 34,
    fullname: "Omkar Mishra",
    dept: "Marketing",
    role: "Analyst",
    salary: 64000,
  },
  {
    id: 35,
    fullname: "Nandini Naidu",
    dept: "Finance",
    role: "Consultant",
    salary: 70000,
  },
  {
    id: 36,
    fullname: "Aditya Rathi",
    dept: "Operations",
    role: "Engineer",
    salary: 81000,
  },
  {
    id: 37,
    fullname: "Ira Khandelwal",
    dept: "HR",
    role: "Manager",
    salary: 78000,
  },
  {
    id: 38,
    fullname: "Samar Bansal",
    dept: "Engineering",
    role: "Engineer",
    salary: 84000,
  },
  {
    id: 39,
    fullname: "Juhi Arora",
    dept: "Sales",
    role: "Executive",
    salary: 63000,
  },
  {
    id: 40,
    fullname: "Vivaan Kaul",
    dept: "Marketing",
    role: "Coordinator",
    salary: 57000,
  },
  {
    id: 41,
    fullname: "Manya Srivastava",
    dept: "Finance",
    role: "Analyst",
    salary: 68000,
  },
  {
    id: 42,
    fullname: "Aman Sehgal",
    dept: "Operations",
    role: "Consultant",
    salary: 73000,
  },
  {
    id: 43,
    fullname: "Kiara Rajput",
    dept: "HR",
    role: "Executive",
    salary: 61000,
  },
  {
    id: 44,
    fullname: "Reyansh Saxena",
    dept: "Engineering",
    role: "Manager",
    salary: 90000,
  },
  {
    id: 45,
    fullname: "Avni Kohli",
    dept: "Sales",
    role: "Coordinator",
    salary: 56000,
  },
  {
    id: 46,
    fullname: "Mohit Bhalla",
    dept: "Marketing",
    role: "Analyst",
    salary: 65000,
  },
  {
    id: 47,
    fullname: "Trisha Purohit",
    dept: "Finance",
    role: "Consultant",
    salary: 71000,
  },
  {
    id: 48,
    fullname: "Krishna Solanki",
    dept: "Operations",
    role: "Engineer",
    salary: 82000,
  },
  {
    id: 49,
    fullname: "Dhriti Modi",
    dept: "HR",
    role: "Manager",
    salary: 79000,
  },
];

const hrEmps = employees.filter((emp) => emp.dept === "Sales");

const hrEmpsSalary = hrEmps.reduce((salary, emp) => salary + emp.salary, 0);

function Employee() {
  return (
    <>
      <h1 className="table-title">Employee Table</h1>
      <section className="employee-table">
        <table>
          <thead>
            <tr>
              <th>FullName</th>
              <th>Department</th>
              <th>Role</th>
              <th>Salary</th>
            </tr>
          </thead>
          <tbody>
            {hrEmps.map((emp) => (
              <tr key={emp.id}>
                <td>{emp.fullname}</td>
                <td>{emp.dept}</td>
                <td>{emp.role}</td>
                <td>{emp.salary}</td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <td colSpan={3}>Total Salary</td>
              <td>{hrEmpsSalary}</td>
            </tr>
          </tfoot>
        </table>
      </section>
    </>
  );
}

export default Employee;
