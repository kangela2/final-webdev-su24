import { Link } from "react-router-dom";

function AllEmployeesView({employees}) {
  if (!employees.length) {
    return (
      <>
      <Link to={`/`}><button>Back to Home</button></Link>
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
    </>
  );

}

export default AllEmployeesView;