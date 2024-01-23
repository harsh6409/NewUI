import React, { memo } from 'react';
import { View, Text, SafeAreaView, StyleSheet, Dimensions, TouchableOpacity, TouchableNativeFeedback } from 'react-native';

function Item2(color) {
    console.log("render bar", color.id)
    return (
        <View style={styles.listStyle2}>
            <View style={[styles.listStyle3, { height: color.value, backgroundColor: color.color }]}></View>
        </View>
    );
}

const Bottombar2 = memo((item) => {
    console.log("render Days", item)
    return (<TouchableOpacity style={[styles.buttonView, { backgroundColor: item.disp == true ? "#dadef7" : "white" }]}>
        <Text style={[styles.textStyle4, { color: item.disp == true ? "#5c70e6" : "black" }]}>{item.title}</Text>
    </TouchableOpacity>);
});

const Currency = memo((title) => {
    console.log("render Currency", title)
    return (<TouchableNativeFeedback onPress={() => title.onclick(title.index)}>
        <View style={styles.listStyle}>
            <Text style={styles.textStyle5}>{title.title}</Text>
            <Text style={styles.textStyle5}>$ {title.price}</Text>
            <Text style={[styles.textStyle5, { color: 'red' }]}> - {title.changeRate}%</Text>
            <Text style={styles.textStyle5}>$ {title.cap}</Text>
        </View>
    </TouchableNativeFeedback >
    )
});

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
        buttonView: {
            height: 20,
            width: 40,
            backgroundColor: 'white',
            borderRadius: 10,
            alignItems: 'center',
            justifyContent: 'center',
        },
        textStyle4: {
            fontSize: 11,
            fontWeight: '700',
        },
        textStyle5: {
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

export default memo(Item2);
export { Bottombar2, Currency };