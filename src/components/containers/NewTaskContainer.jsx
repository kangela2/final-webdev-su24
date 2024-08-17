import NewTaskView from "../views/NewTaskView";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addTask } from "../../store/tasksSlice";
import { fetchEmployees } from "../../store/employeesSlice";

function NewTaskContainer() {
    const employees = useSelector((state) => state.employees);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchEmployees());
      }, [dispatch]);

    const handleSubmit = (e) => {
        // Prevent server submission
        e.preventDefault();

        // Get data from form
        const form = e.target;
        const formData = new FormData(form);
        const formJson = Object.fromEntries(formData.entries());

        // Create the task object and dispatch the `addTask` thunk

        if (formJson.description.trim() === "") {
            alert("Please fill out the task description.");
            return;
          }
          
          if (!formJson.employeeId || formJson.employeeId.trim() === "") {
            alert("Please select an employee.");
            return;
          }

          if (!formJson.priority) {
            alert("Please select priority.");
            return;
          }
          
            const newTask = {
            description: formJson.description.trim(),
            priority: formJson.priority,
            employeeId: JSON.parse(formJson.employeeId)
          };
          
          // Dispatch the task if all fields are valid
          dispatch(addTask(newTask));
          alert("Task successfully added.");
        
        // Reset the form so another task can be added
        e.currentTarget.reset();
      }

    return (
        <NewTaskView handleSubmit={handleSubmit} employees={employees}/>
    );

}

export default NewTaskContainer;