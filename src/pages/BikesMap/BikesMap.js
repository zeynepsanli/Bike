import React from 'react'
import { SafeAreaView } from 'react-native'
import MapView from 'react-native-maps';

const BikesMap = () => {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <MapView style={{ flex: 1 }} />
        </SafeAreaView>
    );
}
export default BikesMap
