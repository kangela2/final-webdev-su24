import { Link } from "react-router-dom";

function EditEmployeeView({ employee, tasks, handleSubmit}) {
    if (!employee) {
        return (
          <section>
            <h2>Employee not found!</h2>
          </section>
        );
      }

      return (
        <div>
        <h3 style={{textDecoration: "underline",}}>Edit employee information: </h3>
        <form onSubmit={handleSubmit} id="editemployeeform">
            <label> Department: 
              <input name="department" defaultValue={employee.department} required/> 
            </label>  
            <br/>
            <label> Last Name: 
              <input name="lastname" defaultValue={employee.lastname} required/> 
            </label>
            <label> Assign task:
              <select name="taskId" defaultValue="null" required>
                <option value="null">None</option>
                {tasks.map(t => {
                  let taskname = t.description;
                  return <option key={t.id} value={t.id}>{taskname}</option>;
                })}
              </select>
            </label>
            <button>Save Employee</button>
          </form>
          <Link to={`../employees`}>Back to all employees</Link>
        </div>

      );
}

export default EditEmployeeView;