import React from 'react'
import {View, Text, StyleSheet, TextInput, Image, FlatList} from 'react-native'
import { GameCard } from '../components/GameCard'
import {Header} from '../components/Header'
import { data } from '../products'

export const HomePage = ({navigation}) => {
    return (
    <>
        <Header />
        <View style={styles.container}>
            <View style={styles.inputContainer}>
            
            <TextInput textAlign={"center"} placeholder="Buscar seu jogo favorito" style={styles.input}>Procure o seu game favorito</TextInput>
            </View>
            <View>

            <FlatList 
                data={data}
                keyExtractor={item => item.id}
                renderItem={({item}) => (
                    <GameCard item={item}/>

            )}
            />

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
    input: {
        color: "rgba(0, 0, 0, 0.5)",
        fontSize: 14
    },
    inputContainer: {
        backgroundColor: "white",
        marginTop: 20,
        borderWidth: 1,
        borderRadius: 6,
        height: 50,
        width: "55%",
        paddingTop: 8,
        
        
    }
  });
  
