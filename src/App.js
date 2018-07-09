import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';
import firebase from 'firebase';
import LoginForm from './components/LoginForm';

// install redux redux-native firebase

class App extends Component {
    componentWillMount() {
        const config = {
            apiKey: "AIzaSyCxUh7iLoei_8ejjTNAURbmznnJLdDOW-w",
            authDomain: "manager-6ba93.firebaseapp.com",
            databaseURL: "https://manager-6ba93.firebaseio.com",
            projectId: "manager-6ba93",
            storageBucket: "manager-6ba93.appspot.com",
            messagingSenderId: "1096878749334"
        };
        firebase.initializeApp(config);
    }



    render() {
        return(
            <Provider store={createStore(reducers)}>
                <LoginForm />
            </Provider>
        );
    }
}

export default App;