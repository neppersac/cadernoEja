import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/screens/HomeScreen';
import ProductFormScreen from './src/screens/ProductFormScreen';
import ShoppingListFormScreen from './src/screens/ShoppingListFormScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="ProductForm" component={ProductFormScreen} />
        <Stack.Screen name="ShoppingListForm" component={ShoppingListFormScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
