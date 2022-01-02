import React, { useEffect } from 'react'
import { SafeAreaView, View } from 'react-native'
import MapView from 'react-native-maps';
import database from '@react-native-firebase/database';

const BikesMap = () => {
    async function fetchBikes(params) {
        const bikes = await database().ref().once('value');
        console.log(bikes.val());
    }

    useEffect(() => {
        fetchBikes();
    }, []);

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <MapView
                style={{ flex: 0.5 }}
                initialRegion={{
                    latitude: 41.01384,
                    longitude: 28.94966,
                    latitudeDelta: 0.04,
                    longitudeDelta: 0.05,
                }}
            />
        </SafeAreaView>
    );
}
export default BikesMap
