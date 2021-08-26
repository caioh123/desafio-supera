import React from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { Header } from '../components/Header'
import { Ionicons } from '@expo/vector-icons';

export const CartPage = () => {
    return (
        <View style={styles.container}>
            <Header />
            <View style={styles.cardContainer}>

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'rgb(25,25,32)',
      alignItems: 'center',
    },
    cardContainer: {
        flexDirection: "column",
        borderRadius: 15,
        justifyContent: "center",
        height: 400,
        backgroundColor: "white",
        marginTop: 20,
        width: 350,
        padding: 20,
        marginBottom: 30,
    }
})