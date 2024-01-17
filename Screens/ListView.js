import React, { useCallback, useContext, useState } from 'react';
import { View, Text, SafeAreaView, StyleSheet, Dimensions, FlatList, TouchableNativeFeedback } from 'react-native';
import DATA from './ListData';
import { TouchableOpacity } from 'react-native-gesture-handler';
import AppDataContext from '../Components/Context';


export default function MyList() {
    const [myData, setData] = useState(DATA);

    const [_, setPrice] = useContext(AppDataContext);

    const Item = ({ title }) => (
        <TouchableNativeFeedback onPress={() => onclick(title.index)}>
            <View style={styles.listStyle}>
                <Text style={styles.textStyle2}>{title.item.title}</Text>
                <Text style={styles.textStyle2}>$ {title.item.price}</Text>
                <Text style={[styles.textStyle2, { color: 'red' }]}> - {title.item.changeRate}%</Text>
                <Text style={styles.textStyle2}>$ {title.item.cap}</Text>
            </View>
        </TouchableNativeFeedback >
    );

    function updateValues(item) {
        setPrice(DATA[item].price)
        DATA[item].cap = Math.round(Math.random() * 100000);
        setData(DATA);
    }

    const onclick = (item) => (
        updateValues(item)
    );

    const ItemSeprator = () => (
        <View style={styles.itemSap}></View>
    );

    const ListHeader = () => {
        return (
            <View style={styles.headerStyle}>
                <Text style={styles.textStyle}>Market</Text>
                <Text style={styles.textStyle}>Price</Text>
                <Text style={styles.textStyle}>Change</Text>
                <Text style={styles.textStyle}>Market Cap</Text>
            </View>
        );
    };

    return (
        <View style={styles.container}>
            <FlatList
                data={myData}
                ItemSeparatorComponent={ItemSeprator}
                ListHeaderComponent={ListHeader}
                renderItem={(item) => <Item title={item} />}
                keyExtractor={item => item.id}
            />
        </View>
    );
}

const styles = StyleSheet.create(
    {
        container: {
            backgroundColor: 'white',
            flex: 1,
        },
        item: {
            backgroundColor: 'white',
            height: 50,
            justifyContent: 'center',
        },
        itemSap: {
            backgroundColor: '#bab8b8',
            height: 1,
            marginLeft: 6,
            marginRight: 6,
        },
        headerStyle: {
            height: 20,
            justifyContent: 'space-evenly',
            flexDirection: 'row',
            alignItems: 'center',
            marginLeft: 20,
            marginRight: 10,
            marginTop: 20,
        },
        textStyle: {
            width: Dimensions.get('window').width / 4,
            fontSize: 13,
            fontWeight: '600',
        },
        textStyle2: {
            width: Dimensions.get('window').width / 4,
            fontSize: 12,
            fontWeight: '500',
        },
        listStyle: {
            height: 50,
            justifyContent: 'space-evenly',
            flexDirection: 'row',
            alignItems: 'center',
            marginLeft: 20,
            marginRight: 10,
        },
    }
);