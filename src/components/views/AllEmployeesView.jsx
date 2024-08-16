import { Link } from "react-router-dom";

function AllEmployeesView(props) {
    return (
        <>
          <h4>ALL EMPLOYEES</h4>
          <Link to={`/`}><button>Back to Home</button></Link>
        </>
    );

}

export default AllEmployeesView;