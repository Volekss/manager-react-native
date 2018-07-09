import React, {Component} from 'react';
import {connect} from 'react-redux';
import {emailChanged, passwordChanged, loginUser} from "../actions";
import Spinner from 'react-native-loading-spinner-overlay';
import {View, Text} from 'react-native';
import {Card, CardSection, Input, Button} from './common';

class LoginForm extends Component {
    onEmailChange(text) {
        this.props.emailChanged(text);
    }

    onPasswordChange(text) {
        this.props.passwordChanged(text);
    }

    onButtonPress() {
        const {email, password, isLoading} = this.props;
        this.props.loginUser({email, password});
    }

    renderError() {
        if (this.props.error) {
            return (
                <View style={{backgroundColor: 'white'}}
                >
                    <Text style={styles.errorTextStyle}>
                        {this.props.error}
                    </Text>
                </View>
            );
        }
    }

    renderSpinner() {
        if (this.props.isLoading) {
            console.log('Spinerrr!!!');
            return (
                <View style={{flex: 1}}>
                    <Spinner visible={true}/>
                </View>
            );
        }
    }

    render() {
        return (
            <Card>
                <CardSection>
                    <Input
                        label="Email"
                        placeholder="email@gmail.com"
                        onChangeText={this.onEmailChange.bind(this)}
                        autoCapitalize={'none'}
                        value={this.props.email}/>
                </CardSection>

                <CardSection>
                    <Input
                        secureTextEntry
                        label="Password"
                        placeholder="password"
                        onChangeText={this.onPasswordChange.bind(this)}
                        autoCapitalize={'none'}
                        value={this.props.password}/>
                </CardSection>


                {this.renderSpinner()}

                <CardSection>
                    <Button onPress={this.onButtonPress.bind(this)}>
                        Login
                    </Button>
                </CardSection>
                {this.renderError()}
            </Card>
        );
    }
}

const styles = {
    errorTextStyle: {
        fontSize: 20,
        alignSelf: 'center',
        color: 'red'
    }
};

const mapStateToProps = state => {
    return {
        email: state.auth.email,
        password: state.auth.password,
        error: state.auth.error,
        isLoading: state.auth.isLoading
    };
};

export default connect(mapStateToProps, {
    emailChanged,
    passwordChanged,
    loginUser
})(LoginForm);