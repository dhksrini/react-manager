import _ from 'lodash';
import React, {Component} from 'react';
import {TouchableOpacity, View, Text} from 'react-native';
import Communications from 'react-native-communications';
import { connect } from 'react-redux';
import EmployeeForm from './EmployeeForm';
import { employeeCreateAction, employeeSave, employeeFire } from '../actions';
import { Card, CardSection, Confirm } from './common/';

class EmployeeEdit extends Component {
    state= {showModal: false};
    componentWillMount(){
        _.each(this.props.employee, (value, prop) => {
            this.props.employeeCreateAction({ prop, value });
        });        
    }
    onButtonPress(){
        const {name, phone, shift} = this.props;  
        console.log(this.props.employee);
        this.props.employeeSave({name, phone, shift, uid: this.props.employee.uid});
    }
    onTextPress(){
        const {name, phone, shift} = this.props; 
        Communications.text(phone, `Hi ${name}, Your next shift is on ${shift}`)
    }
    onAccept(){
        const {uid} = this.props.employee;
        this.props.employeeFire({uid})
    }
    onDecline(){
        return(
            this.setState({showModal: false})
        )
    }
    render(){
        return(
            <Card>
                <EmployeeForm />
                <CardSection>
                    <TouchableOpacity style = {styles.buttonStyle} onPress={this.onButtonPress.bind(this)}>
                        <Text style={styles.textStyle}>Save Changes</Text>
                    </TouchableOpacity>
                </CardSection>
                <CardSection>
                    <TouchableOpacity style = {styles.buttonStyle} onPress={this.onTextPress.bind(this)}>
                        <Text style={styles.textStyle}>Text to Employee</Text>
                    </TouchableOpacity>
                </CardSection>
                <CardSection>
                    <TouchableOpacity style = {styles.buttonStyle} onPress={ () => this.setState({showModal: !this.state.showModal}) }>
                        <Text style={styles.textStyle}>Fire Employee</Text>
                    </TouchableOpacity>
                </CardSection>

                <Confirm
                    visible={this.state.showModal}
                    onAccept={this.onAccept.bind(this)}
                    onDecline={this.onDecline.bind(this)}
                >
                Are you sure want to delete this employee..!
                </Confirm>
            </Card>
        )
    }
}

const mapStateToProps = (state) => {
    const {name, phone, shift} = state.employeeForm;
    return {name, phone, shift};
}

const styles = {
    buttonStyle: {
        flex: 1,
        alignSelf: 'stretch',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#007aff',
        marginLeft: 5,
        marginRight: 5
    },
    textStyle: {
        color: '#007aff',
        fontSize: 16,
        fontWeight: '600',
        alignSelf:  'center',
        paddingTop: 10,
        paddingBottom: 10
    }
}

export default connect(mapStateToProps, {employeeCreateAction, employeeSave, employeeFire})(EmployeeEdit);