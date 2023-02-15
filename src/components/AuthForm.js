import React, {useState} from 'react';
import { StyleSheet, } from 'react-native';
import {Text, Button, Input} from '@rneui/themed';
import Spacer from './spacer';



const AuthForm = ({headerText, errorMessage, onSubmit, submitButtonText}) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <>
            <Spacer>
                <Text h1>{headerText}</Text>
            </Spacer>
            <Input placeholder="Email" value={email} onChangeText={setEmail} autoCapitalize='none' autoCorrect="none" />
            <Spacer />
            <Input secureTextEntry placeholder="Password" value={password} onChangeText={setPassword} autoCapitalize='none' autoCorrect="none" />
            <Spacer>
                {errorMessage ? <Text style={styles.errorMessage}>{errorMessage}</Text> : null}
                <Button   title={submitButtonText} onPress={() => onSubmit({email, password})} />
            </Spacer>
        </>
    );
}

const styles = StyleSheet.create({
    errorMessage: {
        fontSize: 16,
        color: 'red',
        marginLeft: 10,
        marginBottom: 10,
    },
});

export default AuthForm;