import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { AntDesign } from '@expo/vector-icons';

export const Header = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>
            GαɱҽSƚσɾҽ
            </Text>
            <View style={styles.cartContainer}>
                <View>
                    <Text style={styles.text}>Meu carrinho</Text>
                    <Text style={styles.textAmount}>0 itens</Text>
                </View>

                <AntDesign name="shoppingcart" size={40} color="white" />
            </View>

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
  
