import React from 'react';
import { View, Text, SafeAreaView, StyleSheet, Dimensions } from 'react-native';
import CustomButton from '../Components/MyButton';
import MyList from './ListView';


export default function MarketScreen() {
    return (
        <View style={styles.container}>
            <View style={styles.searchContainer}>
                <View style={styles.textContainer}>
                    <Text style={styles.headerText}>Markets</Text>
                    <Text>Manage your active crypto market</Text>
                </View>
                <View style={styles.subContainer}>
                    <CustomButton imageName={require('../Icons/search.png')}></CustomButton>
                    <CustomButton imageName={require('../Icons/dots.png')}></CustomButton>
                </View>
            </View>
            <MyList />
        </View>
    );
}

const styles = StyleSheet.create(
    {
        container: {
            backgroundColor: "white",
            flex: 1,
        },
        searchContainer: {
            height: 60,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
        },
        subContainer: {
            height: 50,
            flexDirection: 'row',
            justifyContent: 'center'
        },
        textContainer: {
            height: 50,
            justifyContent: 'center',
            marginLeft: 20,
        },
        headerText: {
            fontWeight: 'bold',
            fontSize: 18,
        },
    }
);