import React from "react";
import { Text, StyleSheet, View, Image, TouchableOpacity } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { useCart } from "../context/cartContext";
import { imagePaths } from "../imagesDictionary";
import { formatPrice } from "../helpers/priceHelper";

export const GameCard = ({ item }) => {
  const { cart, setCart, onAdd } = useCart();

  const productQty = (product) => {
    const productInCart = cart.find((cartItem) => {
      return cartItem.id === product.id;
    });

    if (productInCart) {
      return productInCart.qty;
    }
    return 0;
  };

  return (
    <>
      <View style={styles.container}>
        <View>
          <Image alignSelf={"center"} source={imagePaths[item.imageKey]} />
          <Text style={styles.gameName}>{item.name}</Text>
          <View style={styles.resultContainer}>
            <Text style={styles.gamePrice}>{formatPrice(item.price)}</Text>
            <View style={{ alignItems: "center" }}>
              <Text style={styles.pop}>Popularidade</Text>
              <Text style={[styles.pop, { fontWeight: "normal" }]}>
                {item.score}
              </Text>
            </View>
          </View>

          <TouchableOpacity onPress={() => onAdd(item)} style={styles.btn}>
            <View style={{ flexDirection: "row" }}>
              <FontAwesome
                style={{ paddingLeft: 10 }}
                name="cart-plus"
                size={24}
                color="white"
              />
              <Text style={styles.textAmmount}>{productQty(item)}</Text>
            </View>
            <Text style={styles.textBtn}>ADICIONAR AO CARRINHO</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

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
    justifyContent: "space-between",
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
    marginTop: 10,
  },
  gamePrice: {
    fontWeight: "bold",
    color: "black",
    fontSize: 21,
  },
  resultContainer: {
    justifyContent: "space-between",
    flexDirection: "row",
    height: 60,
    alignItems: "center",
  },
  pop: {
    fontWeight: "bold",
    color: "black",
    fontSize: 17,
  },
});
