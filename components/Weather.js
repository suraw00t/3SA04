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

    useEffect(() => {
        console.log(`fetching data with zipCode = ${props.zipCode}`)
        if (props.zipCode) {
            fetch(`http://api.openweathermap.org/data/2.5/weather?q=${props.zipCode},th&units=metric&APPID=c0226560c19c38f70ec85c15e0f2d76f`)
                .then((response) => response.json())
                .then((json) => {
                    setForecastInfo({
                        main: json.weather[0].main,
                        description: json.weather[0].description,
                        temp: json.main.temp
                    });
                })
                .catch((error) => {
                    console.warn(error);
                });
        }
    }, [props.zipCode])

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
            height:"30%", 
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
