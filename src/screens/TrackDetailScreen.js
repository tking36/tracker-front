import React, {useContext} from 'react';
import { View, StyleSheet, Text } from 'react-native';
import {Context as TrackContext} from '../context/TrackContext';
import MapView, {Polyline} from 'react-native-maps';
import {Button} from '@rneui/themed';


const TrackDetailScreen = ({navigation, route}) => {

    const {state} = useContext(TrackContext);
    const { _id } = route.params; 

    const track = state.find(t => t._id === _id);
    const initialCoords = track.locations[0].coords;

    return (
        <View style={styles.view} >
            <Text style={styles.name} >{track.name}</Text>
            <MapView
            style={styles.map}
            initialRegion={{
                ...initialCoords,
                latitudeDelta: 0.01,
                longitudeDelta: 0.01,
            }}
            >
                <Polyline coordinates={track.locations.map(loc => loc.coords)} />
            </MapView>
            <Button style={styles.back} title="Go to TrackListScreen" onPress={() => navigation.navigate('TrackListScreen')}></Button>
        </View>
    );
    }

const styles = StyleSheet.create({
    view: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    map: {
        height: 300,
        width: 300,
    },
    name: {
        fontSize: 48,
        marginBottom: 20,
    },
    back: {
        marginTop: 20,
    },

});

export default TrackDetailScreen;