import React from 'react'
import { View, Text, TextInput } from 'react-native'

import styles from './Input.style';

const Input = ({label, ...otherProps}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.label}>{label}</Text>
            <View style={styles.input_container}>
                <TextInput style={styles.input} {...otherProps}/>
            </View>
        </View>
    )
}

export default Input
