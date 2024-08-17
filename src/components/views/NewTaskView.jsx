import { Link } from "react-router-dom";

function NewTaskView({ handleSubmit, employees }) {
    let selectPriority = (
      <p> Priority level:
        <label>
          <input type="radio" name="priority" value="Low" /> Low
        </label>
        <label>
          <input type="radio" name="priority" value="Medium" /> Medium
        </label>
        <label>
          <input type="radio" name="priority" value="High" /> High
        </label>
      </p>
    );

    let selectEmployee = (
      <label> Assign employee:
        <select name="employeeId" defaultValue="null">
          <option value="null">Unassigned</option>
          {employees.map(emp => {
            let name = emp.firstname + " " + emp.lastname;
            return <option key={emp.id} value={emp.id}>{name}</option>;
          })}
        </select>
      </label>
    );
    return (
        <section>
          <h2>Add a New Task</h2>
          <form onSubmit={handleSubmit} id="newtaskform">
            <label>
              Description: <input name="description" />
            </label>  
            {selectPriority}
            {selectEmployee}
            <button>Save Task</button>
          </form>
          <br/>
          <Link to={`/tasks`}><button style={{margin: "8px"}}>Back to All Tasks</button></Link>
        </section>
      )

}

export default NewTaskView;