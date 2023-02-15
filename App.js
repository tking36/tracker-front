import React, {useContext} from "react";
import { Context as AuthContext } from './src/context/AuthContext';


import SigninScreen from "./src/screens/SigninScreen";
import SignupScreen from "./src/screens/SignupScreen";
import TrackListScreen from "./src/screens/TrackListScreen";
import TrackDetailScreen from "./src/screens/TrackDetailScreen";
import AccountScreen from "./src/screens/AccountScreen";
import TrackCreateScreen from "./src/screens/TrackCreateScreen";
import ResolveAuthScreen from "./src/screens/ResolveAuthScreen";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";

import { Provider as AuthProvider } from "./src/context/AuthContext";
import { setNavigator } from "./src/navigationRef";
 
const Stack = createNativeStackNavigator();
const TrackStack = createNativeStackNavigator();
const Bottom = createBottomTabNavigator();



 
const LoginFlow = () => {
  return (
    <Stack.Navigator initialRouteName="tryLocalSignin">
      <Stack.Screen component={ResolveAuthScreen} name="ResolveAuthScreen" options={{ headerShown: false }}></Stack.Screen>
      <Stack.Screen component={SigninScreen} name="SigninScreen" options={{ headerShown: false }}></Stack.Screen>
      <Stack.Screen component={SignupScreen} name="SignupScreen" options={{ headerShown: false }}></Stack.Screen>
    </Stack.Navigator>
  );
};
 
const TrackListFlow = () => {
  return (
    <TrackStack.Navigator>
      <TrackStack.Screen component={TrackListScreen} options={{ headerShown: false }} name="TrackListScreen"></TrackStack.Screen>
      <TrackStack.Screen component={TrackDetailScreen} options={{ headerShown: false }} name="TrackDetailScreen"></TrackStack.Screen>
    </TrackStack.Navigator>
  );
};
 
const MainFlow = () => {
  return (
    <Bottom.Navigator>
      <Bottom.Screen component={TrackListFlow} name="TrackListFlow" options={{ headerShown: false }}></Bottom.Screen>
      <Bottom.Screen component={AccountScreen} options={{ headerShown: false }} name="AccountScreen"></Bottom.Screen>
      <Bottom.Screen component={TrackCreateScreen} options={{ headerShown: false }} name="TrackCreateScreen"></Bottom.Screen>
    </Bottom.Navigator>
  );
};

const OverAll = () => {
  return (
    <AuthContext.Consumer>
      {context => (
        <Stack.Navigator initialRouteName="SigninScreen">
          {context.state.token ? (
            <Stack.Screen component={MainFlow} name="MainFlow" options={{ headerShown: false }} />
          ) : (
            <Stack.Screen component={LoginFlow} name="LoginFlow" options={{ headerShown: false }} />
          )}
        </Stack.Navigator>
      )}
    </AuthContext.Consumer>
  );
};
 
export default function App() {
  return (
    <NavigationContainer ref={navigator => setNavigator(navigator)}>
      <AuthProvider>
      {OverAll()}
      </AuthProvider>
    </NavigationContainer>
  );
}