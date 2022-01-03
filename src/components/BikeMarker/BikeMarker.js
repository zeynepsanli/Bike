import React from 'react';
import { View } from 'react-native';
import { Marker } from 'react-native-maps';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import styles from './BikeMarker.style';

export default function BikeMarker({ data }) {
    const { latitude, longitude, inUse } = data;

    const themeColor = inUse ? 'red' : 'blue';

    return (
        <Marker
            coordinate={{
                latitude,
                longitude,
            }}>
            <View style={[styles.container, { borderColor: themeColor }]}>
                <Icon name="bike-fast" size={20} color={themeColor} />
            </View>
        </Marker>
    );
}