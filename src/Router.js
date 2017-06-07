import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import EmployeeList from './components/EmployeeList';
import EmployeeCreate from './components/EmployeeCreate';
import EmployeeEdit from './components/EmployeeEdit'

const RouterComponent = () => {
    return(
        <Router sceneStyle={{paddingTop: 65}}>
            <Scene key="auth">
                <Scene key="login" title="Please login" component={LoginForm} initial />
            </Scene>
            <Scene key="main">
                <Scene 
                    key="employeeList" 
                    title="EmployeeList" 
                    component={EmployeeList}
                    rightTitle="Add"
                    onRight = { () => Actions.employeeCreate() }
                    initial
                />
                <Scene key="employeeCreate" title="Create Employee" component={EmployeeCreate} />
                <scene key="employeeEdit" title="Edit Employee" component={EmployeeEdit} />
            </Scene>
        </Router>
    );
};


export default RouterComponent;