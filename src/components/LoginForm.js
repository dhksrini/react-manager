import React, { Component } from 'react';
import { TouchableOpacity, Text} from 'react-native';
import { connect } from 'react-redux'; 
import { emailChanged, passwordChanged, loginUser } from '../actions';
import { Card, CardSection, Input, Button, Spinner } from './common/';

class LoginForm extends Component{
    onEmailChange(text) {
        this.props.emailChanged(text);
    }
    onPasswordChange(text) {
        this.props.passwordChanged(text);
    }
    userLoginPress() {
        const {email, password} = this.props;
        this.props.loginUser({email, password});
    }
    renderButtonView () {
        if( this.props.loading ){
            return <Spinner />
        }

        return(
            <TouchableOpacity style = {styles.buttonStyle} onPress={this.userLoginPress.bind(this)}>
                <Text style={styles.textStyle}>Login</Text>
            </TouchableOpacity>
        )
    }

    render(){
        return(
            <Card>
                <CardSection>
                    <Input 
                        label="Email"
                        placeholder="example@gmail.com"
                        onChangeText = { this.onEmailChange.bind(this) }
                        value={this.props.email}
                    />
                </CardSection>

                <CardSection>
                    <Input 
                        label="Password"
                        placeholder="Password"
                        secureTextEntry
                        onChangeText = { this.onPasswordChange.bind(this) }
                        value = {this.props.password}
                    />
                </CardSection>
                
                <Text style={styles.errorTextStyle}>{this.props.error}</Text>

                <CardSection>
                    {this.renderButtonView()}
                </CardSection>
            </Card>
        );
    }
}

const mapStateToProps = ({ auth }) => {
    const { email, password, error, loading } = auth;
    return{ email, password, error, loading }
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
    },
    errorTextStyle: {
        paddingLeft: 5,
        paddingRight: 5,
        paddingTop: 5,
        paddingBottom: 5,
        color: 'red',
    }
}

export default connect(mapStateToProps, { emailChanged, passwordChanged, loginUser})(LoginForm);
