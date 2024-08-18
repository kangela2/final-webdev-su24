import { Link } from "react-router-dom";

function SingleEmployeeView({employee}) {
  if (!employee) {
    return (
      <section>
        <h2>Employee not found!</h2>
      </section>
    );
  }

  return (
    <div>
      <Link to="../employees">Back to all employees</Link>
      <section>
        <article>
          <h2>{employee.firstname} {employee.lastname}</h2>
          <p>Department: {employee.department || "Not specified"}</p>
          <p>Assigned Tasks:</p>
          {employee.tasks && employee.tasks.length > 0 ? (
            <ul>
              {employee.tasks.map(task => (
                <li key={task.id}>
                  <Link to={`/tasks/${task.id}`}>{task.description}</Link>
                  <p>Priority: {task.priority}</p>
                  <p>Status: {task.isComplete ? "COMPLETED" : "IN PROGRESS"}</p>
                </li>
              ))}
            </ul>
          ) : (
            <p>No tasks assigned to this employee.</p>
          )}
        </article>
      </section>
      <hr/>
    </div>
  );
}

export default SingleEmployeeView;