function SingleTaskView({task}) {
    if (!task) {
        return (
          <section>
            <h2>Task not found!</h2>
          </section>
        );
      }

      return (
        <section>
          <article className="task">
            <h2>{task.description}</h2>
            <h3>Task assigned to Employee: {task.employeeId}</h3>
            <h4>Priority: {task.priority}</h4>
            <h5> Completion Status: {task.isComplete ? "COMPLETED" : "IN PROGRESS"}</h5>
          </article>
        </section>
      );
}

export default SingleTaskView;