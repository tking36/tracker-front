import React, { useContext, useEffect } from 'react';
import { Context as AuthContext } from '../context/AuthContext';
import SigninScreen from './SigninScreen';

const ResolveAuthScreen = ({ navigation }) => {
  const { state, tryLocalSignin } = useContext(AuthContext);

  useEffect(() => {
    tryLocalSignin();
  }, []);

  // Check if the user is signed in
  if (state.token) {
    return null;
  }

  // If the user is not signed in, navigate to the sign in screen
  return  <SigninScreen />;
};

export default ResolveAuthScreen;