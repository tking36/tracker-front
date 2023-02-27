import '../_mockLocation';
import React, {useContext, useCallback} from 'react';
import { StyleSheet, View } from 'react-native';
import Map from '../components/Map';
import {Text} from '@rneui/themed';
import {SafeAreaProvider, useSafeAreaInsets,} from 'react-native-safe-area-context'
import {Context as LocationContext} from '../context/LocationContext';
import useLocation from '../hooks/useLocation';
import { useFocusEffect } from '@react-navigation/native';
import TrackForm from '../components/TrackForm';


const TrackCreateScreen = ({navigation}) => {

    const [isActive, setIsActive] = React.useState(false);

    useFocusEffect(
        React.useCallback(() => {
        setIsActive(true);
    
        return () => {
            setIsActive(false);
        };
        }, [])
      );


    const {state : {recording}, addLocation} = useContext(LocationContext);
    const callback = useCallback((location) => {
        addLocation(location, recording);
    }, [recording]);
    const [err] = useLocation(isActive || recording, (location) => {
        addLocation(location, recording);
    });
    const insets = useSafeAreaInsets();

    return (
        <View style={{paddingTop:insets.top}}>
        <Text h2 style={styles.create}>Create Track</Text>
        <Map />
        {err ? <Text>Please enable location services</Text> : null}
        <TrackForm navigation={navigation} />
        </View>
    );
    }

const styles = StyleSheet.create({
    create: {
        paddingTop: 20,
        paddingBottom: 20,
        textAlign: 'center',
        fontSize: 30,
        fontWeight: 'bold',
    },
});

export default TrackCreateScreen;

