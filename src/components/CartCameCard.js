import React, { useEffect } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { Ionicons, EvilIcons, AntDesign } from "@expo/vector-icons";
import { useCart } from "../context/cartContext";

export const CartGameCard = ({ product, data, itemsPrice }) => {
  const { cart, setCart, onAdd } = useCart();
  const subTotal = product.qty * product.price;

  const onRemove = (product) => {
    const productInCart = cart.find((cartItem) => cartItem.id === product.id);

    if (productInCart.qty === 1) {
      setCart(cart.filter((game) => game.id !== product.id));
    } else {
      setCart(
        cart.map((game) =>
          game.id === product.id
            ? { ...productInCart, qty: productInCart.qty - 1 }
            : game
        )
      );
    }
  };

  return (
    <View style={styles.cardMain}>
      <Image style={styles.gameImg} source={product.image} />
      <View style={styles.gameContainer} alignItems={"center"}>
        <Text numberOfLines={2} style={styles.gameName}>
          {product.name}
        </Text>
        <Text style={styles.gamePrice}>R$ {subTotal}</Text>
      </View>
      <View style={styles.cardQty}>
        <AntDesign
          onPress={() => onRemove(product)}
          name="minuscircleo"
          size={20}
          color="rgb(173,58,16)"
        />
        <Text style={{ fontSize: 20, paddingLeft: 5 }}>{product.qty}</Text>
        <EvilIcons
          onPress={() => onAdd(product)}
          name="plus"
          size={30}
          color="rgb(173,58,16)"
        />
      </View>
    </View>
  );
};

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
    flexDirection: "row",
    width: 65,
    alignItems: "center",
    justifyContent: "space-between",
    paddingLeft: 5,
  },
  gameName: {
    color: "black",
    fontSize: 15,
    height: 30,
    maxWidth: 300,
  },
  gamePrice: {
    fontWeight: "bold",
    color: "black",
    fontSize: 16,
  },
});
