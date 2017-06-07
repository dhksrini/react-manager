import React from 'react';
import {Text, Modal, TouchableOpacity, View} from 'react-native';
import {CardSection} from './CardSection';

const Confirm = ({visible, children, onAccept, onDecline}) => {

    const {buttonStyle, textStyle, msgTextSyle, cardSectionStyle, containerStyle} = styles;

    return(
        <Modal
        animationType={"slide"}
        transparent
        visible={visible}
        onRequestClose={() => {}}
        >
            <View style={containerStyle}>
                <CardSection style={cardSectionStyle}>
                    <Text style={msgTextSyle}>{children}</Text>
                </CardSection>
                
                <CardSection>
                    <TouchableOpacity style = {buttonStyle} onPress={onAccept}>
                        <Text style={textStyle}>Yes</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style = {buttonStyle} onPress={onDecline}>
                        <Text style={textStyle}>No</Text>
                    </TouchableOpacity>
                </CardSection>
            </View>
        </Modal>
    )
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
    msgTextSyle:{
        flex: 1,
        fontSize: 18,
        textAlign: 'center',
        lineHeight: 40
    },
    cardSectionStyle: {
        justifyContent: 'center'
    },
    containerStyle: {
        backgroundColor: 'rgba(0,0,0,0.8)',
        position: 'relative',
        flex: 1,
        justifyContent: 'center',
        paddingLeft: 15,
        paddingRight: 15
    }
}

export {Confirm};

