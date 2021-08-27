import React, {createContext, useState, useContext, useEffect} from 'react'
import { data } from '../products'

export const GameContext = createContext({})

export const CartContext = createContext([])

export const GamesProvider = (props) => {
    const [games, setGames] = useState([])

    useEffect(() => {
        setGames(data)
    }, [])

    return (
        <GameContext.Provider value={{games}}>
            {props.children}
        </GameContext.Provider>
    )

}

export const useGames = () => useContext(GameContext)