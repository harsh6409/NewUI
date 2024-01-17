import React from 'react';
import { View, Text, SafeAreaView, StyleSheet } from 'react-native';
import CustomButton from '../Components/MyButton';

export default function StockScreen() {
    return (
        <SafeAreaView style={styles.headerView}>
            <CustomButton imageName={require('../Icons/square.png')} backColor={styles.menuBT} imgColor={styles.menuImg}></CustomButton>
            <View style={styles.headerView}>
                <CustomButton imageName={require('../Icons/plus.png')} backColor={styles.plusBT} imgColor={styles.plusImg}></CustomButton>
                <CustomButton imageName={require('../Icons/belll.png')}></CustomButton>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create(
    {
        headerView: {
            backgroundColor: "white",
            flexDirection: 'row',
            justifyContent: 'space-between',
        },
        menuBT: {
            backgroundColor: "#5c70e6",
        },
        menuImg: {
            tintColor: "white",
        },
        plusBT: {
            backgroundColor: "#dadef7",
        },
        plusImg: {
            tintColor: "#5c70e6",
        }
    }
);