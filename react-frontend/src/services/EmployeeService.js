import axios from "axios";

// ✅ Define the backend API base URL
const EMPLOYEE_API_BASE_URL = "http://localhost:8085/api/v1/employees";


class EmployeeService {
  
  // Get all employees
getEmployees(){
    return axios.get(EMPLOYEE_API_BASE_URL);
}

createEmployee(employee){
    return axios.post(EMPLOYEE_API_BASE_URL, employee);
}

updateEmployee(employee, id){
    return axios.put(`${EMPLOYEE_API_BASE_URL}/${id}`, employee);
}

deleteEmployee(id){
    return axios.delete(`${EMPLOYEE_API_BASE_URL}/${id}`);
}

getEmployeeById(id){
    return axios.get(`${EMPLOYEE_API_BASE_URL}/${id}`);
}

}

// Export a single instance
export default new EmployeeService();
