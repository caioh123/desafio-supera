import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import { Ionicons, EvilIcons, AntDesign } from '@expo/vector-icons';

export const CartGameCard = ({data}) => {
    return (
        <View style={styles.cardMain}>
        <Image style={styles.gameImg} source={data[4].image} />
        <View style={styles.gameContainer} alignItems={"center"}>
            <Text style={styles.gameName}>{data[0].name}</Text>
            <Text style={styles.gamePrice}>R$ {data[0].price}</Text>
        </View>
        <View style={styles.cardQty}>
            <AntDesign name="minuscircleo" size={20} color="rgb(173,58,16)" />
            <Text style={{fontSize: 20, paddingLeft: 5}}>1</Text>
            <EvilIcons name="plus" size={30} color="rgb(173,58,16)" />
        </View>
    </View>
    )
}


const styles = StyleSheet.create({
    cardMain: {
        flexDirection: "row",
        alignItems: "center",
        paddingTop: 20,
        justifyContent: "space-between",
        height: 150,
        borderBottomColor: "rgb(80,80,80)",
        paddingBottom: 40,
        borderBottomWidth: 2,

    },
    gameImg: {
        width: 60,
        height: 100,
    },
    cardQty: {
        flexDirection: 'row',
        width: 70,
        alignItems: "center",
        justifyContent: "space-between",
        paddingLeft: 5,
    },
    gameName: {
        color: "black",
        fontSize: 16,

    },
    gamePrice: {
        fontWeight: 'bold',
        color: "black",
        fontSize: 16,


    },
})