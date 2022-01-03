import React, { useState, useEffect } from 'react'
import { SafeAreaView, View } from 'react-native'
import auth from '@react-native-firebase/auth';

import styles from './BikesMap.style';
import MapView from 'react-native-maps';
import database from '@react-native-firebase/database';
import BikeMarker from '../../components/BikeMarker/BikeMarker';
import BikeModal from '../../components/BikeModal/BikeModal';

const BikesMap = () => {
    const [bikes, setBikes] = useState([]);
    const [selectedBike, setSelectedBike] = useState(null);

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

    async function handleRent() {
        try {
            const { id, ...bikeData } = selectedBike;

            await database()
                .ref('/bikes/' + selectedBike.id)
                .update({
                    ...bikeData,
                    inUse: 1,
                });

            await database()
                .ref('/user/' + auth().currentUser.uid + '/currentSelectedBike')
                .push()
                .set(selectedBike);

            setSelectedBike(null);
        } catch (error) {
            console.log(error);
        }
    }

    async function handleGiveAway() {
        const { id, ...bikeData } = selectedBike;

        // Kullanıcının mevcut olarak kiraladığı bisikleti alt yapıda saklamak
        // Kullanıcının geçmiş bisiklet kullanınımı saklamak
        await database()
            .ref('/bikes/' + selectedBike.id)
            .update({
                ...bikeData,
                inUse: 0,
            });

        setSelectedBike(null);
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
                    <BikeMarker key={b.id} data={b} onSelect={() => setSelectedBike(b)} />
                ))}
            </MapView>
            <BikeModal bike={selectedBike} onCloseRequest={() => setSelectedBike(null)} onRent={handleRent} onGiveAway={handleGiveAway} />
        </SafeAreaView>
    );
}
export default BikesMap
