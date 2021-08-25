import React from 'react'
import {ScrollView, Text, StyleSheet, View} from "react-native"

export const GameCard = ({data}) => {

    return (
        <ScrollView style={styles.container}>
            {data.map((res, i) => 
            <View style={styles.cardContainer}>
                <Text style={{color: "black"}}>asdsd</Text>
            </View>
            )}
            
        </ScrollView>
    )
}

const styles = StyleSheet.create({

    container: {
        backgroundColor: "#FFF",
        padding: 20,
        borderRadius: 10,
        flexDirection: 'column',
        width: 200,


    },
    cardContainer: {
        paddingBottom: 20,
        height: 150,
        marginTop: 20,
        width: "100%"
    }

})