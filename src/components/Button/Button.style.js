import { StyleSheet } from "react-native"; 

export default {
    default: StyleSheet.create({
        container: {
            backgroundColor: 'blue',
            marginVertical: 20,
            marginHorizontal: 30,
            padding: 10,
            borderRadius: 30,
            alignItems: 'center',
        },
        label: {
            fontWeight: 'bold',
            color: 'white',
        },
    }),
    outline: StyleSheet.create({
        container: {
            borderColor: 'blue',
            borderWidth: 1,
            marginHorizontal: 30,
            padding: 10,
            borderRadius: 30,
            alignItems: 'center',
        },
        label: {
            fontWeight: 'bold',
            color: 'blue',
        },
    })
};