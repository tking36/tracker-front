import React, {useContext, useEffect} from 'react';
import { View, StyleSheet } from 'react-native';
import AuthForm from '../components/AuthForm';
import NavLink from '../components/NavLink';
import {Context as AuthContext} from '../context/AuthContext';
import { useFocusEffect } from '@react-navigation/native';


const SigninScreen = () => {

    const {state, signin, clearErrorMessage, tryLocalSignin} = useContext(AuthContext);

    useFocusEffect(
        React.useCallback(() => {
            return () => {
                clearErrorMessage();
            };
        }, [])
    );

    useEffect (() => {
        tryLocalSignin();
    }, []);

    return (
      <View style={styles.container}>
        
        <AuthForm
            headerText="Sign In"
            errorMessage={state.errorMessage}
            submitButtonText="Sign In"
            onSubmit={signin}
        />

        <NavLink
            routeName="SignupScreen"
            text="Don't have an account? Sign up instead"
        />
      </View>
    );

  };

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        marginBottom: 200,
        alignItems: 'center',
    }
});

export default SigninScreen;