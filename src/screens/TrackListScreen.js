import React, {useContext} from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import {ListItem} from '@rneui/themed';
import { useFocusEffect } from '@react-navigation/native';
import {Context as TrackContext} from '../context/TrackContext';

const TrackListScreen = ({navigation}) => {

    const { state, fetchTracks} = useContext(TrackContext);

    useFocusEffect(
        React.useCallback(() => {
            fetchTracks();
        }, [])
      );

    

    return (
        <View>
            <Text style={styles.tracks}>Tracks</Text>
            <FlatList
                data={state}
                keyExtractor={(item) => item._id}
                renderItem={({ item }) => {
        return (
            <TouchableOpacity onPress={() => navigation.navigate('TrackDetailScreen', {_id: item._id})} >
                <ListItem>
                <ListItem.Content>
                <ListItem.Title>{item.name}</ListItem.Title>
                </ListItem.Content>
                <ListItem.Chevron />
                </ListItem>
            </TouchableOpacity>
        );
        }}
        />
        </View>
    );
    }

const styles = StyleSheet.create({
    tracks: {
        paddingTop: 55,
        paddingBottom: 20,
        textAlign: 'center',
        fontSize: 30,
        fontWeight: 'bold',
    },
});

export default TrackListScreen;


// onPress={() => navigation.navigate('TrackDetailScreen')}