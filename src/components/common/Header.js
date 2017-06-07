// import react
import React, { Component } from 'react';
import { Text,  View } from 'react-native';

// component
class Header extends Component {
    render() {
        return(
            <View style={styles.viewStyle}>
                <Text style={styles.instructions}>{this.props.headerTitle}</Text>
            </View>
        );
    }
}


const styles = {
  instructions: {
    color: '#fff',
    fontSize: 18
  },
  viewStyle:{
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'pink'
  }
};

// export app
export {Header};