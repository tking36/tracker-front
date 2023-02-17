import '../_mockLocation';
import React, {useContext} from 'react';
import { StyleSheet, View } from 'react-native';
import Map from '../components/Map';
import {Text} from '@rneui/themed';
import {SafeAreaProvider, useSafeAreaInsets,} from 'react-native-safe-area-context'
import {Context as LocationContext} from '../context/LocationContext';
import useLocation from '../hooks/useLocation';
import { useFocusEffect } from '@react-navigation/native';
import TrackForm from '../components/TrackForm';

const TrackCreateScreen = () => {

    const [isActive, setIsActive] = React.useState(false);

    useFocusEffect(
        React.useCallback(() => {
          setIsActive(true);
    
          return () => {
            setIsActive(false);
          };
        }, [])
      );


    const {state, addLocation} = useContext(LocationContext);
    const [err] = useLocation(isActive, (location) => {
        addLocation(location, state.recording);
    });
    const insets = useSafeAreaInsets();

    return (
        <View style={{paddingTop:insets.top}}>
        <Text h2 style={{ fontSize: 48, marginTop: 100 }}>TrackCreateScreen</Text>
        <Map />
        {err ? <Text>Please enable location services</Text> : null}
        <TrackForm />
        </View>
    );
    }

const styles = StyleSheet.create({
    
});

export default TrackCreateScreen;

