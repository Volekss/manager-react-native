import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
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
        const store= createStore(reducers, {}, applyMiddleware(ReduxThunk));
        return(
            <Provider store={store}>
                <LoginForm />
            </Provider>
        );
    }
}

export default App;