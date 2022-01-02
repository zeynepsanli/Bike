import { StyleSheet, Dimensions } from "react-native";

export default StyleSheet.create({
    logo: {
        height: Dimensions.get('window').height / 3,
        width: Dimensions.get('window').width,
        resizeMode: 'contain',
        alignSelf: 'center',
    },
    logo_container: {
        margin: 10,
        padding: 10,
    },
    signUp_text: {
        margin: 5,
        paddingStart: 30,
        paddingEnd: 25,
        justifyContent: 'center',
        color: '#b5c1c7',
        fontSize: 11,

    },
});