import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import StackNavigation from './src/navigations/stackNavigation/StackNavigation'

const App = () => {
  return (
    <>
     <NavigationContainer>
      <StackNavigation/>
      </NavigationContainer> 
    </>
  )
}

export default App
