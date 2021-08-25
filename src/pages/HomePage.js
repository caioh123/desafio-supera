import React from 'react'
import {View, Text, StyleSheet, TextInput} from 'react-native'
import { GameCard } from '../components/GameCard'
import {Header} from '../components/Header'
import { data } from '../products'

export const HomePage = () => {
    return (
        <>
        <Header />
        <View style={styles.container}>
            <View style={styles.inputContainer}>
            
            <TextInput multiline={true} textAlign={"center"} placeholder="Buscar seu jogo favorito" style={styles.input}>Procure o seu game favorito</TextInput>
            </View>
            <View>
            <GameCard data={data} />
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
        fontSize: 18
    },
    inputContainer: {
        backgroundColor: "white",
        marginTop: 50,
        borderWidth: 1,
        borderRadius: 6,
        height: 50,
        width: "80%",
        paddingTop: 8
        
    }
  });
  
