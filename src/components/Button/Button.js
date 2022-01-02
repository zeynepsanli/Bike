import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

import styles from './Button.style';

const Button = ({label, theme='default', ...otherProps}) => {
    return (
        <TouchableOpacity style={styles[theme].container} {...otherProps} >
            <Text style={styles[theme].label}>{label}</Text>
        </TouchableOpacity>
    )
}

export default Button
