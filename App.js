import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

import Credits from './components/Credits'
import ImprovedCredits from './components/ImprovedCredits'

export default function App() {
  return (
    <View style={styles.container}> 
      < View>
        <Text style={styles.textFormat}>Hello world!</Text>
        <Button title="hello" />
        <StatusBar style="auto" />
      </View>
      <Credits/>
      <Credits/>
      <Credits/>
      <Credits/>

      <ImprovedCredits date = "Some Date"/>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffe',
    alignItems: 'center',
    justifyContent: 'center',
  },

  textFormat: {
    color: "black",
    backgroundColor: "red",
    fontSize: 20,
  },

});
