import React, { memo, useCallback, useContext, useState } from 'react';
import { View, Text, SafeAreaView, StyleSheet, Dimensions, FlatList, TouchableNativeFeedback } from 'react-native';
import DATA from './ListData';
import { TouchableOpacity } from 'react-native-gesture-handler';
import AppDataContext from '../Components/Context';
import { Currency } from './Items';


export default function MyList(props) {
    const [myData, setData] = useState(DATA);
    const [myValue, setNewValue] = useState(0);

    const [_, setPrice] = useContext(AppDataContext);

    console.log(props.searchkey);


    const onclick = useCallback((item) => {
        setPrice(DATA[item].price)
        var value1 = Math.round(Math.random() * 100000);
        myData[item].cap = value1;
        setNewValue(value1);
    }, [myData]);

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
                data={myData.filter((item) => { return item.title.toLowerCase().includes(props.searchkey.toLowerCase()) })}
                ItemSeparatorComponent={ItemSeprator}
                ListHeaderComponent={ListHeader}
                renderItem={(item) => <Currency index={item.index} title={item.item.title} price={item.item.price} cap={item.item.cap} changeRate={item.item.changeRate} onclick={onclick} />}
                keyExtractor={item => item.id}
                extraData={myData}
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