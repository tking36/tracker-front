import React, {useContext} from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import {Button} from '@rneui/themed';
import Spacer from './spacer';
import {Context as LocationContext} from '../context/LocationContext';

const TrackForm = () => {

    const {state: {name, recording, locations},
    startRecording,
    stopRecording,
    changeName} 
       = useContext(LocationContext);

    console.log(locations.length);

    return (
        <View>
            <Spacer>
            <TextInput value={name} onChange={changeName} label="Enter Name" />
            {recording ? <Button style={styles.stop} title="Stop" onPress={stopRecording} /> : <Button title="Start Recording" onPress={startRecording} />}
            </Spacer>
        </View>
    );
}

const styles = StyleSheet.create({
    stop: {
        backgroundColor: 'red',
    },
});

export default TrackForm;