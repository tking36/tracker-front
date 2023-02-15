import React, {useContext} from 'react';
import { View, StyleSheet } from 'react-native';
import {Context as AuthContext} from '../context/AuthContext';
import AuthForm from '../components/AuthForm';
import NavLink from '../components/NavLink';
import { useFocusEffect } from '@react-navigation/native';

const SignupScreen = () => {

    const {state, signup, clearErrorMessage} = useContext(AuthContext);
    
    

    useFocusEffect(
        React.useCallback(() => {
            return () => {
                clearErrorMessage();
            };
        }, [])
    );

    return (
      <View style={styles.container}>
        <AuthForm
            headerText="Sign Up"
            errorMessage={state.errorMessage}
            submitButtonText="Sign Up"
            onSubmit={signup}
        />
        <NavLink
            routeName="SigninScreen"
            text="Already have an account? Sign in instead"
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
    }, 
});

export default SignupScreen;