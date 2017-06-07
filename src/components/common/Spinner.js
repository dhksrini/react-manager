// import files
import React from 'react';
import {View, ActivityIndicator} from 'react-native';

// component

const Spinner = ({ size }) => {
    return(
        <View style = {styles.spinneerStyle}>
            <ActivityIndicator size={ size || 'large' } />
        </View>
    )
}

const styles = {
    spinneerStyle: {
        flex: 1,
        height: 50,
        width: 300,
        justifyContent: 'center',
        alignItems: 'center'
    }
}

export {Spinner};