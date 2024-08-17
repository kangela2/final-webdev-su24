import { Link } from "react-router-dom";

function SingleTaskView({ task, employees, handleSubmit}) {    if (!task) {
        return (
          <section>
            <h2>Task not found!</h2>
          </section>
        );
      }

      let employeeAssigned = task.employee ? 
        <Link to={`../employees`}>{task.employee.firstname + " " + task.employee.lastname}</Link>
        : "Unassigned";

      return (
        <div>
        <Link to="../tasks">Back to all tasks</Link>
        <section>
          <article>
            <h2>{task.description}</h2>
            <p>Assigned to: {employeeAssigned}</p>
            <p>Priority: {task.priority}</p>
            <p> Completion Status: {task.isComplete ? "COMPLETED" : "IN PROGRESS"}</p>
          </article>
        </section>
        <hr/>
        <Link to={`edit/`}><h3>Edit task information</h3></Link>

        </div>
      );
}

export default SingleTaskView;