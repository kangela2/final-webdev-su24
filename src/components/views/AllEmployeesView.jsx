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

function AllEmployeesView({employees, deleteEmployee}) {
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
    <div id="bgview" style={{ ...ulStyle }}>
      <h2>All Employees</h2>
      <Link to={`/`}><button style={{ margin: "8px" }}>Back to Home</button></Link>
      <Link to={`/employees/new`}><button style={{ margin: "8px" }}>Add Employee</button></Link>
      <div style={ulStyle}>
        {employees.map((employee, idx) => {
          let styleBool = idx === employees.length - 1 ? liStyleLastChild : liStyle;
          return (
            <div key={employee.id} style={styleBool}>
              <h4>
                Employee #{idx + 1}:{" "}
                <Link to={`/employees/${employee.id}`}>
                  {employee.firstname} {employee.lastname}
                </Link>
              </h4>
              <h5>Department: {employee.department}</h5>
              <button onClick={() => deleteEmployee(employee.id)}>Delete</button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default AllEmployeesView;