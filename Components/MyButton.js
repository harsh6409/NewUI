import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';

export default function CustomButton(props) {
    return (
        <TouchableOpacity style={[styles.container, props.backColor]} >
            <View>
                <Image source={props.imageName} style={[styles.imageView, props.imgColor]}></Image>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create(
    {
        container: {
            backgroundColor: "white",
            height: 40,
            width: 40,
            margin: 5,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 20,
            borderWidth: 0.2,
            borderColor: "grey",
        },
        imageView: {
            height: 20,
            width: 20,
        }
    }
);