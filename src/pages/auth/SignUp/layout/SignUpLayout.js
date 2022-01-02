import React, {useState} from 'react'
import { View, Image, Alert, Text } from 'react-native'

import Button from '../../../../components/Button/Button'
import Input from '../../../../components/Input/Input'
import styles from './SignUpLayout.style';

const SignUpLayout = ({onSignUp, onGoBack}) => {

    const [member, setMember] = useState({ email: '', password: '', repassword: '', });

    function handleSignUp() {
        if (member.password !== member.repassword) {
           return Alert.alert("BIKE", "Password are not matched!");   
        }
        onSignUp(member); //onSignUp'ı yukarı pasladık burda

        
    }

    return (
        <View>
            <View style={styles.logo_container}>
                <Image style={styles.logo} source={require('../../../../assets/login.png')} />
            </View>
            <Input label="Email" autoCapitalize="none" onChangeText={text => setMember({ ...member, email: text })}/>
            <Input label="Password" secureTextEntry onChangeText={password => setMember({ ...member, password })}/>
            <Input label="Password Again" secureTextEntry onChangeText={repassword => setMember({ ...member, repassword })}/>
            <Button label="Sign Up" onPress={handleSignUp}/>
            <Button label="Back" theme="outline" onPress={onGoBack} />
            <Text style={styles.signUp_text}>I have a BIKE account.</Text>
        </View>
    )
}

export default SignUpLayout
