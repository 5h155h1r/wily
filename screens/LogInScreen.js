import firebase from 'firebase'
import React from 'react'
import {
    View, Text, StyleSheet, Image, TextInput, TouchableOpacity, Alert,
    KeyboardAvoidingView
} from 'react-native'


export default class LogInScreen extends React.Component {
    constructor() {
        super()
        this.state = {
            emailId: '',
            password: ''
        }
    }

    logIn = async (email, password) => {
        if (email && password) {
            console.log("login")
            try {
                const response = await firebase.auth().signInWithEmailAndPassword(email, password)
                console.log(response)
                if (response) {
                    this.props.naviagtion.navigate('Transaction')
                    console.log("2")
                }
                console.log("3")
            }
            catch (error) {
                switch (error.code) {
                    case 'auth/user-not-found': {
                        Alert.alert("User Does Not Exist")
                        console.log("does not exist")
                        break;
                    }
                    case 'auth/invalid-email': {
                        Alert.alert("Incorrect Email or Passsword")
                        console.log("Invalid")
                        break;
                    }
                }
            }
        }
        else {
            Alert.alert("Enter Email and Password")
        }
    }
    render() {
        return (
            <KeyboardAvoidingView style={{ alignItems: 'center', marginTop: 20 }} >
                <View>
                    <Image
                        source={require("../assets/booklogo.jpg")}
                        style={{ width: 200, height: 200 }}
                    ></Image>
                    <Text style={{ textAlign: 'center', fontSize: 30 }}>Wily</Text>
                </View>
                <View>
                    <TextInput
                        style={styles.logInBox}
                        placeholder="abc@example.com"
                        keyboardType='email-address'
                        onChangeText={
                            text => {
                                this.setState({
                                    emailId: text
                                })
                            }
                        }
                    >
                    </TextInput>

                    <TextInput
                        style={styles.logInBox}
                        placeholder="enter password"
                        secureTextEntry={true}
                        onChangeText={
                            text => {
                                this.setState({
                                    password: text
                                })
                            }
                        }
                    >
                    </TextInput>
                </View>
                <View>
                    <TouchableOpacity
                        style={{
                            height: 30,
                            width: 90,
                            borderWidth: 1,
                            marginTop: 20,
                            paddingTop: 5,
                            borderRadius: 7
                        }}
                        onPress={() => {
                            this.logIn(this.state.emailId, this.state.password)
                        }}
                    >
                        <Text style={{ textAlign: 'center' }}>Log In</Text>
                    </TouchableOpacity>
                </View>
            </KeyboardAvoidingView>
        )
    }
}

const styles = StyleSheet.create({
    logInBox: {
        width: 300,
        height: 40,
        borderWidth: 1.5,
        fontSize: 20,
        margin: 10,
        paddingLeft: 10
    }
})