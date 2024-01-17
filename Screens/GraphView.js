import React, { useContext } from 'react';
import { View, Text, SafeAreaView, StyleSheet, Dimensions, TouchableOpacity, Image } from 'react-native';
import DATA, { DaysData } from './ListData';
import { ScrollView } from 'react-native-gesture-handler';
import MyBarList from './barList';
import AppDataContext from '../Components/Context';



const Bottombar = () => (
    DaysData.map((item) => {
        return <TouchableOpacity style={[styles.buttonView, { backgroundColor: item.disp == true ? "#dadef7" : "white" }]}>
            <Text style={[styles.textStyle2, { color: item.disp == true ? "#5c70e6" : "black" }]}>{item.title}</Text>
        </TouchableOpacity>
    })
);

export default function MyGraph() {

    const [price, setPrice] = useContext(AppDataContext);

    return (
        <View style={styles.container}>
            <View style={styles.firstbarContainer}>
                <View style={{ flexDirection: 'row', height: 30, justifyContent: 'space-between', marginRight: 20 }}>
                    <Text style={styles.text1}>Current Balance (USD)</Text>
                    <View style={{ flexDirection: 'row', height: 30, justifyContent: 'space-between', width: 60 }}>
                        <Text style={[styles.text1, { color: 'grey' }]}>USD</Text>
                        <Image style={styles.imageView} source={require('../Icons/down.png')}></Image>
                    </View>
                </View>
                <Text style={styles.text2}>$ {price}</Text>
                <Text style={styles.text3}>Last Updated yesterday</Text>
            </View>
            <View style={styles.subbarContainer}>

            </View>
            <View style={styles.barContainer}>
                <MyBarList />
            </View>
            <View style={styles.bottomContainer}>
                <Bottombar />
            </View>
        </View>
    );
}

const styles = StyleSheet.create(
    {
        container: {
            backgroundColor: "white",
            flex: 1,
            borderRadius: 10,
        },
        bottomContainer: {
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            backgroundColor: "white",
            height: 40,
            borderBottomEndRadius: 10,
            borderBottomStartRadius: 10,
            justifyContent: 'space-evenly',
            flexDirection: 'row',
            alignItems: 'center',
        },
        textStyle2: {
            fontSize: 11,
            fontWeight: '700',
        },
        buttonView: {
            height: 20,
            width: 40,
            backgroundColor: 'white',
            borderRadius: 10,
            alignItems: 'center',
            justifyContent: 'center',
        },
        barContainer: {
            position: 'absolute',
            bottom: 40,
            left: 0,
            right: 0,
            height: 170,
        },
        subbarContainer: {
            position: 'absolute',
            bottom: 210,
            left: 0,
            right: 0,
            height: 30,
            // backgroundColor: 'red',
        },
        firstbarContainer: {
            position: 'absolute',
            top: 10,
            left: 0,
            right: 0,
            height: 100,
            // backgroundColor: 'red',
            paddingLeft: 15
        },
        text1: {
            fontSize: 15,
            fontWeight: '500',
        },
        text2: {
            fontSize: 34,
            fontWeight: 'bold',
            width: '70%',
            justifyContent: 'center',
        },
        text3: {
            fontSize: 14,
            fontWeight: '500',
            color: 'grey',
        },
        imageView: {
            height: 20,
            width: 20,
            tintColor: 'grey'
        }
    }
);