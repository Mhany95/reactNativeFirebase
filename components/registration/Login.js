import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    TextInput,
    Dimensions,
    TouchableOpacity
} from 'react-native';
//import firebase from 'react-native-firebase'
import * as firebase from 'firebase'

export default class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            usernameError: false,
            passwordError: false,
            error: ""
        };
        firebase.initializeApp({
            apiKey: "AIzaSyAzDo3JLyG8Qw4zjmdmz1PO_kQX1UDdKoY",
        })
    }


    validateUsername = () => {
        var emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

        if (this.state.username.toString().trim() == "" || !emailRegex.test(this.state.username.toString())) {
            this.setState({
                usernameError: true
            })
            return false;
        }
        else
            return true;
    }

    validatePassword = () => {
        if (this.state.password.toString().trim() == "" || this.state.password.length < 6) {
            this.setState({
                passwordError: true
            })
            return false;
        }
        else
            return true;
    }

    handleLogin = () => {
        try
        {
            var validatedUsername = this.validateUsername();
            var validatedPassword = this.validatePassword();

            if (validatedUsername && validatedPassword) {
                firebase.auth().signInWithEmailAndPassword(this.state.username, this.state.password)
                .then(
                    (success) => {
                        this.props.navigation.navigate("Home")
                }, (error) => {
                    this.setState({error: "Invalid username and/ or password"})
                });
            }
        }
        catch(ex)
        {
            console.log(ex)
        }
    }

    handleSignUp = ()=>{
        try
        {
            var validatedUsername = this.validateUsername();
            var validatedPassword = this.validatePassword();

            if (validatedUsername && validatedPassword) {
                firebase.auth().createUserWithEmailAndPassword(this.state.username, this.state.password)
                .then(
                    (success) => {
                        this.props.navigation.navigate("Home")
                }, (error) => {
                    this.setState({error: "Email is already registered"})
                });
            }
        }
        catch(ex)
        {
            console.log(ex)
        }
    }
    render() {
        return (
            <View
                style={{
                    flex: 1,
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor: 'white'
                }}
            >
                <View
                    style={{
                        flex: 0.2,
                    }}
                />
                <View
                    style={{
                        flex: 1,
                        width: Dimensions.get("window").width / 1.5,
                    }}
                >
                    <TextInput
                        onChangeText={txt => this.setState({ username: txt, usernameError: false })}
                        value={this.state.username}
                        placeholder="Email"
                        underlineColorAndroid={this.state.usernameError ? "red" : "grey"}
                    />

                    <TextInput
                        onChangeText={txt => this.setState({ password: txt, passwordError: false })}
                        value={this.state.password}
                        style={{ marginVertical: 10 }}
                        placeholder="Password"
                        secureTextEntry={true}
                        underlineColorAndroid={this.state.passwordError ? "red" : "grey"}
                    />

                    <TouchableOpacity
                        onPress={this.handleLogin}
                        style={{
                            backgroundColor: "#007bb0",
                            height: 40, justifyContent: 'center', alignItems: 'center', borderRadius: 2
                        }}
                    >
                        <Text
                            style={{ color: 'white' }}
                        >
                            Login
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={this.handleSignUp}
                        style={{
                            backgroundColor: "#007bb0",
                            height: 40, justifyContent: 'center', alignItems: 'center', borderRadius: 2, marginVertical: 10
                        }}
                    >
                        <Text
                            style={{ color: 'white' }}
                        >
                            Sign Up
                        </Text>
                    </TouchableOpacity>

                    {this.state.error !== ""?
                        <View
                            style={{justifyContent: 'center', alignItems: 'center'}}
                        >
                            <Text
                                style={{ color: 'red'}}
                            >
                                {this.state.error}
                            </Text>
                        </View>
                        : null
                    }
                </View>
            </View>
        );
    }
}