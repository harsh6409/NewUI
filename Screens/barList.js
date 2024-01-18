import React from 'react';
import { View, Text, SafeAreaView, StyleSheet, Dimensions, FlatList, TouchableNativeFeedback } from 'react-native';
import DATA from './ListData';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Item2 from './Items'

export default function MyBarList() {
    console.log("render2");
    const myData = DATA;
    return (
        <View style={styles.container}>
            <FlatList
                horizontal={true}
                data={myData}
                showsHorizontalScrollIndicator={false}
                renderItem={(item) => <Item2 color={item.item.color} value={item.item.value} id={item.index} />}
                keyExtractor={item => item.id}
            />
        </View>
    );
}

const styles = StyleSheet.create(
    {
        listStyle2: {
            width: 30,
            justifyContent: 'flex-end',
        },
        container: {
            flex: 1,
        },
        listStyle3: {
            backgroundColor: 'yellow',
            width: 20,
            height: 10,
            borderTopLeftRadius: 10,
            borderTopRightRadius: 10,
            marginLeft: 10,
        },
    }
);