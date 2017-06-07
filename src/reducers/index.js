import { combineReducers } from 'redux';
import authReducer from './authReducer';
import EmployeeFormReducer from './EmployeeFormReducer';
import EmployeeListReducer from './EmployeeListReducer';

export default combineReducers({
    auth: authReducer,
    employeeForm: EmployeeFormReducer,
    employees: EmployeeListReducer
});

