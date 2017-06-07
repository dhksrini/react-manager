// import files
import React, {Component} from 'react';
import {View, TextInput, Text} from 'react-native';

// create reat module
const Input = ({label, value, onChangeText, secureTextEntry, placeholder, placeholderTextColor}) => {
    const {inputStyle, labelStyle, containerStyle} = styles;
    return(
        <View style={containerStyle}>
            <Text style={labelStyle}>{label}</Text>
            <TextInput 
                secureTextEntry={secureTextEntry}
                placeholder={placeholder}
                placeholderTextColor = {placeholderTextColor}
                autoCorrect={false}
                style={inputStyle} 
                value={value} 
                onChangeText={onChangeText} 
            />
        </View>
    )
}
const styles = {
    inputStyle: {
        flex: 2,
        fontSize: 16,
        color: '#000',
        paddingRight: 5,
        paddingLeft: 5,
        lineHeight: 23
    },
    labelStyle: {
        flex: 1,
        fontSize: 16,
        paddingLeft: 20,
    },
    containerStyle: {
        height: 55,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
    }
}


// export component
export {Input};
