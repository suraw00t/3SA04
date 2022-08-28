import {
    StatusBar
} from 'expo-status-bar';
import React from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';
import Constants from 'expo-constants';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Weather from './components/Weather';
import ZipCodeScreen from './screen/ZipCodeScreen';

const Stack = createStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={ZipCodeScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );

}
const styles = StyleSheet.create({
    container: {
        paddingTop: Constants.statusBarHeight,
    },
});
