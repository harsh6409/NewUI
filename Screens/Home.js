import React, { createContext, useContext, useState } from 'react';
import { View, Text, SafeAreaView, StyleSheet, Dimensions } from 'react-native';
import CustomButton from '../Components/MyButton';
import StockScreen from './Stocks';
import MyTabs from '../Navigators/bottonTab';
import MyGraph from './GraphView';
import AppDataContext from '../Components/Context';

export default function HomeScreen() {

  const [price, setPrice] = useState("0");

  return (
    <AppDataContext.Provider value={[price, setPrice]}>
      <View style={styles.container}>
        <StockScreen />
        <View style={styles.middleContainer}>
          <MyGraph />
        </View>
        <View style={styles.bottomContainer}>
          <MyTabs />
        </View>
      </View>
    </ AppDataContext.Provider>
  );
}

const styles = StyleSheet.create(
  {
    container: {
      backgroundColor: "#e1e8f7",
      flex: 1,
      justifyContent: 'space-evenly',
    },
    bottomContainer: {
      marginTop: 5,
      backgroundColor: "#e0dede",
      flex: 1,
    },
    middleContainer: {
      margin: 15,
      backgroundColor: "white",
      flex: 1,
      borderRadius: 10,
    },
  }
);