import React, {Component} from 'react';
import {Text, TouchableOpacity} from 'react-native';
import { connect } from 'react-redux';

import { employeeCreateAction, employeeCreateWith } from '../actions';
import { Card, CardSection} from './common/';

import EmployeeForm from './EmployeeForm';

class EmployeeCreate extends Component{
    onButtonPress(){
        const {name, phone, shift} = this.props;

        this.props.employeeCreateWith({name, phone, shift: shift || 'Monday'})
    }
    render(){
        return(
            <Card>
                <EmployeeForm {...this.props} />
                <CardSection>
                    <TouchableOpacity style = {styles.buttonStyle} onPress={this.onButtonPress.bind(this)}>
                        <Text style={styles.textStyle}>Create</Text>
                    </TouchableOpacity>
                </CardSection>
            </Card>
        );
    }
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

const mapStateToProps = (state) => {
    const {name, phone, shift} = state.employeeForm;
    return{ name, phone, shift };
}

export default connect(mapStateToProps, {employeeCreateAction, employeeCreateWith})(EmployeeCreate);