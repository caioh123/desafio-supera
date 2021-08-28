import React, {useState, useEffect} from 'react'
import {ScrollView, Text, StyleSheet, View, FlatList, Image, TouchableOpacity} from "react-native"
import { FontAwesome } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useCart } from '../context/cartContext';


export const GameCard = ({item}) => {

    const {cart, setCart, onAdd} = useCart()

    // const onAdd = (product) => {
    //     const productInCart = cart.find(cartItem => cartItem.id === product.id)


    //     if(productInCart) {
    //         const game = cart.map((cartItem) => {
    //             if(cartItem.id === productInCart.id) {
    //                 console.log(productInCart)
    //                 productInCart.qty += 1
    //             } 
    //             return productInCart
    //         })

    //         setCart(game)
    //     } else {
    //         setCart([...cart, {...product, qty: 1}])
        
    //     }
    // }



    const productQty = (product) => {
        const productInCart = cart.find(cartItem => {
            return (
                cartItem.id === product.id
            )
        })

        if(productInCart) {
            return productInCart.qty
        } 
        return 0
    }
    

    return (
    <>
        <View style={styles.container}>
        <View>

            <Image onpr alignSelf={"center"} source={item.image}/>
                <Text style={styles.gameName}>{item.name}</Text> 
                <Text style={styles.gamePrice}>R$ {item.price}</Text>
                <TouchableOpacity onPress={() => onAdd(item)} style={styles.btn}>
                    <View style={{flexDirection: "row"}}>
                    <FontAwesome onpr style={{paddingLeft: 10}} name="cart-plus" size={24} color="white" />
                    <Text style={styles.textAmmount}>{productQty(item)}</Text>
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