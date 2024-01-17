import React from 'react';
import { View, Text, SafeAreaView, StyleSheet } from 'react-native';
import CustomButton from '../Components/MyButton';
import StockScreen from './Stocks';

export default function RecentScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.textStyle}>Under Development</Text>
        </View>
    );
}

const styles = StyleSheet.create(
    {
        container: {
            backgroundColor: "#ededed",
            flex: 1,
            justifyContent: 'center',
            flexDirection: 'row',
            alignItems: 'center',
        },
        textStyle: {
            fontSize: 18,
            fontWeight: 'bold',
            height: 50,
        },
    }
);