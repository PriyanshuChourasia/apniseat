import { createStackNavigator } from "@react-navigation/stack"
import React from "react"
import { RootStackParamList } from "../../interfaces/StackNavigationInterface/StackNavigationInteface";
import HomeScreen from "../../screens/app/home/HomeScreen";


const Stack = createStackNavigator<RootStackParamList>();


const StackNavigation = () => {
  return (
    <>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </>
  )
}

export default StackNavigation
