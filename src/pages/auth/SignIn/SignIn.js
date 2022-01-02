import React from 'react'
import { Alert } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import auth from '@react-native-firebase/auth';

import routes from '../../../navigation/routes';
import SignInLayout from './layout/SignInLayout';

const SignIn = () => {

    const navigation = useNavigation();

    function handleNavigateSignUp() {
        navigation.navigate(routes.SIGN_UP_PAGE);
    }

    function handleSignIn(member) {
        try {
            auth().signInWithEmailAndPassword(member.email, member.password);
            Alert.alert("BIKE", "Signed In 🚴");
        } catch (error) {
            Alert.alert("BIKE", "An error occured!");
        }

        // auth().signInWithEmailAndPassword(member.email, member.password);
    }

    return (
        <SignInLayout onSignUp={handleNavigateSignUp} onSignIn={handleSignIn}/>
    )
}

export default SignIn