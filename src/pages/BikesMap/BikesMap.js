import React, { useState, useEffect } from 'react'
import { SafeAreaView, View } from 'react-native'

import styles from './BikesMap.style';
import MapView, { Marker } from 'react-native-maps';
import database from '@react-native-firebase/database';

const BikesMap = () => {
    const [bikes, setBikes] = useState([]);

    async function listenBikeChanges() {
        database()
            .ref('/bikes')
            .on('value', snapshot => {
                const bikeData = snapshot.val();
                const parsedBikeData = Object.keys(bikeData).map(k => ({
                    id: k,
                    ...bikeData[k],
                }));
                setBikes(parsedBikeData);
            });
    }

    useEffect(() => {
        listenBikeChanges();
    }, []);

    return (
        <SafeAreaView style={styles.container}>
            <MapView
                style={styles.map_container}
                initialRegion={{
                    latitude: 40.24987,
                    longitude: 33.86724,
                    latitudeDelta: 9.55648,
                    longitudeDelta: 1.0032,
                }}
            >
                {bikes.map(b => (
                    <Marker
                        key={b.id}
                        coordinate={{
                            latitude: b.latitude,
                            longitude: b.longitude,
                        }} />
                ))}
            </MapView>
        </SafeAreaView>
    );
}
export default BikesMap
