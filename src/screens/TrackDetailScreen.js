import React from 'react';
import { View, StyleSheet } from 'react-native';


const TrackDetailScreen = ({navigation}) => {
    return (
        <View>
        <Text>TrackDetailScreen</Text>
        <Button title="Go to TrackListScreen" onPress={() => navigation.navigate('TrackListScreen')}></Button>
        </View>
    );
    }

const styles = StyleSheet.create({});

export default TrackDetailScreen;