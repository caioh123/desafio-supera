import React, { useState, useCallback, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Image,
  FlatList,
  ScrollView,
} from "react-native";
import { GameCard } from "../components/GameCard";
import { Header } from "../components/Header";
import { useGames } from "../context/gameContext";
import { Picker } from "@react-native-picker/picker";

export const HomePage = ({ navigation }) => {
  const { games } = useGames();
  const [selectedFilter, setSelectedFilter] = useState("price");

  const [search, setSearch] = useState("");

  const ItemsToShow = games.filter(() => {
    if (selectedFilter === "price") {
      return games.sort((a, b) => b.price - a.price);
    } else {
      return games.sort((a, b) => b.score - a.score);
    }
  });

  return (
    <>
      <Header />
      <View style={styles.container}>
        <View style={styles.inputs}>
          <Picker
            style={[styles.inputContainer, { width: "40%" }]}
            selectedValue={selectedFilter}
            onValueChange={(itemValue, itemIndex) =>
              setSelectedFilter(itemValue)
            }
          >
            <Picker.Item label="Popularidade" value="pop" />
            <Picker.Item label="Preço" value="price" />
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
          {/* 
            <FlatList 
                data={filteredData ? filteredData : games}
                keyExtractor={item => String(item.id)}                
                renderItem={({item}) => (
                    <GameCard search={search} item={item}/>

            )}
            /> */}

          <ScrollView>
            {search
              ? games
                  .filter((dataFiltered) => dataFiltered.name.includes(search))
                  .map((item, index) => <GameCard key={index} item={item} />)
              : ItemsToShow.map((item, index) => (
                  <GameCard key={index} item={item} />
                ))}
          </ScrollView>
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
  },
  input: {
    color: "rgba(0, 0, 0, 0.5)",
    fontSize: 14,
  },
  inputs: {
    width: "100%",
    justifyContent: "space-between",
    flexDirection: "row",
  },
  inputContainer: {
    backgroundColor: "white",
    marginTop: 20,
    borderWidth: 1,
    borderRadius: 6,
    height: 50,
    width: "50%",
    paddingTop: 8,
  },
});
