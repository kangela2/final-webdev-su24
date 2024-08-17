import { Link } from "react-router-dom";

function AllEmployeesView({employees}) {
  if (!employees.length) {
    return (
      <div>There are no employees.</div>
    );
  }
  return (
    <>
      <ul>
        {employees.map((user, idx) => (
          //link to single employee like in allTaskView need route in src/main.jsx
          <li key={user.id}>Employee #{idx+1}: {user.firstname}</li> //changed so can extract it from database
        ))}
      </ul>
      <Link to={`/`}><button>Back to Home</button></Link>
    </>
  );

}

export default AllEmployeesView;