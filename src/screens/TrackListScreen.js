import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const TrackListScreen = ({navigation}) => {
    return (
        <View>
        <Text style={{ fontSize: 48, marginTop: 100 }}>TrackListScreen</Text>
        <Button title="Go to TrackDetailScreen" onPress={() => navigation.navigate('TrackDetailScreen')}></Button>
        </View>
    );
    }

const styles = StyleSheet.create({});

export default TrackListScreen;