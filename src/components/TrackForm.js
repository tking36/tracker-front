import React, {useContext} from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import {Button} from '@rneui/themed';
import Spacer from './spacer';
import {Context as LocationContext} from '../context/LocationContext';
import useSaveTrack from '../hooks/useSaveTrack';

const TrackForm = ({navigation}) => {

    const {
    state: {name, recording, locations},
    startRecording,
    stopRecording,
    changeName} 
    = useContext(LocationContext);
       

    const [saveTrack] = useSaveTrack();

    return (
        <View >
            <Spacer>
            <TextInput style={styles.input} value={name} onChangeText={changeName} label="Enter Name" />
            {recording ? <Button style={styles.stop} title="Stop" onPress={stopRecording} /> : <Button title="Start Recording" onPress={startRecording} />}
            </Spacer>
            <Spacer>
            {!recording && locations.length ? <Button style={styles.save} title="Save Recording" onPress={async () => {await saveTrack(); navigation.navigate('TrackListScreen');}} 
/> : null}
            </Spacer>
        </View>
    );
}



const styles = StyleSheet.create({
    stop: {
        backgroundColor: 'red',
    },
    save: {
        backgroundColor: 'green',
    },
    input: {
        fontSize: 18,
        borderWidth: 1,
        borderColor: 'black',
        marginBottom: 15,
        padding: 5,
        margin: 5,
    },
});

export default TrackForm;