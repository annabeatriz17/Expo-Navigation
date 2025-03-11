import React from 'react';
import { View, Text, } from 'react-native';
import { ImageBackground } from 'react-native-web';

export default function Drawer2() {
    return (
        <View style={styles.container}></View>
    );
}

const styles = {
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffed86',
    },
    title: {
        fontSize: 30,
    },
};