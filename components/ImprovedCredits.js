import React from 'react'
import { StyleSheet, View, Text, Image } from 'react-native'

export default class ImprovedCredits extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            name: "Bill Wang"
        }
    }


    render() {
        return (
            <View style={styles.ImprovedAuthor}>
                <Text style={styles.textFormat}> By: {this.state.name} </Text>
                <Text style={styles.textFormat}>Date: {this.props.date}</Text>
                {/* <Image source = {require('../assets/splash.png')}/> */}
            </View>
        )
    }


}


const styles = StyleSheet.create({
    ImprovedAuthor: {
        flex: 0.5,
        backgroundColor: (229, 229, 229, 100),
        alignItems: 'center',
        justifyContent: 'center',
    },

    textFormat: {
        color: "red",
        backgroundColor: "#eee"
    },

});