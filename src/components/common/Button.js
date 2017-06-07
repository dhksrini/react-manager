import React from 'react';
import {Text, TouchableOpacity} from 'react-native';

const Button = (props) => {
    const {buttonStyle, textStyle} = styles;
    return(
        <TouchableOpacity style = {buttonStyle} onPress={onPress}>
            <Text style={textStyle}>{props.buttonText}</Text>
        </TouchableOpacity>
    );
};

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


export {Button};