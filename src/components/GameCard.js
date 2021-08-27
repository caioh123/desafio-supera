import React, {useState, useEffect} from 'react'
import {ScrollView, Text, StyleSheet, View, FlatList, Image, TouchableOpacity} from "react-native"
import { FontAwesome } from '@expo/vector-icons';


export const GameCard = ({item}) => {

    const [handleToCart, setHandleToCart] = useState([])

    const onHandleToCart = () => {
    
        setHandleToCart(item)

        
    }

    useEffect(() => {
        onHandleToCart()
        console.log(handleToCart.length)

    }, [handleToCart])


    



    return (
    <>
        <View style={styles.container}>
        <View>

            <Image alignSelf={"center"} source={item.image}/>
                <Text style={styles.gameName}>{item.name}</Text> 
                <Text style={styles.gamePrice}>R$ {item.price}</Text>
                <TouchableOpacity onPress={onHandleToCart}  style={styles.btn}>
                    <View style={{flexDirection: "row"}}>
                    <FontAwesome onpr style={{paddingLeft: 10}} name="cart-plus" size={24} color="white" />
                    <Text style={styles.textAmmount}>0</Text>
                    </View>
                    <Text style={styles.textBtn}>ADICIONAR AO CARRINHO</Text>
                </TouchableOpacity>
            </View>
        </View>
        </>
    )
}

const styles = StyleSheet.create({

    container: {
        flexDirection: "column",
        borderRadius: 15,
        justifyContent: "center",
        height: 400,
        backgroundColor: "white",
        marginTop: 20,
        width: 300,
        padding: 20,
        marginBottom: 30,

    },
    cardContainer: {
        flexDirection: "row",
        width: "100%",
        alignItems: "center",
        justifyContent: "space-between",
    },
    btn: {
        backgroundColor: "rgb(173,58,16)",
        color: "#fff",
        borderRadius: 10,
        marginTop: 20,
        alignItems: "center",
        height: 50,
        flexDirection: "row",
        justifyContent: "space-between"
    },
    textBtn: {
        color: "#fff",
        fontWeight: "bold",
        alignSelf: "center",
        paddingRight: 10,
    },
    textAmmount: {
        color: "#fff",
        paddingLeft: 10,
        paddingTop: 2,
        fontSize: 18,

    },
    gameName: {
        color: "black",
        fontSize: 21,
        marginTop: 10

    },
    gamePrice: {
        fontWeight: 'bold',
        color: "black",
        fontSize: 21,
        marginTop: 10

    }

})