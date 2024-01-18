import React, { useState, useEffect } from 'react';
import { View, Text, SafeAreaView, StyleSheet, Dimensions, searchBar, TextInput } from 'react-native';
import CustomButton from '../Components/MyButton';
import MyList from './ListView';


export default function MarketScreen() {

    const [search, setsearch] = useState(false);
    const [text, onChangeText] = useState('');

    const useMybounce = (value, milliSeconds) => {
        const [textValue, setbouncedValue] = useState(value);

        useEffect(() => {
            const handler = setTimeout(() => {
                console.log("Debounced value")
                setbouncedValue(value);
            }, milliSeconds);

            return () => {
                clearTimeout(handler);
            };
        }, [value, milliSeconds]);

        return textValue;
    };

    const onclick = () => {
        setsearch(!search);
    }

    return (
        <View style={styles.container}>
            <View style={styles.searchContainer}>
                <View style={styles.textContainer}>
                    <Text style={styles.headerText}>Markets</Text>
                    <Text>Manage your active crypto market</Text>
                </View>
                <View style={styles.subContainer}>
                    <CustomButton imageName={require('../Icons/search.png')} onclick={onclick}></CustomButton>
                    <CustomButton imageName={require('../Icons/dots.png')}></CustomButton>
                </View>
            </View>

            {search &&
                <View style={[styles.searchContainer, { backgroundColor: 'white', position: 'absolute', top: 0, left: 0, right: 0, flexDirection: 'row', justifyContent: 'flex-start' }]}>
                    <View style={styles.searchBar}>
                        <TextInput
                            style={styles.input}
                            onChangeText={onChangeText}
                            value={text}
                        />
                    </View>
                    <CustomButton imageName={require('../Icons/search.png')} onclick={onclick}></CustomButton>
                </View>
            }
            <MyList searchkey={useMybounce(text, 500)} />
        </View >
    );
}

const styles = StyleSheet.create(
    {
        input: {
            height: 40,
            margin: 12,
            padding: 10,
        },
        searchBar: {
            backgroundColor: "#f0eeeb",
            borderRadius: 20,
            width: '75%',
            borderColor: 'grey',
            margin: 15,
            justifyContent: 'center',
            height: 40,
            borderWidth: 0.5,
        },
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