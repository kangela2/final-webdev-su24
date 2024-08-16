import AllEmployeesView from "../views/AllEmployeesView"; //whatever you call it in the prop (employees) you have to name it in the view { AllEmployeesView }
// originally had {} ^ but took them away bc it was fro barrel file from AllInstructorsContainers ref 
function AllEmployeesContainer() {
    let employees = [{id: 314, name: "Angela"}, {id: 718, name: "Euler"} ]; //eventually employees array exist and sent to AllEmployeesView 
    return(
        <AllEmployeesView employees={employees} /> //via employees property
    );
}

export default AllEmployeesContainer;