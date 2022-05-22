import React from 'react'
import { Box, NativeBaseProvider } from 'native-base'
// import DetailAgenda from './src/components/DetailAgenda'
import FEApp from './src/screens/FEApp'
import Button from './src/screens/Button'
import Todo from './src/screens/Todo'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { useTheme } from 'native-base'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Ionicons } from '@expo/vector-icons'

const Stack = createStackNavigator()
const Tab = createBottomTabNavigator()

function MyTab(){
    const theme = useTheme()

    return (
        <Tab.Navigator
        initialRouteName="FEApp"
        screenOptions={({ route }) => ({
            headerMode: "screen",
            headerTintColor: "white",
            headerStyle: { backgroundColor: theme.colors.cyan["200"] },
            tabBarIcon: ({ focused, color, size }) => {
            let iconName

            if(route.name === "FEApp"){
                iconName = focused ? "information-circle" : "information-circle-outline"
            }else if (route.name === "Button") {
                iconName = focused ? "ios-calculator" : "ios-calculator-outline"
            } else if (route.name == "Todo") {
                iconName = focused ? "list-circle" : "list-circle-outline"
            }

            return <Ionicons name={iconName} size={size} color={color} />
            },
            tabBarActiveTintColor: theme.colors.cyan["800"],
            tabBarInactiveTintColor: "black"
        })}
        >
        <Tab.Screen name="Introduction" component={FEApp} options={{ headerShown: false }} />
        <Tab.Screen name="Calculator" component={Button} options={{ headerShown: false }} />
        <Tab.Screen name="Todo" component={Todo} options={{ headerShown: false }} />
        
        </Tab.Navigator>
  )
}

export default function Container() {
    const theme = useTheme()
  return (
      <NavigationContainer>
          <Stack.Navigator
            initialRouteName="FEApp"
            screenOptions={{
            headerMode: "screen",
            headerTintColor: "white",
            headerStyle: { backgroundColor: theme.colors.cyan["700"] },
            }}
          >
              <Stack.Screen 
                name='MyTab'
                component={MyTab}
                options={{
                    title: "Todo Gambling List"
                }}
              />
              {/* <Stack.Screen 
                name='FEApp'
                component={FEApp}
                options={{
                    title: "Introduce"
                }}
              /> */}
              <Stack.Screen 
                name='Button'
                component={Button}
                options={{
                    title: "Calculator"
                }}
              />
              <Stack.Screen 
                name='Todo'
                component={Todo}
                options={{
                    title: "Todo List"
                }}
              />
          </Stack.Navigator>
      </NavigationContainer>
  )
}