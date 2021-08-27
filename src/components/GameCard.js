import React, {useState, useEffect} from 'react'
import {ScrollView, Text, StyleSheet, View, FlatList, Image, TouchableOpacity} from "react-native"
import { FontAwesome } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';


export const GameCard = ({item}) => {

    const [cartItems, setCartItems] = useState([])

    console.log([cartItems].map(a => a.id))

    useEffect(() => {
         const setLocal = async () => {
             await AsyncStorage.setItem("game", JSON.stringify(cartItems))

        }

        setLocal()
      }, [cartItems]);

      useEffect(() => {
        const getData = async () => {
            try {
                await setCartItems(JSON.parse(AsyncStorage.getItem("game")) || []);
            } catch(e) {
            // error reading value
            }
        }
        
         getData()
      }, [])





    const onAdd = () => {
        const exist = cartItems.find(x => x.id === product.id)



        // if(exist) {
        //     setCartItems(cartItems.map(x => x.id === product.id ? {...exist, qty: exist.qty + 1} : x))
        // } else {
        //     setCartItems([...cartItems, {...product, qty: 1}])
        // }
    }
    

    return (
    <>
        <View style={styles.container}>
        <View>

            <Image alignSelf={"center"} source={item.image}/>
                <Text style={styles.gameName}>{item.name}</Text> 
                <Text style={styles.gamePrice}>R$ {item.price}</Text>
                <TouchableOpacity onPress={onAdd} style={styles.btn}>
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