import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import cartIcon from "../../assets/cart-icon.png";
import { useCart } from "../context/cartContext";

export const Header = () => {
  const navigation = useNavigation();

  const { cart } = useCart();

  const productQty = cart.length;

  return (
    <View style={styles.container}>
      <Text
        onPress={() => navigation.navigate("HomePage")}
        style={styles.title}
      >
        GαɱҽSƚσɾҽ
      </Text>

      <TouchableOpacity onPress={() => navigation.navigate("CartPage")}>
        <View style={styles.cartContainer}>
          <Image style={styles.cartIcon} source={cartIcon} />
          <View style={styles.cartQty}>
            <Text style={styles.qty}>{productQty}</Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgb(173,58,16)",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    height: 100,
    flexDirection: "row",
    padding: 20,
    paddingTop: 50,
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
  },
  cartIcon: {
    width: 33,
    height: 25,
  },
  cartQty: {
    fontSize: 14,
    color: "#333",
    backgroundColor: "white",
    borderRadius: 15,
    width: 15,
    height: 15,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
  },
  qty: {
    textAlign: "center",
    color: "black",
  },
});
