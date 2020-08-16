import React from 'react'
import { StyleSheet, View, Text } from 'react-native'

export default function Credit() {
    return (
        <View>
            <Text style={styles.author}> By: Bill Wang </Text>
        </View>
    )
}


const styles = StyleSheet.create({
    author: {
        flex: 0,
        backgroundColor: '#ffe',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
