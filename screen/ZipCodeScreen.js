import React from 'react';
import {
    FlatList,
    View,
    StatusBar,
    Text,
    TouchableHighlight,
    StyleSheet,
    ImageBackground,
    Image,
} from 'react-native';
import { useNavigation } from "@react-navigation/native";

const availableZipItems = [
    { place: 'หาดใหญ่', code: '90110' },
    { place: 'สงขลา', code: '90000' },
    { place: 'สตูล', code: '91000' },
    { place: 'ตรัง', code: '92000' },
    { place: 'เชียงใหม่', code: '50000' },
    { place: 'ขอนแก่น', code: '40000' },
    { place: 'ชลบุรี', code: '20000' },
    { place: 'นนทบุรี', code: '11000' },
    { place: 'สระบุรี', code: '18000' },
    { place: 'ระยอง', code: '21000' },
    { place: 'ตราด', code: '25000' },
    { place: 'อุดรธานี', code: '41000' },
    { place: 'เลย', code: '42000' },
    { place: 'หนองคาย', code: '43000' },
]
const ZipItem = ({place, code, navigation}) => (
    <TouchableHighlight onPress={() => {
        navigation.navigate("Weather", {zipCode: code})
    }}>
      <>
        <View style= {styles.zipItem}>
            <Text style= {styles.zipPlace}>{place}</Text>
            <Text style= {styles.zipCode}>{code}</Text>
        </View>
        <StatusBar style="auto"/>
      </>
    </TouchableHighlight>
)
const _keyExtractor = item => item.code
export default function ZipCodeScreen(){
    const navigation = useNavigation()
    return (
        <View>
            <Image style={{height: '100%', width: '100%', position:'absolute'}} source={require('../4ss.jpg')} /> 
            <FlatList
                data={availableZipItems}
                keyExtractor={_keyExtractor}
                renderItem={({item}) => <ZipItem {...item} navigation={navigation}/>}
                />
        </View>
    );

}

const styles = StyleSheet.create(
    {
      zipItem: {
        flex: 2,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        backgroundColor: 'rgba(0, 0, 0, 0.3)',
        paddingTop: 9,
        borderRadius: 5
      },
      zipPlace: {
        flex: 2,
        fontSize: 25,
        fontWeight: "bold",
        color: 'white',
        textAlign: 'center',
        textAlignVertical: 'center',
      },
      zipCode: {
        flex: 2,
        textAlign: 'center',
        fontSize: 30,
        fontWeight: "bold",
        color: 'white',
        textAlignVertical: 'center',
        color: 'lightgreen'
      },
      backdrop: {
        alignItems: 'center',
        width: '100%',
        height: '100%'
      },
    }
  ) 
