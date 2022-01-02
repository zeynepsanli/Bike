import React from 'react'
import { Alert } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import auth from '@react-native-firebase/auth';

import SignUpLayout from './layout/SignUpLayout';

const SignUp = () => {

    const navigation = useNavigation();

    function handleReturnSignIn() {
        if (!navigation.canGoBack()) {
            return;
        }
        navigation.goBack();
    }

    function handleSignUp(member) {
        try {
            auth().createUserWithEmailAndPassword(member.email, member.password);  
            Alert.alert("BIKE", "User created. Now you can sign in with your adress 😍"); 
            handleReturnSignIn();
        } catch (error) {
            Alert.alert("BIKE", "An error occured!");   
        }
    }

    return (
        <SignUpLayout onGoBack={handleReturnSignIn} onSignUp={handleSignUp}/>
    )
}

export default SignUp
