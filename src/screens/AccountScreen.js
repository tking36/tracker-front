import React, {useContext} from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {Button} from '@rneui/themed';
import { SafeAreaView } from 'react-native-safe-area-context';
import {Context as AuthContext} from '../context/AuthContext';
import Spacer from '../components/spacer';


const AccountScreen = ({navigation}) => {

    const {signout} = useContext(AuthContext);

    return (
        <SafeAreaView forceInset={{top: 'always'}}>
        <Spacer />
        <Button style={styles.logout} title="Sign Out" onPress={() => {signout()}}></Button>
        </SafeAreaView>
    );
    }

const styles = StyleSheet.create({
    logout: {
        marginTop: 300,
        paddingTop: 20,
        paddingBottom: 20,
        textAlign: 'center',
        fontSize: 30,
        fontWeight: 'bold',
    },
});

export default AccountScreen;