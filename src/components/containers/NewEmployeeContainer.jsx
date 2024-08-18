import NewEmployeeView from "../views/NewEmployeeView";
import { useDispatch } from "react-redux";
import { addEmployee } from "../../store/employeesSlice";

function NewEmployeeContainer() {
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        // Prevent form submission to the server
        e.preventDefault();

        // Extract form data
        const form = e.target;
        const formData = new FormData(form);
        const formJson = Object.fromEntries(formData.entries());

        // Validate form inputs
        if (formJson.firstname.trim() === "") {
            alert("Please enter the employee's first name.");
            return;
        }

        if (formJson.lastname.trim() === "") {
            alert("Please enter the employee's last name.");
            return;
        }

        // Create the new employee object
        const newEmployee = {
            firstname: formJson.firstname.trim(),
            lastname: formJson.lastname.trim(),
            department: formJson.department.trim() || "Not Specified" // Default department if not provided
        };

        // Dispatch the action to add the employee
        dispatch(addEmployee(newEmployee));
        alert("Employee successfully added.");

        // Reset the form
        form.reset();
    };

    return (
        <NewEmployeeView handleSubmit={handleSubmit} />
    );
}

export default NewEmployeeContainer;
