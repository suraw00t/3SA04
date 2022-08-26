import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import { useState, useEffect } from 'react';
import Constants from 'expo-constants';
import Forecast from './Forecast';

export default function Weather(props) {
    const [forecastInfo, setForecastInfo] = useState({
        main: 'ทดสอบ 1 2 3 4 5 6 7 8',
        description: 'แค่ทดสอบเฉยๆ อิอิ',
        temp: 999
    })


    return (
            <ImageBackground source={require('../bg.png')} style={styles.backdrop}>
        <View style={styles.highlight}>
                <Text></Text>
                <Text style={styles.titleText}>Zip Code is {props.zipCode}</Text>
                <Forecast {...forecastInfo} />
        </View>
            </ImageBackground>
    );
}


const styles = StyleSheet.create(
    {
        backdrop: {
            alignItems: 'center',
            width: '100%',
            height: '100%'
        },
        highlight: {
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            width:"100%", 
            height:"45%", 
            paddingTop: Constants.statusBarHeight, 
            alignItems: 'center'
        },
        titleText: {
            fontSize: 20,
            fontWeight: "bold",
            color: 'white',
            textAlign: 'center'
        }
    }
)
