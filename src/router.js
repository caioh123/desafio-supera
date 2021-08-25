import React from 'react'

import {NavigationContainer} from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import { DetailPage } from './pages/DetailPage'
import { HomePage } from './pages/HomePage'

const Stack = createStackNavigator()

export const Routes = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen 
                name="HomePage"
                component={HomePage}
                options={{headerShown: false}}
                />
                <Stack.Screen 
                name="DetailPage"
                component={DetailPage}
                options={{headerShown: false}}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}