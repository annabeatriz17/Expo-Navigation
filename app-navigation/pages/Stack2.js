import React from 'react';
import { View, Text } from 'react-native';
import { Button } from 'react-native-web';

export default function Stack2() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>oiiee</Text>
        </View>
    );
}


const styles = {
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFAEBC',
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center',
        margin: 20,
    },
};

