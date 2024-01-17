import React from 'react';
import { View, Text, SafeAreaView, StyleSheet, Dimensions, FlatList, TouchableNativeFeedback } from 'react-native';
import DATA from './ListData';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Item = ({ title }) => (
    <View style={styles.listStyle2}>
        <View style={[styles.listStyle3, { height: title.item.value, backgroundColor: title.item.color }]}></View>
    </View>
);

export default function MyBarList() {
    const myData = DATA;
    return (
        <View style={styles.container}>
            <FlatList
                horizontal={true}
                data={myData}
                showsHorizontalScrollIndicator={false}
                renderItem={(item) => <Item title={item} />}
                keyExtractor={item => item.id}
            />
        </View>
    );
}

const styles = StyleSheet.create(
    {
        listStyle2: {
            // backgroundColor: 'blue',
            width: 30,
            justifyContent: 'flex-end',
        },
        container: {
            // backgroundColor: 'green',
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