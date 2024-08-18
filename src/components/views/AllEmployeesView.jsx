import './styles/all-employees.css';

let ulStyle = {
  border: "3px solid #0d0",
  width: "70%",
  margin: "0 auto",
  overflow: "auto",
};

let liStyle = {
  padding: "8px 16px",
  borderBottom: "3px solid #0d0",
  backgroundColor: "#e5f0e1",
};

let liStyleLastChild = {
  ...liStyle,
  borderBottom: "none",
};


import { Link } from "react-router-dom";

function AllEmployeesView({employees}) {
  if (!employees.length) {
    return (
      <>
      <Link to={`/`}><button>Back to Home</button></Link>
      <Link to={`/employees/new`}><button>Add Employee</button></Link>
      <div>There are no employees.</div>
      </>
    );
  }
  return (
    <>
       <h2>All Employees</h2>
      <ul>
        {employees.map((employee, idx) => (
          <li key={employee.id}>
            Employee #{idx+1}: 
            <Link to={`/employees/${employee.id}`}>
              {employee.firstname} {employee.lastname}
            </Link>
          </li>
        ))}
      </ul>
      <Link to={`/`}><button>Back to Home</button></Link>
      <Link to={`/employees/new`}><button>Add Employee</button></Link>

    </>
  );

}

export default AllEmployeesView;