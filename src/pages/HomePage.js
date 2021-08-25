import React from 'react'
import {View, Text, StyleSheet} from 'react-native'
import {Header} from '../components/Header'

export const HomePage = () => {
    return (
        <>
        <Header />
        <View style={styles.container}>
            <Text style={{color: "#fff"}}>Hello wasdasdorld</Text>
        </View>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'black',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
  
