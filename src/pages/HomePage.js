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

export const HomePage = ({ navigation }) => {
  const { games } = useGames();
  const [filteredData, setFilteredData] = useState([]);

  const [search, setSearch] = useState("");

  useEffect(() => {
    searchFilter(search);
  }, [search]);

  const searchFilter = (text) => {
    if (text) {
      const newData = games.filter((item) => {
        // const itemData = item.name ? item.name.toUpperCase() : "".toUpperCase()

        // const textData = text.toUpperCase()
        // return itemData.indexOf(textData) >- 1
        console.log(text);
      });
      setFilteredData(newData);
      setSearch(text);
    } else {
      console.log(text);
      setFilteredData(games);
      setSearch(text);
    }
  };

  return (
    <>
      <Header />
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <TextInput
            value={search}
            onChangeText={setSearch}
            textAlign={"center"}
            placeholder="Buscar seu jogo favorito"
            style={styles.input}
          />
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
            {games
              .filter((dataFiltered) => dataFiltered.name.includes(search))
              .map((item) => (
                <GameCard item={item} />
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
  },
  input: {
    color: "rgba(0, 0, 0, 0.5)",
    fontSize: 14,
  },
  inputContainer: {
    backgroundColor: "white",
    marginTop: 20,
    borderWidth: 1,
    borderRadius: 6,
    height: 50,
    width: "55%",
    paddingTop: 8,
  },
});
