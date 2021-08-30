import React, { useState } from "react";
import { View, StyleSheet, TextInput, FlatList } from "react-native";
import { GameCard } from "../components/GameCard";
import { Header } from "../components/Header";
import { useGames } from "../context/gameContext";
import { Picker } from "@react-native-picker/picker";

export const HomePage = () => {
  const { games } = useGames();
  const [selectedFilter, setSelectedFilter] = useState("name");

  const [search, setSearch] = useState("");

  const handleOrderGames = () => {
    if (!games.length) {
      return [];
    }

    if (selectedFilter === "price") {
      return games.sort((a, b) => a.price - b.price);
    }
    if (selectedFilter === "pop") {
      return games.sort((a, b) => b.score - a.score);
    }
    return games.sort((a, b) => a.name.localeCompare(b.name));
  };

  const orderedGames = handleOrderGames();

  const name = search.toLowerCase();

  const gamesToShow = orderedGames.filter((game) =>
    game.name.toLowerCase().includes(name)
  );

  return (
    <>
      <Header />
      <View style={styles.container}>
        <View style={styles.inputs}>
          <Picker
            style={[styles.inputContainer, { width: "40%" }]}
            selectedValue={selectedFilter}
            onValueChange={(itemValue) => setSelectedFilter(itemValue)}
          >
            <Picker.Item label="Alfabético" value="name" />
            <Picker.Item label="Preço" value="price" />
            <Picker.Item label="Popularidade" value="pop" />
          </Picker>
          <View style={styles.inputContainer}>
            <TextInput
              value={search}
              onChangeText={setSearch}
              textAlign={"center"}
              placeholder="Buscar seu jogo favorito"
              style={styles.input}
            />
          </View>
        </View>

        <View>
          <FlatList
            data={gamesToShow}
            keyExtractor={(item) => String(item.id)}
            renderItem={({ item }) => <GameCard item={item} />}
          />
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "rgb(25,25,32)",
    paddingBottom: 100,
  },
  input: {
    color: "rgba(0, 0, 0, 0.5)",
    fontSize: 14,
  },
  inputs: {
    width: "100%",
    justifyContent: "space-between",
    flexDirection: "row",
    padding: 20,
    alignItems: "center",
  },
  inputContainer: {
    backgroundColor: "white",
    marginTop: 20,
    borderWidth: 1,
    height: 50,
    width: "50%",
    paddingTop: 8,
  },
});
