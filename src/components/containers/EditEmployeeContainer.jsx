import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import { fetchTasks, editTask } from '../../store/tasksSlice';
import { fetchEmployees, editEmployee } from '../../store/employeesSlice';
import { useEffect } from 'react';

import EditEmployeeView from '../views/EditEmployeeView';

function EditEmployeeContainer() {
  let { employeeId } = useParams(); //get id from URL
  employeeId = parseInt(employeeId); //convert to integer

  const dispatch = useDispatch();
  
  //get employee from state based on URL parameter
  const employee = useSelector(state =>
    state.employees.find(employee => employee.id === employeeId)
  );

  //get tasks for dropdown
  const tasks = useSelector((state) => state.tasks);

  const handleSubmit = (e) => {
    // Prevent server submission
    e.preventDefault();

    // Get data from form
    const form = e.target;
    const formData = new FormData(form);
    const formJson = Object.fromEntries(formData.entries());

    // Create the task object and dispatch the `addEmployee` thunk
    const updates = {
      ...employee,
      department: formJson.department,
      lastname: parseInt(formJson.lastname),
      taskId: JSON.parse(formJson.taskId)
    };

    dispatch(editEmployee(updates));

    alert("Task updated!");

  }
  console.log('this is employee', employee);
  return <EditEmployeeView employee={employee} tasks={tasks} handleSubmit={handleSubmit}/>
}

export default EditEmployeeContainer;