import React, {Component} from 'react';
import { Picker, View} from 'react-native';
import { connect } from 'react-redux';
import { employeeCreateAction } from '../actions';
import { CardSection, Input } from './common/';

class EmployeeForm extends Component{
    render(){
        return(
            <View>
                <CardSection>
                    <Input 
                        label="Name"
                        placeholder="Name"
                        value = {this.props.name}
                        onChangeText = { value => this.props.employeeCreateAction({ prop: 'name', value }) }
                    />
                </CardSection>
                <CardSection>
                    <Input 
                        label="Phone"
                        placeholder="10 digit number"
                        value = {this.props.phone}
                        onChangeText = { value => this.props.employeeCreateAction({ prop: 'phone', value }) }
                    />
                </CardSection>
                <CardSection>
                    <Picker
                        style={{flex: 1}}
                        selectedValue={this.props.shift}
                        onValueChange={value => this.props.employeeCreateAction({ prop: 'shift', value })}>
                        <Picker.Item label="Monday" value="Monday" />
                        <Picker.Item label="Tuesday" value="Tuesday" />
                        <Picker.Item label="Wednesday" value="Wednesday" />
                        <Picker.Item label="Thursday" value="Thursday" />
                        <Picker.Item label="Friday" value="Friday" />
                    </Picker>
                </CardSection>
            </View>
        )
    }
}

const mapStateToProps = (state) => {
    const {name, phone, shift} = state.employeeForm;
    return{ name, phone, shift };
}

export default connect(null, {employeeCreateAction})(EmployeeForm);