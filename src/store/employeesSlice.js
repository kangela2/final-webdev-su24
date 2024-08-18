//REDUCER
const initialState = [];

export function employeesReducer(state = initialState, action) {
    switch (action.type) {
      case 'employees/employeesLoaded':
        return action.payload;
        case 'employees/employeesCreated':
          return [...state, action.payload];
      default:
        return state;
    }
};

//API calls go here
import axios from "axios";
//PATH (should be where your server is running)
const PATH = "http://localhost:5001/api/";

//Thunk 
export const fetchEmployees = () => async (dispatch) => {
  try {
    let res = await axios.get(`${PATH}/employees`);
    dispatch({type: 'employees/employeesLoaded', payload: res.data});
  } catch(err) {
    console.error(err);
  }
};

/* ADD EMPLOYEE */
export const addEmployee = employee => async (dispatch) => {
  try {
    let res = await axios.post(`${PATH}/employees`, employee);
    dispatch({type: 'employees/employeeCreated', payload: res.data});
    return res.data;
  } catch(err) {
    console.error(err);
  }
};

//Write a sub-reducer to manage employees in your Redux store 
//everything will be there in backend but need to know how to use the thunks and add things. 
//Already set up but need to add to the reducers for in EmployeeSlice.js. Thunk for adding a task and editing a task
