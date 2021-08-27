import React from 'react'
import { Text, View, StyleSheet, Image, TextInput, TouchableOpacity, FlatList } from 'react-native'
import { Header } from '../components/Header'
import { Ionicons, EvilIcons, AntDesign } from '@expo/vector-icons';
import {data} from '../products'
import {useNavigation} from '@react-navigation/native'
import { CartGameCard } from '../components/CartCameCard';
import { useCart } from '../context/cartContext';


export const CartPage = () => {

    const {cart} = useCart()

    

    const navigation = useNavigation()


    return (
    <>
        <Header />
        <View style={styles.container}>
            <View style={styles.cardContainer}>
                <TouchableOpacity onPress={() => navigation.navigate("HomePage")} style={styles.cardHeader}>
                    <Ionicons name="arrow-back-circle-outline" size={40} color="black" />
                    <Text style={styles.cardBack}>Voltar</Text>
                </TouchableOpacity>
                    <View style={styles.cardDesc}>
                        <Text style={styles.cardDescText}></Text>
                        <Text style={styles.cardDescText}>Produto</Text>
                        <Text style={styles.cardDescText}>QTD</Text>
                    </View>
                    <FlatList 
                data={cart}
                keyExtractor={item => item.id}
                renderItem={({item}) => (
                    <CartGameCard product={item}/>

            )}
            />

                    <View style={styles.priceContainer}>
                        <Text style={styles.priceDesc}>FRETE</Text>
                        <Text style={styles.priceDesc}>TOTAL</Text>
                    </View>
                    <View style={styles.priceContainer}>
                        <Text style={styles.priceVal}>R$ 50,00</Text>
                        <Text style={styles.priceVal}>R$ {cart.price}</Text>
                    </View>
                    <TouchableOpacity style={styles.btn}>
                        <Text style={styles.textBtn}>FINALIZAR COMPRA</Text>
                    </TouchableOpacity>
            </View>
        </View>
        </>
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
        height: "80%",
        backgroundColor: "white",
        marginTop: 20,
        width: 350,
        padding: 20,
    },
    cardHeader: {
        flexDirection: "row",
        alignItems: "center"
    },
    cardBack: {
        fontSize: 21,
        color: "black",
        paddingLeft: 10,
    },
    cardDesc: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingTop: 20,
    },
    cardDescText: {
        fontSize: 18,
        color: "rgb(153,153,153)",
    },
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
        paddingLeft: 10,
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
    priceContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 5,
    },
    priceDesc: {
        color: "black",
        fontSize: 18
    },
    priceVal: {
        fontWeight: "bold",
        color: "black",
        fontSize: 22
    },
    btn: {
        backgroundColor: "rgb(173,58,16)",
        color: "#fff",
        borderRadius: 10,
        marginTop: 20,
        alignItems: "center",
        height: 50,
        flexDirection: "row",
        justifyContent: "center",

    },
    textBtn: {
        color: "#fff",
        fontWeight: "bold",
        alignSelf: "center",
        paddingRight: 10,
        
    },
})