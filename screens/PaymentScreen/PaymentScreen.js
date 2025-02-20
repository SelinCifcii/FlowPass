import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export const PaymentScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>PaymentScreen</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    color: '#fff'
  }
})