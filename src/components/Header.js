import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { AntDesign } from '@expo/vector-icons';
import {useNavigation} from '@react-navigation/native'


export const Header = () => {

    const navigation = useNavigation()


    return (
        <View style={styles.container}>
            <Text style={styles.title}>
            GαɱҽSƚσɾҽ
            </Text>

            <TouchableOpacity onPress={() => navigation.navigate("CartPage")}>
            <View style={styles.cartContainer}>
                <View>
                    <Text style={styles.text}>Meu carrinho</Text>
                </View>

                <AntDesign  name="shoppingcart" size={40} color="white" />
            </View>
            </TouchableOpacity>

        </View>
    )
}


const styles = StyleSheet.create({
    container: {
      backgroundColor: 'rgb(173,58,16)',
      alignItems: "center",
      justifyContent: "space-between",
      width: "100%",
      height: 100,
      flexDirection: "row",
      padding: 20,
      paddingTop: 50
    },
    title: {
        color: "white",
        fontSize: 30,
        textShadowColor: "black",
        textShadowRadius: 15,
    },
    text: {
        color: "white",
        fontSize: 18,
        marginRight: 5,
    },
    cartContainer: {
        flexDirection: "row",
        alignItems: "center",
        height: 60,
    },
    textAmount: {
        color: "white",
    }
  });
  
