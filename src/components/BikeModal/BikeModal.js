import React from 'react';
import { View, Text } from 'react-native';
import Modal from 'react-native-modal';
import styles from './BikeModal.style';
import Button from '../Button/Button';

const BikeModal = ({ bike, onCloseRequest, onRent, onGiveAway }) => {
    return (
        <Modal
            isVisible={!!bike}
            swipeDirection="down"
            onBackdropPress={onCloseRequest}
            onBackButtonPress={onCloseRequest}
            onSwipeComplete={onCloseRequest}
            style={styles.modal} >
            {!!bike && (
                <View style={styles.container}>
                    <Text style={styles.name}>{bike.name}</Text>
                    {!bike.inUse && (
                        <>
                            <Text style={styles.rent}>Available to rent</Text>
                            <Button label="Rent" onPress={onRent} />
                        </>
                    )}
                    <Button label="Give Away" onPress={onGiveAway} />
                </View>
            )}
        </Modal>
    )
}

export default BikeModal
