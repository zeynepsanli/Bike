import React, {useState} from 'react'
import { View, Image, Text } from 'react-native'

import Button from '../../../../components/Button/Button'
import Input from '../../../../components/Input/Input'
import styles from './SignInLayout.style';

const SignInLayout = ({onSignIn, onSignUp}) => {

    const [member, setMember] = useState({email: '', password: ''});


    return (
        <View>
            <View style={styles.logo_container}>
                <Image style={styles.logo} source={require('../../../../assets/login.png')} />
            </View>
            <Input label="Email" autoCapitalize="none" onChangeText={text => setMember({...member, email: text})} />
            <Input label="Password" secureTextEntry onChangeText={password => setMember({ ...member, password })} />
            <Button label="Sign In" onPress={() => onSignIn(member)}/>
            <Button label="Sign Up" theme="outline" onPress={onSignUp} />
            <Text style={styles.signUp_text}>If you do are new, use this option to access the registration form.</Text>
        </View>
    )
}

export default SignInLayout