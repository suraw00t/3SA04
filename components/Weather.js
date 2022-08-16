import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import { useState } from 'react';
import Forecast from './Forecast';
export default function Weather(props) {
    const [forecastInfo, setForecastInfo] = useState({
        main: 'ทดสอบ 1 2 3 4 5 6 7 8',
        description: 'แค่ทดสอบเฉยๆ อิอิ',
        temp: 999
    })
    return (
        <View>
            <ImageBackground source={require('../bg.png')} style={styles.backdrop}>
                <Text>Zip Code</Text>
                <Text>{props.zipCode}</Text>
                <Forecast {...forecastInfo} />
            </ImageBackground>
        </View>
    );
}
const styles = StyleSheet.create({
    backdrop: {
        alignItems: 'center',
        width: '100%',
        height: '100%',
    },
});
