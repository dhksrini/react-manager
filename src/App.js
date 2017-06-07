import React, { Component } from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import RouterComponent from './Router';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import reducers from './reducers';
import ReduxThunk from 'redux-thunk';

class App extends Component{

    componentWillMount(){
        const firebaseConfig = {
            apiKey: "AIzaSyBKkzPFhp1ZGZr5aXQonGZ-FpHuEIsqREY",
            authDomain: "manager-2eb67.firebaseapp.com",
            databaseURL: "https://manager-2eb67.firebaseio.com",
            projectId: "manager-2eb67",
            storageBucket: "manager-2eb67.appspot.com",
            messagingSenderId: "863088862914"
        }
        firebase.initializeApp(firebaseConfig);
    }

    render(){
        const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
        return(
            <Provider store={store}>
                <View style={{flex: 1}}>
                    <RouterComponent />
                </View>
            </Provider>
        )
    }
}

export default App;